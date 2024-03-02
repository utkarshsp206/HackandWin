import { BookedAppointment, Doctor, OnlineConsultation } from '../../models'

const Doctors = {
  async findDocBySpec (req, res, next) {
    const spec = req.body.spec
    try {
      const doctors = await Doctor.find({ specialisation: spec }).select('-__v')
      res.json({ doctors })
    } catch (error) {
      return next(error)
    }
  },

  async findDocByLocation (req, res, next) {
    const location = req.body.location
    try {
      const doctors = await Doctor.find({ location }).select('-__v')
      res.json({ doctors })
    } catch (error) {
      return next(error)
    }
  },

  async searchDoctor (req, res, next) {
    try {
      const { location, specialisation } = req.query

      const query = {}
      if (location) {
        query.location = { $regex: location, $options: 'i' }
      }
      if (specialisation) {
        query.specialisation = { $regex: specialisation, $options: 'i' }
      }

      const doctors = await Doctor.find(query)
      res.json(doctors)
    } catch (err) {
      console.error(err)
      res.status(500).json({ message: 'Server error' })
    }
  },

  async onlineConsultation (req, res, next) {
    const doctor = req.params.doctorId
    const user = req.user._id
    const timeslot = req.params.timeslot
    const date = req.params.date
    try {
      const { pateintName, pateintEmail, pateintNumber, paymentType } = req.body

      const consult = new OnlineConsultation({
        user,
        doctor,
        timeslot,
        paymentType,
        pateintName,
        pateintEmail,
        pateintNumber, 
        date
      })

      await consult.save()

      res.json({ message: 'Online Consultation Booked', consult })
    } catch (error) {}
  },
  async bookAppointment (req, res, next) {
    const doctor = req.params.doctorId
    const user = req.user._id
    const timeslot = req.params.timeslot
    const date = req.params.date

    const { pateintName, pateintEmail, pateintNumber, paymentType } = req.body

    try {
      const appointment = new BookedAppointment({
        user,
        doctor,
        timeslot,
        paymentType,
        pateintName,
        pateintEmail,
        date,
        pateintNumber
      })

      await appointment.save()

      res.json({ message: 'Appointment Booked', appointment })
    } catch (error) {
      console.log(error)
    }
  }
}

export default Doctors
