import React from 'react'
import axios from '../axios'
import toast from 'react-hot-toast'
const UserLabs = ({ data }) => {
  let newdData = []
  newdData = data

  const handleDelete = async id => {
    try {
      const response = await axios.delete(`/deleteLabTes/${id}`)
      toast.success('Deleted')
      return response.data
    } catch (error) {
      toast.error('Could Not delete')
      console.error(error)
    }
  }

  if (!data || data.length === 0) {
    return <h6 className='nodata'>No data to show for Lab Tests</h6>
  }
  return (
    <div className='user'>
      {newdData &&
        newdData
          .map(d => {
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
                    </>
                  )}
                  {d.user && (
                    <>
                      <p className='name'>
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
                    Booked for: <span>{d.date}</span>{' '}
                  </p>
                  {d.testType && (
                    <p>
                      Cost Rs <span> {d.testType.cost}</span> <br />
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
    </div>
  )
}

export default UserLabs
