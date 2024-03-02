import mongoose from 'mongoose'

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  specialisation: {
    type: String,
    required: true
  },
  stories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  ],
  clinicfees: {
    type: Number,
    required: true
  },
  onlinefees: {
    type: Number,
    required: true
  },
  clinicName: {
    type: String,
    required: true
  },
  timings: {
    type: String,
    required: true
  }
})

export default mongoose.model('Doctor', doctorSchema)
