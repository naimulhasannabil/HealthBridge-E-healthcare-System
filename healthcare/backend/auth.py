# auth.py
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from database import get_db
from models import User
from schemas import UserCreate, UserRead, Login, Token, TokenData
import bcrypt
from jose import JWTError, jwt
from datetime import datetime, timedelta

router = APIRouter(prefix="/auth", tags=["Authentication"])

SECRET_KEY = "YOUR_SECRET_KEY"  # Change to your secret key or load from env
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 60

@router.post("/register", response_model=UserRead)
def register(user: UserCreate, db: Session = Depends(get_db)):
    existing = db.query(User).filter(User.email == user.email).first()
    if existing:
        raise HTTPException(status_code=400, detail="Email already registered")
    hashed_password = bcrypt.hashpw(user.password.encode("utf-8"), bcrypt.gensalt())
    new_user = User(
        name=user.name,
        email=user.email,
        hashed_password=hashed_password.decode("utf-8"),
        role=user.role
    )
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user

@router.post("/login", response_model=Token)
def login(credentials: Login, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.email == credentials.email).first()
    if not user or not bcrypt.checkpw(credentials.password.encode("utf-8"),
                                       user.hashed_password.encode("utf-8")):
        raise HTTPException(status_code=401, detail="Invalid email or password")
    expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    token_data = {"sub": user.email, "id": user.id, "role": user.role, "exp": expire}
    token = jwt.encode(token_data, SECRET_KEY, algorithm=ALGORITHM)
    return {"access_token": token, "token_type": "bearer"}

from fastapi.security import OAuth2PasswordBearer

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/auth/login")

def get_current_user(token: str = Depends(oauth2_scheme), db: Session = Depends(get_db)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
    )
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        user_id = payload.get("id")
        if user_id is None:
            raise credentials_exception
        token_data = {"id": user_id, "role": payload.get("role")}
    except JWTError:
        raise credentials_exception
    user = db.query(User).get(token_data["id"])
    if not user:
        raise credentials_exception
    return user
