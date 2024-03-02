import React from 'react'

const UserCalls = ({ data }) => {
  let newdData = []
  newdData = data
  if (!data || data.length === 0) {
    return <h6 className='nodata'>No data to show for Medicines</h6>
  }
  return (
    <div className='user'>
      {newdData &&
        newdData
          .map(d => {
            return (
              <div className='details-card'>
                <div className='left'>
                  <p>Requested At: {d.createdAt.slice(0, 10)}</p>
                  {
                    <>
                      {' '}
                      <p style={{ fontWeight: 800 }}>Name: {d.name}</p>
                      <p style={{ fontWeight: 800 }}>Mobile: {d.number}</p>
                      <p>
                        {d.query} <br />
                      </p>
                    </>
                  }
                </div>
                <div className='right'>
                  <p style={{ width: '100%' }}>
                    Expected Date: <span>{d.date}</span>
                  </p>
                  <p style={{ width: '100%' }}>
                    Expected TIme: <span>{d.timeslot}</span>
                  </p>
                </div>
              </div>
            )
          })
          .reverse()}
    </div>
  )
}

export default UserCalls
