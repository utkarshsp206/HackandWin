import React from 'react'

const UserMedicine = ({ data }) => {
  let newdData = []
  newdData = data
  if (!data || data.length === 0) {
    return <h6 className='nodata'>No data to show for Medicines</h6>;
  }
  console.log('new', newdData);
  return (
    <div className='user'>
      {newdData &&
        newdData.map(d => {
          return (
            <div className='details-card'>
              <div className='left'>
                <p>Booked At: {d.createdAt.slice(0, 10)}</p>
                {d.medicine && (
                  <>
                    {' '}
                    <p style={{ fontWeight: 800 }}>{d.medicine.name}</p>
                    <p>
                      {d.medicine.category} <br />
                      <br />
                      {d.medicine.desc}{' '}
                    </p>
                  </>
                )}
              </div>
              <div className='right'>
                <p style={{ width: '100%'}}>
                  Expected Delivery: <span>{d.date}</span> at{' '}
                  <span> {d.timeslot}</span>
                </p>
                {
                  d.medicine && <p>Cost: <span> {d.medicine.cost}</span></p>
                }
               
              </div>
            </div>
          )
        }).reverse()}
    </div>
  )
}

export default UserMedicine
