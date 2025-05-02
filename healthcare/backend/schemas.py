# schemas.py
from pydantic import BaseModel, EmailStr
from datetime import datetime

# User Schemas
class UserCreate(BaseModel):
    name: str
    email: EmailStr
    password: str
    role: str   # 'patient', 'doctor', 'admin'

class UserRead(BaseModel):
    id: int
    name: str
    email: EmailStr
    role: str
    class Config:
        orm_mode = True

# Token Schemas
class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    email: str | None = None
    id: int | None = None
    role: str | None = None

# Login Schema
class Login(BaseModel):
    email: EmailStr
    password: str

# Appointment Schemas
class AppointmentBase(BaseModel):
    doctor_id: int
    date_time: datetime
    reason: str

class AppointmentCreate(AppointmentBase):
    pass

class AppointmentRead(AppointmentBase):
    id: int
    patient_id: int
    status: str
    class Config:
        orm_mode = True

# Medical Record Schemas
class MedicalRecordBase(BaseModel):
    description: str
    file_path: str | None = None

class MedicalRecordCreate(MedicalRecordBase):
    pass

class MedicalRecordRead(MedicalRecordBase):
    id: int
    patient_id: int
    uploaded_by: int
    date: datetime
    class Config:
        orm_mode = True

# Prescription Schemas
class PrescriptionBase(BaseModel):
    patient_id: int
    medicines: str    # Could be JSON string for list
    notes: str

class PrescriptionCreate(PrescriptionBase):
    pass

class PrescriptionRead(PrescriptionBase):
    id: int
    doctor_id: int
    date: datetime
    class Config:
        orm_mode = True

# Payment Schemas
class PaymentBase(BaseModel):
    appointment_id: int
    amount: float
    method: str

class PaymentCreate(PaymentBase):
    pass

class PaymentRead(PaymentBase):
    id: int
    patient_id: int
    status: str
    date: datetime
    class Config:
        orm_mode = True

# Feedback Schemas
class FeedbackBase(BaseModel):
    doctor_id: int
    rating: int
    comment: str

class FeedbackCreate(FeedbackBase):
    pass

class FeedbackRead(FeedbackBase):
    id: int
    patient_id: int
    date: datetime
    status: str
    class Config:
        orm_mode = True

# Video Consultation Schemas
class VideoConsultationBase(BaseModel):
    doctor_id: int
    date_time: datetime

class VideoConsultationCreate(VideoConsultationBase):
    pass

class VideoConsultationRead(VideoConsultationBase):
    id: int
    patient_id: int
    status: str
    meeting_link: str | None = None
    class Config:
        orm_mode = True
