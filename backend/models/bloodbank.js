import mongoose from 'mongoose'

const bloodBankSchema = new mongoose.Schema({
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
  bloodGroups: [
    {
      bloodGroupName: String,
      bloodGroupCost: String
    }
  ],
  services: [
    {
      serviceName: String
    }
  ]
})

export default mongoose.model('BloodBank', bloodBankSchema)
