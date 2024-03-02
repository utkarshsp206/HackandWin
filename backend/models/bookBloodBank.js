import mongoose from 'mongoose'

const bookBLoodSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    bloodbank: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'BloodBank',
      required: true
    },
    bloodGroup: {
      type: String,
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

export default mongoose.model('BookedBlood', bookBLoodSchema)
