import mongoose from 'mongoose'

const oxygenSchema = new mongoose.Schema({
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
  types: [
    {
      cylinderType: String,
      cylinderCost: String
    }
  ],
 
})

export default mongoose.model('Oxygen', oxygenSchema)
