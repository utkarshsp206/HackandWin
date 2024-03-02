import mongoose from 'mongoose'

const MedicineSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
    cost: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    areaOfUse: {
      type: String,
      required: true
    },
    howTouse: {
      type: String,
      required: true
    },
    benifits: [
      {
        benifit: String
      }
    ]
  },
  { timestamps: true }
)

export default mongoose.model('Medicine', MedicineSchema)
