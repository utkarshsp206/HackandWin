import React from 'react'

const UserLabs = ({ data }) => {
  let newdData = []
  newdData = data


  if (!data || data.length === 0) {
    return <h6 className='nodata'>No data to show for Lab Tests</h6>;
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
                  {d.testType && (
                    <>
                      {' '}
                      <p style={{ fontWeight: '600', color: 'Green' }}>
                        {d.testType.category}
                      </p>
                      <p style={{ fontWeight: '600', width: '60%' }}>
                        <span> {d.testType.testName}</span> -{' '}
                        {d.testType.testDesc}{' '}
                      </p>
                      <p style={{ fontWeight: '600', width: '60%' }}>
                        <span>Preparations</span> {d.testType.preparation}
                      </p>
                    </>
                  )}
                </div>
                <div className='right'>
                  <p>
                    Booked for: <span>{d.date}</span>{' '}
                  </p>
                  {d.testType && (
                    <p>
                      Cost Rs <span> {d.testType.cost}</span>
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

export default UserLabs
