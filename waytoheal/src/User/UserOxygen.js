import React from 'react'

const UserOxygen = ({ data }) => {
  let newdData = []
  newdData = data
  if (!data || data.length === 0) {
    return <h6 className='nodata'>No data to show for Oxygens</h6>
  }
  return (
    <div className='user'>
      {newdData &&
        newdData.map(d => {
          return (
            <div className='details-card'>
              <div className='left'>
                <p>Booked At: {d.createdAt.slice(0, 10)}</p>
                {d.center && (
                  <>
                    {' '}
                    <p style={{ fontWeight: 800 }}>{d.center.name}</p>
                    <p>
                      <span>Oxygen Type: {d.type}</span>
                    </p>
                    <p>
                      {d.center.location} * {d.center.address}{' '}
                    </p>
                  </>
                )}
              </div>
              <div className='right'>
                <p style={{ width: '100%' }}>
                  Expected Delivery: <span>{d.date}</span> at{' '}
                  <span> {d.timeslot}</span>
                </p>
                {d.center && (
                  <p>
                    Cost:
                    <span>{d.center.types[0].cylinderCost}</span>
                  </p>
                )}
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default UserOxygen
