# prescriptions.py
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from schemas import PrescriptionCreate, PrescriptionRead
from models import Prescription, User
from database import get_db
from auth import get_current_user
from datetime import datetime

router = APIRouter(prefix="/prescriptions", tags=["Prescriptions"])

@router.post("/", response_model=PrescriptionRead)
def create_prescription(presc: PrescriptionCreate, db: Session = Depends(get_db),
                        current_user = Depends(get_current_user)):
    # Only doctors can create prescriptions
    if current_user.role != "doctor":
        raise HTTPException(status_code=401, detail="Not authorized")
    patient = db.query(User).filter(User.id == presc.patient_id, User.role=="patient").first()
    if not patient:
        raise HTTPException(status_code=404, detail="Patient not found")
    new_presc = Prescription(
        patient_id=presc.patient_id,
        doctor_id=current_user.id,
        date=datetime.utcnow(),
        medicines=presc.medicines,
        notes=presc.notes
    )
    db.add(new_presc)
    db.commit()
    db.refresh(new_presc)
    return new_presc

@router.get("/", response_model=list[PrescriptionRead])
def list_prescriptions(db: Session = Depends(get_db), current_user = Depends(get_current_user)):
    if current_user.role == "patient":
        prescriptions = db.query(Prescription).filter(Prescription.patient_id == current_user.id).all()
    elif current_user.role == "doctor":
        prescriptions = db.query(Prescription).filter(Prescription.doctor_id == current_user.id).all()
    elif current_user.role == "admin":
        prescriptions = db.query(Prescription).all()
    else:
        raise HTTPException(status_code=401, detail="Not authorized")
    return prescriptions
