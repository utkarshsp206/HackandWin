import React, { useEffect, useState } from 'react'
import { BallTriangle } from 'react-loader-spinner'

const UserConsult = ({ data }) => {
  const [newdData, setData] = useState([])
  useEffect(() => {
    setData(data)
    console.log(typeof(data));
  }, [newdData])

  if (!data || data.length === 0) {
    return <h6 className='nodata'>No data to show for Online Consultation</h6>;
  }

  return (
    <div className='user'>

      
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
                        <span> {d.doctor.clinicName}</span> {d.doctor.location},{' '}
                        {d.doctor.address}
                      </p>
                      <p style={{ fontWeight: '600', width: '60%' }}>
                        <span>Patient Stories</span> {d.doctor.stories.length}
                      </p>
                    </>
                  )}
                  
                </div>
                <div className='right'>
                  <p>
                    Conference on <span>{d.date}</span> at{' '}
                    <span>{d.timeslot}</span>
                  </p>
                  <p>
                    <a
                      target='_blank'
                      href='https://meet.google.com/kae-xqdj-ydy'
                      style={{ all: 'unset' }}
                    >
                      {' '}
                      <span>Link to Conference</span>{' '}
                    </a>
                  </p>
                  {d.doctor && (
                    <p>
                      Cost{' '}
                      <span style={{ textTransform: 'capitalize' }}>
                        {d.paymentType}
                      </span>{' '}
                      Rs <span> {d.doctor.clinicfees}</span>
                    </p>
                  )}
                </div>
              </div>
            )
          })
          .reverse()}

      
      

      
      
    </div>
  )
}

export default UserConsult
