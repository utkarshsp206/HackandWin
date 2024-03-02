import mongoose from 'mongoose'

const bookBedSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    hospital: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Hospital',
      required: true
    },
    numberOfBeds:{
        type:String
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

export default mongoose.model('BookedBeds', bookBedSchema)
