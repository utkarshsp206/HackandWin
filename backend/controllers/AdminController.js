import {
  BookMedicine,
  BookedLabtest,
  BookOxygen,
  BookedBlood,
  BookedAppointment,
  OnlineConsultation,
  BookedBeds,
  CallRequets
} from '../models'

const AdminController = {
  async getAll (req, res, next) {
    try {
      const mymeds = await BookMedicine.find().populate('medicine user')
      const mylLabTests = await BookedLabtest.find().populate('testType user')

      const myOxygens = await BookOxygen.find().populate('center user')
      const myAppointments = await BookedAppointment.find().populate(
        'doctor user'
      )
      const myConsultations = await OnlineConsultation.find().populate(
        'doctor user'
      )

      const mybeds = await BookedBeds.find().populate('user hospital')
      const myBloods = await BookedBlood.find().populate('bloodbank user')
      const calls = await CallRequets.find()

      res.json({
        mymeds,
        myAppointments,
        myBloods,
        myConsultations,
        myOxygens,
        mybeds,
        mylLabTests,
        calls
      })
    } catch (error) {
      console.log(error)
    }
  },
  async deleteLabTest (req, res, next) {
    try {
      const { id } = req.params
      const deletedLabTest = await BookedLabtest.findByIdAndDelete(id)
      if (!deletedLabTest) {
        return res.status(404).json({ message: 'Lab test not found' })
      }
      res.json({ message: 'Lab test deleted successfully' })
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: 'Server error' })
    }
  },
  async deleteAppointments (req, res, next) {
    try {
      const { id } = req.params
      const deletedLabTest = await BookedAppointment.findByIdAndDelete(id)
      if (!deletedLabTest) {
        return res.status(404).json({ message: 'Lab test not found' })
      }
      res.json({ message: 'Lab test deleted successfully' })
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: 'Server error' })
    }
  },
  async deleteOnCon (req, res, next) {
    try {
      const { id } = req.params
      const deletedLabTest = await OnlineConsultation.findByIdAndDelete(id)
      if (!deletedLabTest) {
        return res.status(404).json({ message: 'Lab test not found' })
      }
      res.json({ message: 'Lab test deleted successfully' })
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: 'Server error' })
    }
  },
  async deleteOxygen (req, res, next) {
    try {
      const { id } = req.params
      const deletedLabTest = await BookOxygen.findByIdAndDelete(id)
      if (!deletedLabTest) {
        return res.status(404).json({ message: 'Lab test not found' })
      }
      res.json({ message: 'Lab test deleted successfully' })
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: 'Server error' })
    }
  },
  async deleteBlood (req, res, next) {
    try {
      const { id } = req.params
      const deletedLabTest = await BookedBlood.findByIdAndDelete(id)
      if (!deletedLabTest) {
        return res.status(404).json({ message: 'Lab test not found' })
      }
      res.json({ message: 'Lab test deleted successfully' })
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: 'Server error' })
    }
  },
  async deleteBed (req, res, next) {
    try {
      const { id } = req.params
      const deletedLabTest = await BookedBeds.findByIdAndDelete(id)
      if (!deletedLabTest) {
        return res.status(404).json({ message: 'Lab test not found' })
      }
      res.json({ message: 'Lab test deleted successfully' })
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: 'Server error' })
    }
  },
  async deleteMeds (req, res, next) {
    try {
      const { id } = req.params
      const deletedLabTest = await BookMedicine.findByIdAndDelete(id)
      if (!deletedLabTest) {
        return res.status(404).json({ message: 'Lab test not found' })
      }
      res.json({ message: 'Lab test deleted successfully' })
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: 'Server error' })
    }
  },
  async deleteMeds (req, res, next) {
    try {
      const { id } = req.params
      const deletedLabTest = await CallRequets.findByIdAndDelete(id)
      if (!deletedLabTest) {
        return res.status(404).json({ message: 'Lab test not found' })
      }
      res.json({ message: 'Lab test deleted successfully' })
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: 'Server error' })
    }
  }
}

export default AdminController
