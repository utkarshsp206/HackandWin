import mongoose from 'mongoose'

const SpeacilaitiesSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  fees:{
    type: Number,
    required: true
  },
 
},{
  timestamps:true
})

export default mongoose.model('Specialities', SpeacilaitiesSchema)
