import mongoose from 'mongoose'

const StoriesSchema = new mongoose.Schema(
  {
    doctorID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Doctor',
      required: true
    },
    title: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    },

    password: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

export default mongoose.model('Stories', StoriesSchema)
