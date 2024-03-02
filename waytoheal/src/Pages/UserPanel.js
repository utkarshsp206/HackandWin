import React, { useEffect, useState } from 'react'
import {
  UserApointments,
  UserMedicine,
  UserBlood,
  UserBeds,
  UserConsult,
  UserLabs,
  UserOxygen
} from '../User'
import axios from '../axios'
import { MutatingDots } from 'react-loader-spinner'
import UserCalls from '../User/UserCalls'

const UserPanel = ({ user }) => {
  const [active, setActive] = useState('all')
  const [loading, setLoading] = useState(false)

  const [view, setView] = useState('')
  const [data, setData] = useState([])

  const token = localStorage.getItem('access_token')

  const handleComponent = async comp => {
    setView(comp)
    setActive(comp)
  }
  useEffect(() => {
    fetchData()
  }, [view])
  const fetchData = async () => {
    try {
      setLoading(true)

      const res = await axios.get(
        '/allUserDetails',

        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      console.log(res.data)
      const dataMap = {
        'Offline Appointments': res.data.myAppointments,
        'Online Consultation': res.data.myConsultations,
        Beds: res.data.mybeds,
        Medicines: res.data.mymeds,
        'Oxygen Bookings': res.data.myOxygens,
        'Blood Bank Orders': res.data.myBloods,
        'Lab Tests': res.data.mylLabTests,
        'Call Request': res.data.calls
      }
      setData(dataMap[view])
      setLoading(false)
    } catch (err) {
      setLoading(false)

      console.error(err)
      return null
    }
  }

  return (
    <>
      <div className='userpanel'>
        {loading && (
          <>
            <div className='loader'>
              <div className='pop-overlay'></div>
              <MutatingDots
                height='100'
                width='100'
                color='#18206F'
                secondaryColor='#FBCBDC'
                radius='12.5'
                ariaLabel='mutating-dots-loading'
                wrapperStyle={{}}
                wrapperClass='mutating-dots-loading'
                visible={true}
              />
            </div>
          </>
        )}
        <div className='top'>
          <img src='/profile/Group (1).png' alt='' />
          <p>{user}</p>
        </div>
        <div className='down'>
          <div className='lefts'>
            <button
              className={`${
                active === 'Offline Appointments' ? 'active' : 'deactive'
              }`}
              onClick={() => handleComponent('Offline Appointments')}
            >
              Offline Appointments
            </button>
            <button
              className={`${
                active === 'Online Consultation' ? 'active' : 'deactive'
              }`}
              onClick={() => handleComponent('Online Consultation')}
            >
              Online Consultation
            </button>
            <button
              className={`${active === 'Beds' ? 'active' : 'deactive'}`}
              onClick={() => handleComponent('Beds')}
            >
              Beds
            </button>
            <button
              className={`${active === 'Medicines' ? 'active' : 'deactive'}`}
              onClick={() => handleComponent('Medicines')}
            >
              Medicines
            </button>
            <button
              className={`${
                active === 'Oxygen Bookings' ? 'active' : 'deactive'
              }`}
              onClick={() => handleComponent('Oxygen Bookings')}
            >
              Oxygen Bookings
            </button>
            <button
              className={`${
                active === ' Blood Bank Orders' ? 'active' : 'deactive'
              }`}
              onClick={() => handleComponent('Blood Bank Orders')}
            >
              Blood Bank Orders
            </button>
            <button
              className={`${active === 'Lab Tests' ? 'active' : 'deactive'}`}
              onClick={() => handleComponent('Lab Tests')}
            >
              Lab Tests
            </button>
            <button
              className={`${active === 'Call Request' ? 'active' : 'deactive'}`}
              onClick={() => handleComponent('Call Request')}
            >
              Call Request
            </button>
          </div>
          <div className='rights'>
            {view === 'Offline Appointments' && <UserApointments data={data} />}
            {view === 'Online Consultation' && <UserConsult data={data} />}
            {view === 'Beds' && <UserBeds data={data} />}
            {view === 'Medicines' && <UserMedicine data={data} />}
            {view === 'Oxygen Bookings' && <UserOxygen data={data} />}
            {view === 'Blood Bank Orders' && <UserBlood data={data} />}
            {view === 'Lab Tests' && <UserLabs data={data} />}
            {view === 'Call Request' && <UserCalls data={data} />}
          </div>
        </div>
      </div>
    </>
  )
}

export default UserPanel
