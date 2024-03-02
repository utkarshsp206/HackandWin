import mongoose from 'mongoose'

const bookLabTestSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    testType: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'TestServices',
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

export default mongoose.model('BookedLabTests', bookLabTestSchema)
