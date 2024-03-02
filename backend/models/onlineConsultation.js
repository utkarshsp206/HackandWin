import mongoose from 'mongoose'

const onlineConsSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Doctor',
      required: true
    },
    pateintName:{
      type: String,
      required: true
    },
    pateintEmail:{
      type: String,
      required: true
    },
    pateintNumber:{
      type: String,
      required: true
    },
    timeslot: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    paymentType: {
      type: String
    }
  },
  {
    timestamps: true
  }
)

export default mongoose.model('BookedConsultation', onlineConsSchema)
