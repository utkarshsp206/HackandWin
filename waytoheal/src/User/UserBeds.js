import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { BallTriangle } from 'react-loader-spinner'

const UserBeds = ({ data }) => {
  let newdData = []
  newdData = data
  if (!data || data.length === 0) {
    return <h6 className='nodata'>No data to show for Beds</h6>;
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
              </div>
              <div className='right'>
                <p>
                  Booked for: <span>{d.date}</span>
                </p>
                <p>
                  Numberof Beds Booked: <span>{d.numberOfBeds}</span>
                </p>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default UserBeds
