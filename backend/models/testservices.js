import mongoose from 'mongoose'

const testSchema = new mongoose.Schema(
  {
    testName: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    testDesc: {
      type: String,
      required: true
    },
    what: {
      type: String,
      required: true
    },
    preparation: {
      type: String,
      required: true
    },
    cost: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
)

export default mongoose.model('TestServices', testSchema)
