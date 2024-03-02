import mongoose from 'mongoose'

const callSchema = new mongoose.Schema(
  {
    query: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    number: {
      type: Number,
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

export default mongoose.model('CallRequets', callSchema)
