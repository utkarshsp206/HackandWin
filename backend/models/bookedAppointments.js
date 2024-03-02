import mongoose from 'mongoose'

const bookedAppointSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    pateintName: {
      type: String,
      required: true
    },
    pateintEmail: {
      type: String,
      required: true
    },
    pateintNumber: {
      type: String,
      required: true
    },
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Doctor',
      required: true
    },
    timeslot: {
      type: String,
      required: true
    },
    date: {
      type: String
    },
    paymentType: {
      type: String
    }
  },
  {
    timestamps: true
  }
)

export default mongoose.model('BookedAppointments', bookedAppointSchema)
