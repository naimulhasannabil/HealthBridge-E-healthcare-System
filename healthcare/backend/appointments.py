# appointments.py
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from schemas import AppointmentCreate, AppointmentRead
from models import Appointment, User
from database import get_db
from auth import get_current_user

router = APIRouter(prefix="/appointments", tags=["Appointments"])

@router.post("/", response_model=AppointmentRead)
def create_appointment(appt: AppointmentCreate, db: Session = Depends(get_db), 
                       current_user = Depends(get_current_user)):
    # Only patients can create appointments
    if current_user.role != "patient":
        raise HTTPException(status_code=401, detail="Not authorized")
    # Ensure doctor exists
    doctor = db.query(User).filter(User.id == appt.doctor_id, User.role=="doctor").first()
    if not doctor:
        raise HTTPException(status_code=404, detail="Doctor not found")
    new_appt = Appointment(
        patient_id=current_user.id,
        doctor_id=appt.doctor_id,
        date_time=appt.date_time,
        reason=appt.reason,
        status="Scheduled"
    )
    db.add(new_appt)
    db.commit()
    db.refresh(new_appt)
    return new_appt

@router.get("/", response_model=list[AppointmentRead])
def list_appointments(db: Session = Depends(get_db), current_user = Depends(get_current_user)):
    if current_user.role == "patient":
        appointments = db.query(Appointment).filter(Appointment.patient_id == current_user.id).all()
    elif current_user.role == "doctor":
        appointments = db.query(Appointment).filter(Appointment.doctor_id == current_user.id).all()
    elif current_user.role == "admin":
        appointments = db.query(Appointment).all()
    else:
        raise HTTPException(status_code=401, detail="Not authorized")
    return appointments
