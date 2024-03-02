import {
  BookedLabtest,
  BookMedicine,
  BookOxygen,
  BookedBlood,
  BookedBeds,
  CallRequets
} from '../../models'
const LabTest = {
  async bookTest (req, res, next) {
    const user = req.user._id
    const testType = req.params.testID
    const timeslot = req.params.timeslot
    const date = req.params.date

    try {
      if (!user || !testType || !timeslot) {
        return
      }

      const bookedTest = new BookedLabtest({
        user,
        testType,
        timeslot,
        date
      })

      await bookedTest.save()
      res.json({ message: 'Lab Test Booked', bookedTest })
    } catch (error) {
      return next(error)
    }
  },
  async bookOxygen (req, res, next) {
    const user = req.user._id
    const center = req.params.centerID
    const timeslot = req.params.timeslot
    const date = req.params.date
    const type = req.params.type

    try {
      if (!user || !center || !timeslot) {
        return
      }

      const bookedOxy = new BookOxygen({
        user,
        center,
        timeslot,
        date,
        type
      })

      await bookedOxy.save()
      res.json({ message: 'Lab Test Booked', bookedOxy })
    } catch (error) {
      return next(error)
    }
  },
  async bookMedicine (req, res, next) {
    const user = req.user._id
    const medicine = req.params.medicineID
    const timeslot = req.params.timeslot
    const date = req.params.date

    try {
      if (!user || !medicine || !timeslot) {
        return
      }

      const bookedMed = new BookMedicine({
        user,
        medicine,
        timeslot,
        date
      })

      await bookedMed.save()
      res.json({ message: 'Lab Test Booked', bookedMed })
    } catch (error) {
      return next(error)
    }
  },
  async bookBloodBank (req, res, next) {
    const user = req.user._id
    const bloodbank = req.params.bankID
    const timeslot = req.params.timeslot
    const bloodGroup = req.params.bloodGroup
    const date = req.params.date

    try {
      if (!user || !bloodbank || !timeslot) {
        return
      }

      const bookedBlood = new BookedBlood({
        user,
        bloodbank,
        timeslot,
        bloodGroup,
        date
      })

      await bookedBlood.save()
      res.json({ message: 'Blood Booked', bookedBlood })
    } catch (error) {
      return next(error)
    }
  },
  async bookBed (req, res, next) {
    const user = req.user._id
    const hospital = req.params.hospitalID
    const numberOfBeds = req.params.beds
    const timeslot = req.params.timeslot
    const date = req.params.date
    try {
      if (!user || !hospital || !timeslot) {
        return
      }

      const bookedBed = new BookedBeds({
        user,
        hospital,
        timeslot,
        numberOfBeds,
        date
      })

      await bookedBed.save()
      res.json({ message: 'Blood Booked', bookedBed })
    } catch (error) {
      return next(error)
    }
  },
  async callReq (req, res, next) {
    const timeslot = req.params.timeslot
    const date = req.params.date

    const { name, number, query } = req.body
    console.log(name, number, query)

    try {
      if (!query || !timeslot) {
        return
      }

      const callreq = new CallRequets({
        query,
        timeslot,
        date,
        name,
        number
      })

      await callreq.save()
      res.json({ message: 'Blood Booked', callreq })
    } catch (error) {
      return next(error)
    }
  }
}

export default LabTest
