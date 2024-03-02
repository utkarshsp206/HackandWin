import express from 'express'
import {
  Authentication,
  Doctors,
  Bookings,
  GetControllers,
  UserPanel,
  AdminController
} from '../controllers'
import auth from '../middleware/auth'
import admin from '../middleware/admin'

const router = express.Router()

router.post('/login', Authentication.login)
router.post('/register', Authentication.register)
router.get('/validateUser', auth, Authentication.validateUser)

//LabTest
router.get('/getlabtests', GetControllers.getAllTest)

// MEdicines
router.get('/getmedicines', GetControllers.allMeds)
router.get('/getmedicines/category', GetControllers.medsByCategory)

// BloodBanks
router.get('/bloodbank', GetControllers.getAllBanks)
router.get('/bloodbank/:location/:bloodGroup', GetControllers.getBloodGroups)
router.get('/oxygen', GetControllers.getAllCylinders)
router.get('/oxygen/:location/:type', GetControllers.getOxygenType)

// Hospitals

router.get('/hospitals', GetControllers.getHospitalsFiltered)

// Doctors
router.get('/doctors/specs', Doctors.findDocBySpec)
router.get('/doctors/location', Doctors.findDocByLocation)
router.get('/doctors', Doctors.searchDoctor)
router.post(
  '/book/consultation/:doctorId/:timeslot/:date',
  auth,
  Doctors.onlineConsultation
)
router.post(
  '/book/appointment/:doctorId/:timeslot/:date',
  auth,
  Doctors.bookAppointment
)

// Bookings
router.post('/book/labtest/:testID/:timeslot/:date', auth, Bookings.bookTest)
router.post(
  '/book/oxygen/:centerID/:type/:timeslot/:date',
  auth,
  Bookings.bookOxygen
)
router.post(
  '/book/medicine/:medicineID/:timeslot/:date',
  auth,
  Bookings.bookMedicine
)
router.post(
  '/book/boodBank/:bankID/:bloodGroup/:timeslot/:date',
  auth,
  Bookings.bookBloodBank
)
router.post(
  '/book/bed/:hospitalID/:beds/:timeslot/:date',
  auth,
  Bookings.bookBed
)
router.post(
  '/call/:timeslot/:date',
  
  Bookings.callReq
)

// User Panel
router.get('/getUserMeds', auth, UserPanel.getMedsByUser)
router.get('/getUserLabTests', auth, UserPanel.getLabTestByUser)
router.get('/getUserOxygen', auth, UserPanel.getOxygenByUser)
router.get('/getUserBlood', auth, UserPanel.getBloodByUser)
router.get('/getUserApointments', auth, UserPanel.getAppointmentByUser)
router.get('/getUserConsultation', auth, UserPanel.getConsultationByUser)
router.get('/getUserBeds', auth, UserPanel.getBedsByUser)
router.get('/allUserDetails', auth, UserPanel.getall)

// ADMIN PANEL

router.delete('/deleteLabTes/:id', AdminController.deleteLabTest)
router.delete('/deleteAppointment/:id', AdminController.deleteAppointments)
router.delete('/deleteOnlineConsult/:id', AdminController.deleteOnCon)
router.delete('/deleteOxygen/:id', AdminController.deleteOxygen)
router.delete('/deleteblood/:id', AdminController.deleteBlood)
router.delete('/deletebed/:id', AdminController.deleteBed)
router.delete('/deleteMeds/:id', AdminController.deleteMeds)
router.delete('/deletecalls/:id', AdminController.deleteMeds)

router.get('/allDataAdmin', AdminController.getAll)

export default router
