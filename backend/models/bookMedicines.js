import mongoose from 'mongoose'

const bookMedicineSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    medicine: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Medicine',
      required: true
    },
    timeslot: {
      type: String,
      required: true
    },
    date: {
      type: String
    }
  },
  {
    timestamps: true
  }
)



export default mongoose.model('BookedMedicines', bookMedicineSchema)
