# feedback.py
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from schemas import FeedbackCreate, FeedbackRead
from models import Feedback, User
from database import get_db
from auth import get_current_user
from datetime import datetime

router = APIRouter(prefix="/feedback", tags=["Feedback"])

@router.post("/", response_model=FeedbackRead)
def submit_feedback(feedback: FeedbackCreate, db: Session = Depends(get_db),
                    current_user = Depends(get_current_user)):
    # Only patients can submit feedback
    if current_user.role != "patient":
        raise HTTPException(status_code=401, detail="Not authorized")
    doctor = db.query(User).filter(User.id == feedback.doctor_id, User.role=="doctor").first()
    if not doctor:
        raise HTTPException(status_code=404, detail="Doctor not found")
    new_feedback = Feedback(
        patient_id=current_user.id,
        doctor_id=feedback.doctor_id,
        rating=feedback.rating,
        comment=feedback.comment,
        date=datetime.utcnow(),
        status="Pending"
    )
    db.add(new_feedback)
    db.commit()
    db.refresh(new_feedback)
    return new_feedback

@router.get("/", response_model=list[FeedbackRead])
def list_feedback(db: Session = Depends(get_db), current_user = Depends(get_current_user)):
    if current_user.role == "patient":
        feedbacks = db.query(Feedback).filter(Feedback.patient_id == current_user.id).all()
    elif current_user.role == "doctor":
        feedbacks = db.query(Feedback).filter(Feedback.doctor_id == current_user.id).all()
    elif current_user.role == "admin":
        feedbacks = db.query(Feedback).all()
    else:
        raise HTTPException(status_code=401, detail="Not authorized")
    return feedbacks
