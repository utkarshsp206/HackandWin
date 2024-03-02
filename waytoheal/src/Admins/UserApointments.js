import React from 'react'
import { BallTriangle } from 'react-loader-spinner'
import axios from '../axios'
import toast from 'react-hot-toast'
const UserApointments = ({ data }) => {
  const handleDelete = async id => {
    try {
      const response = await axios.delete(`/deleteAppointment/${id}`)
      toast.success('Deleted')
      return response.data
    } catch (error) {
      toast.error('Could Not delete')
      console.error(error)
    }
  }

  let newdData = []
  newdData = data
  if (!data || data.length === 0) {
    return <h6 className='nodata'>No data to show for USer Appointments</h6>
  }
  return (
    <div className='user'>
      <>
        {newdData &&
          newdData
            .map(d => {
              let str
              return (
                <div style={{ marginBottom: '5%' }} className='details-card'>
                  <div className='left'>
                    <p>Booked At: {d.createdAt.slice(0, 10)}</p>
                    {!d.doctor && (
                      <>
                        <h1>
                          <BallTriangle
                            height={50}
                            width={50}
                            radius={5}
                            color='#18206F'
                            ariaLabel='ball-triangle-loading'
                            wrapperClass={{}}
                            wrapperStyle=''
                            visible={true}
                          />
                        </h1>
                      </>
                    )}
                    {d.doctor && (
                      <>
                        {' '}
                        <p style={{ fontWeight: '600', color: 'Green' }}>
                          {d.doctor.name} <br />
                          <span style={{ fontSize: '.9em', color: 'gray' }}>
                            {d.doctor.specialisation}
                          </span>
                        </p>
                        <p style={{ fontWeight: '600', width: '100%' }}>
                          <span> {d.doctor.clinicName}</span>{' '}
                          {d.doctor.location}, {d.doctor.address}
                        </p>
                        <p style={{ fontWeight: '600', width: '60%' }}>
                          <span>Patient Stories</span> {d.doctor.stories.length}
                        </p>
                      </>
                    )}
                    {d.user && (
                      <>
                        <p
                          style={{ textTransform: 'capitalize' }}
                          className='name'
                        >
                          Name: <span>{d.user.name}</span>{' '}
                        </p>
                        <p className='name'>
                          Mobile: <span>{d.user.mobile}</span>
                        </p>
                        <p style={{borderBottom:'1px solid ', paddingBottom:'.6em'}} className='name'>
                          Email: <span>{d.user.email}</span>
                        </p>
                      </>
                    )}
                    {
                      <>
                       <p
                          style={{ textTransform: 'capitalize' }}
                          className='name'
                        >
                          Pateint Name: <span>{d.pateintName}</span>{' '}
                        </p>
                        <p className='name'>
                        Pateint Mobile: <span>{d.pateintNumber}</span>
                        </p>
                        <p className='name'>
                        PateintEmail: <span>{d.pateintEmail}</span>
                        </p>
                      
                      </>
                    }
                  </div>
                  <div className='right'>
                    <p>
                      Appointment on <span>{d.date}</span> at{' '}
                      <span>{d.timeslot}</span>
                    </p>
                    {d.doctor && (
                      <p>
                        Cost{' '}
                        <span style={{ textTransform: 'capitalize' }}>
                          {d.paymentType}
                        </span>{' '}
                        Rs <span> {d.doctor.clinicfees}</span> <br /> <br />
                        <button
                          onClick={() => handleDelete(d._id)}
                          className='completed'
                        >
                          Completed
                        </button>
                      </p>
                    )}
                  </div>
                </div>
              )
            })
            .reverse()}
      </>
    </div>
  )
}

export default UserApointments
