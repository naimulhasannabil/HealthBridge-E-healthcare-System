# video_consult.py
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from schemas import VideoConsultationCreate, VideoConsultationRead
from models import VideoConsultation, User
from database import get_db
from auth import get_current_user
from datetime import datetime

router = APIRouter(prefix="/video_consults", tags=["Video Consultations"])

@router.post("/", response_model=VideoConsultationRead)
def schedule_video(vc: VideoConsultationCreate, db: Session = Depends(get_db),
                   current_user = Depends(get_current_user)):
    # Only patients can schedule video consultations
    if current_user.role != "patient":
        raise HTTPException(status_code=401, detail="Not authorized")
    doctor = db.query(User).filter(User.id == vc.doctor_id, User.role=="doctor").first()
    if not doctor:
        raise HTTPException(status_code=404, detail="Doctor not found")
    new_vc = VideoConsultation(
        patient_id=current_user.id,
        doctor_id=vc.doctor_id,
        date_time=vc.date_time,
        status="Scheduled",
        meeting_link=""
    )
    db.add(new_vc)
    db.commit()
    db.refresh(new_vc)
    return new_vc

@router.get("/", response_model=list[VideoConsultationRead])
def list_video_consults(db: Session = Depends(get_db), current_user = Depends(get_current_user)):
    if current_user.role == "patient":
        vcs = db.query(VideoConsultation).filter(VideoConsultation.patient_id == current_user.id).all()
    elif current_user.role == "doctor":
        vcs = db.query(VideoConsultation).filter(VideoConsultation.doctor_id == current_user.id).all()
    elif current_user.role == "admin":
        vcs = db.query(VideoConsultation).all()
    else:
        raise HTTPException(status_code=401, detail="Not authorized")
    return vcs
