import { TestServices, Medicine, BloodBank, Hospital ,Oxygen } from '../models'
const GetControllers = {
  async getHospitalsFiltered (req, res, next) {
    const { location, service } = req.query
    try {
      const hospitals = await Hospital.find({
        location: location,
        services: { $in: [service] }
      })
      res.status(200).json(hospitals)
    } catch (error) {
      res.status(404).json({ message: error.message })
    }
  },
  async getAllTest (req, res, next) {
    try {
      const tests = await TestServices.find()
      res.json({ tests })
    } catch (error) {
      next(error)
    }
  },
  async allMeds (req, res, next) {
    try {
      const meds = await Medicine.find()
      res.json({ meds })
    } catch (error) {
      next(error)
    }
  },
  async medsByCategory (req, res, next) {
    try {
      const category = req.query.category
      const meds = await Medicine.find({ category: category })
      res.json({ meds })
    } catch (error) {
      next(error)
    }
  },
  async getBloodGroups (req, res, next) {
    const { location, bloodGroup } = req.params

    try {
      const banks = await BloodBank.find({
        'bloodGroups.bloodGroupName': bloodGroup,
        location: location
      })

      res.json({ banks })
    } catch (error) {
      console.error(error)
      res.status(500).send('Server Error')
    }
  },
  async getOxygenType (req, res, next) {
    const { location, type } = req.params
    console.log(location, type)
    try {
      const cylinders = await Oxygen.find({
        'types.cylinderType': type,
        location: location
      })

      res.json({ cylinders })
    } catch (error) {
      console.error(error)
      res.status(500).send('Server Error')
    }
  },
  async getAllBanks (req, res, next) {
    try {
      const banks = await BloodBank.find()
      res.json({ banks })
    } catch (error) {
      next(error)
    }
  },
  async getAllCylinders (req, res, next) {
    try {
      const cylinders = await Oxygen.find()
      res.json({ cylinders })
    } catch (error) {
      next(error)
    }
  }
}

export default GetControllers
