import React, { useEffect, useState } from 'react'
import {
  UserApointments,
  UserMedicine,
  UserBlood,
  UserBeds,
  UserConsult,
  UserLabs,
  UserOxygen,
  UserCalls
} from '../Admins'
import axios from '../axios'
import { MutatingDots } from 'react-loader-spinner'

const AdminPanel = () => {
  const [active, setActive] = useState('all')
  const [loading, setLoading] = useState(false)
  const [view, setView] = useState('')
  const [data, setData] = useState([])

  const token = localStorage.getItem('admin')

  const handleComponent = async comp => {
    setView(comp)
    setActive(comp)
  }

  useEffect(() => {
    console.log(token)
    fetchData()
  }, [view])

  const fetchData = async () => {
    console.log('token', token)
    try {
      setLoading(true)
      const res = await axios.get('/allDataAdmin', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

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
      console.error(err)
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
          <img src='' alt='' />
          <p>Name</p>
        </div>
        <div className='down'>
          <div className='lefts'>
            <button
              className={`${
                active === 'Offline Appointments' ? 'active' : 'deactive'
              }`}
              onClick={() => handleComponent('Offline Appointments')}
            >
              Offline Appointments Requests
            </button>
            <button
              className={`${
                active === 'Online Consultation' ? 'active' : 'deactive'
              }`}
              onClick={() => handleComponent('Online Consultation')}
            >
              Online Consultation Requests
            </button>
            <button
              className={`${active === 'Beds' ? 'active' : 'deactive'}`}
              onClick={() => handleComponent('Beds')}
            >
              Beds Requests
            </button>
            <button
              className={`${active === 'Medicines' ? 'active' : 'deactive'}`}
              onClick={() => handleComponent('Medicines')}
            >
              Medicines Requests
            </button>
            <button
              className={`${
                active === 'Oxygen Bookings' ? 'active' : 'deactive'
              }`}
              onClick={() => handleComponent('Oxygen Bookings')}
            >
              Oxygen Bookings Requests
            </button>
            <button
              className={`${
                active === ' Blood Bank Orders' ? 'active' : 'deactive'
              }`}
              onClick={() => handleComponent('Blood Bank Orders')}
            >
              Blood Bank Orders Requests
            </button>
            <button
              className={`${active === 'Lab Tests' ? 'active' : 'deactive'}`}
              onClick={() => handleComponent('Lab Tests')}
            >
              Lab Tests Requests
            </button>
            <button
              className={`${active === 'Call Request' ? 'active' : 'deactive'}`}
              onClick={() => handleComponent('Call Request')}
            >
              Call Requests
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

export default AdminPanel
