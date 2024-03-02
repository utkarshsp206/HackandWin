import React from 'react'
import { BallTriangle } from 'react-loader-spinner'


const UserBlood = ({ data }) => {
  let newdData = []
  newdData = data
  if (!data || data.length === 0) {
    return <h6 className='nodata'>No data to show for Bloods</h6>;
  }
  return (
    <div className='user'>
      {newdData &&
        newdData.map(d => {
          return (
            <div className='details-card'>
              <div className='left'>
                <p>Booked At: {d.createdAt.slice(0, 10)}</p>
                {!d.bloodbank && (
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
                {d.bloodbank && (
                  <>
                    {' '}
                    <p style={{ fontWeight: 800 }}>{d.bloodbank.name}</p>
                    <p>
                      <p>
                        <span>Blood Type: {d.bloodGroup}</span>
                      </p>
                      {d.bloodbank.location} * {d.bloodbank.address}{' '}
                    </p>
                  </>
                )}
              </div>
              <div className='right'>
                <p style={{ width: '100%' }}>
                  Expected Delivery: <span>{d.date}</span> at{' '}
                  <span> {d.timeslot}</span>
                </p>
                {d.bloodbank && (
                  <p>
                    Cost:{' '}
                    <span>{d.bloodbank.bloodGroups[0].bloodGroupCost}</span>{' '}
                  </p>
                )}
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default UserBlood
