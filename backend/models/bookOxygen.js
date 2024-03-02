import mongoose from 'mongoose'

const bookOxygen = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    center: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Oxygen',
      required: true
    },
    timeslot: {
      type: String,
      required: true
    },
    date: {
      type: String
    },
    type:{
        type:String
    }
  },
  {
    timestamps: true
  }
)

export default mongoose.model('BookedOxygen', bookOxygen)
