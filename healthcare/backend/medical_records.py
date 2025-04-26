# medical_records.py
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from schemas import MedicalRecordCreate, MedicalRecordRead
from models import MedicalRecord
from database import get_db
from auth import get_current_user
from datetime import datetime

router = APIRouter(prefix="/medical_records", tags=["Medical Records"])

@router.post("/", response_model=MedicalRecordRead)
def upload_record(record: MedicalRecordCreate, db: Session = Depends(get_db), current_user = Depends(get_current_user)):
    new_record = MedicalRecord(
        patient_id=current_user.id,
        uploaded_by=current_user.id,
        description=record.description,
        file_path=record.file_path,
        date=datetime.utcnow()
    )
    db.add(new_record)
    db.commit()
    db.refresh(new_record)
    return new_record

@router.get("/", response_model=list[MedicalRecordRead])
def list_records(db: Session = Depends(get_db), current_user = Depends(get_current_user)):
    if current_user.role == "patient":
        records = db.query(MedicalRecord).filter(MedicalRecord.patient_id == current_user.id).all()
    elif current_user.role == "admin":
        records = db.query(MedicalRecord).all()
    else:
        raise HTTPException(status_code=401, detail="Not authorized")
    return records
