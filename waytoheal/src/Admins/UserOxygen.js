import React from 'react'
import axios from '../axios'
import toast from 'react-hot-toast'
const UserOxygen = ({ data }) => {
  const handleDelete = async id => {
    try {
      const response = await axios.delete(`/deleteOxygen/${id}`)
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
                        <p  className='name'>
                          Email: <span>{d.user.email}</span>
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
                    <span>{d.center.types[0].cylinderCost}</span><br />
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
        })}
    </div>
  )
}

export default UserOxygen
