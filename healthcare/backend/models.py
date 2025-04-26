# models.py
from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Text, Float
from sqlalchemy.orm import relationship
from database import Base
from datetime import datetime

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100))
    email = Column(String(100), unique=True, index=True, nullable=False)
    hashed_password = Column(String(255), nullable=False)
    role = Column(String(20), nullable=False)  # 'patient', 'doctor', or 'admin'
    # Relationships
    appointments = relationship("Appointment", back_populates="patient", foreign_keys='Appointment.patient_id')
    appointments_as_doctor = relationship("Appointment", back_populates="doctor", foreign_keys='Appointment.doctor_id')
    prescriptions = relationship("Prescription", back_populates="patient", foreign_keys='Prescription.patient_id')
    prescriptions_as_doctor = relationship("Prescription", back_populates="doctor", foreign_keys='Prescription.doctor_id')
    payments = relationship("Payment", back_populates="patient")
    feedbacks = relationship("Feedback", back_populates="patient", foreign_keys='Feedback.patient_id')
    feedbacks_for_doctor = relationship("Feedback", back_populates="doctor", foreign_keys='Feedback.doctor_id')

class Appointment(Base):
    __tablename__ = "appointments"
    id = Column(Integer, primary_key=True, index=True)
    patient_id = Column(Integer, ForeignKey('users.id'))
    doctor_id = Column(Integer, ForeignKey('users.id'))
    date_time = Column(DateTime, default=datetime.utcnow)
    reason = Column(String(255))
    status = Column(String(50), default="Scheduled")
    # Relationships:
    patient = relationship("User", back_populates="appointments", foreign_keys=[patient_id])
    doctor = relationship("User", back_populates="appointments_as_doctor", foreign_keys=[doctor_id])

class MedicalRecord(Base):
    __tablename__ = "medical_records"
    id = Column(Integer, primary_key=True, index=True)
    patient_id = Column(Integer, ForeignKey('users.id'))
    uploaded_by = Column(Integer, ForeignKey('users.id'))  # who uploaded it
    description = Column(Text)
    file_path = Column(String(255))  # path to the file
    date = Column(DateTime, default=datetime.utcnow)
    # Relationships can be added if needed

class Prescription(Base):
    __tablename__ = "prescriptions"
    id = Column(Integer, primary_key=True, index=True)
    patient_id = Column(Integer, ForeignKey('users.id'))
    doctor_id = Column(Integer, ForeignKey('users.id'))
    date = Column(DateTime, default=datetime.utcnow)
    medicines = Column(Text)  # e.g., JSON string listing medicines
    notes = Column(Text)
    # Relationships:
    patient = relationship("User", back_populates="prescriptions", foreign_keys=[patient_id])
    doctor = relationship("User", back_populates="prescriptions_as_doctor", foreign_keys=[doctor_id])

class Payment(Base):
    __tablename__ = "payments"
    id = Column(Integer, primary_key=True, index=True)
    appointment_id = Column(Integer, ForeignKey('appointments.id'))
    patient_id = Column(Integer, ForeignKey('users.id'))
    amount = Column(Float)
    method = Column(String(50))
    status = Column(String(50), default="Completed")
    date = Column(DateTime, default=datetime.utcnow)
    # Relationships:
    patient = relationship("User", back_populates="payments")

class Feedback(Base):
    __tablename__ = "feedback"
    id = Column(Integer, primary_key=True, index=True)
    patient_id = Column(Integer, ForeignKey('users.id'))
    doctor_id = Column(Integer, ForeignKey('users.id'))
    rating = Column(Integer)
    comment = Column(Text)
    date = Column(DateTime, default=datetime.utcnow)
    status = Column(String(50), default="Pending")
    # Relationships:
    patient = relationship("User", back_populates="feedbacks", foreign_keys=[patient_id])
    doctor = relationship("User", back_populates="feedbacks_for_doctor", foreign_keys=[doctor_id])

class VideoConsultation(Base):
    __tablename__ = "video_consultations"
    id = Column(Integer, primary_key=True, index=True)
    patient_id = Column(Integer, ForeignKey('users.id'))
    doctor_id = Column(Integer, ForeignKey('users.id'))
    date_time = Column(DateTime, default=datetime.utcnow)
    status = Column(String(50), default="Scheduled")
    meeting_link = Column(String(255), nullable=True)
