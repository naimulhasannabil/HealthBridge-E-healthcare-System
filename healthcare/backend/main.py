# main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from database import engine, Base
import models

# 1. Create FastAPI app
app = FastAPI()

# 2. Create database tables
Base.metadata.create_all(bind=engine)

# 3. Set CORS Middleware (allow frontend access)
origins = [
    "http://localhost:5173",  # Vite runs on port 5173 by default
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Only allow your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 4. Import routers
import auth
import users
import appointments
import medical_records
import prescriptions
import payments
import feedback
import video_consult

# 5. Include routers
app.include_router(auth.router)
app.include_router(users.router)
app.include_router(appointments.router)
app.include_router(medical_records.router)
app.include_router(prescriptions.router)
app.include_router(payments.router)
app.include_router(feedback.router)
app.include_router(video_consult.router)

# 6. Optional: Root welcome route
@app.get("/")
def read_root():
    return {"message": "Welcome to HealthBridge API"}
