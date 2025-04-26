# payments.py
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from schemas import PaymentCreate, PaymentRead
from models import Payment, Appointment, User
from database import get_db
from auth import get_current_user
from datetime import datetime

router = APIRouter(prefix="/payments", tags=["Payments"])

@router.post("/", response_model=PaymentRead)
def process_payment(payment: PaymentCreate, db: Session = Depends(get_db),
                    current_user = Depends(get_current_user)):
    # Only patients can make payments
    if current_user.role != "patient":
        raise HTTPException(status_code=401, detail="Not authorized")
    # Validate appointment ownership if needed
    new_payment = Payment(
        appointment_id=payment.appointment_id,
        patient_id=current_user.id,
        amount=payment.amount,
        method=payment.method,
        status="Completed",
        date=datetime.utcnow()
    )
    db.add(new_payment)
    db.commit()
    db.refresh(new_payment)
    return new_payment

@router.get("/", response_model=list[PaymentRead])
def list_payments(db: Session = Depends(get_db), current_user = Depends(get_current_user)):
    if current_user.role == "patient":
        payments = db.query(Payment).filter(Payment.patient_id == current_user.id).all()
    elif current_user.role == "admin":
        payments = db.query(Payment).all()
    else:
        raise HTTPException(status_code=401, detail="Not authorized")
    return payments
