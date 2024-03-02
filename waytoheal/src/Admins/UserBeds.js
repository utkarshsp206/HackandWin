import React, { useEffect, useState } from 'react'
import { BallTriangle } from 'react-loader-spinner'
import axios from '../axios'
import toast from 'react-hot-toast'
const UserBeds = ({ data }) => {
  const handleDelete = async id => {
    try {
      const response = await axios.delete(`/deletebed/${id}`)
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
    return <h6 className='nodata'>No data to show for Beds</h6>
  }

  return (
    <div className='user'>
      {newdData &&
        newdData.map(d => {
          return (
            <div className='details-card'>
              <div className='left'>
                <p>Booked At: {d.createdAt.slice(0, 10)}</p>
                {!d.hospital && (
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
                {d.hospital && (
                  <>
                    {' '}
                    <p style={{ fontWeight: '600' }}>{d.hospital.name}</p>
                    <p>
                      {d.hospital.location} * {d.hospital.address}{' '}
                    </p>
                  </>
                )}
                {d.user && (
                  <>
                    <p style={{ textTransform: 'capitalize' }} className='name'>
                      Name: <span>{d.user.name}</span>{' '}
                    </p>
                    <p className='name'>
                      Mobile: <span>{d.user.mobile}</span>
                    </p>
                    <p className='name'>
                      Email: <span>{d.user.email}</span>
                    </p>
                  </>
                )}
              </div>
              <div className='right'>
                <p>
                  Booked for: <span>{d.date}</span>
                </p>
                <p>
                  Number of Beds Booked: <span>{d.numberOfBeds}</span>
                  <br />
                  <button
                    onClick={() => handleDelete(d._id)}
                    className='completed'
                  >
                    Completed
                  </button>
                </p>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default UserBeds
