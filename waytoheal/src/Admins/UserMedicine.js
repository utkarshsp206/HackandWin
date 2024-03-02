import React from 'react'
import axios from '../axios'
import toast from 'react-hot-toast'
const UserMedicine = ({ data }) => {
  const handleDelete = async id => {
    try {
      const response = await axios.delete(`/deleteMeds/${id}`)
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
                  <p>Booked At: {d.createdAt.slice(0, 10)}</p>
                  {d.medicine && (
                    <>
                    
                      <p style={{ fontWeight: 800 }}>{d.medicine.name}</p>
                      <p>
                        {d.medicine.category} <br />
                        <br />
                        {d.medicine.desc}{' '}
                      </p>
                    </>
                  )}{d.user && (
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
                  <p style={{ width: '100%' }}>
                    Expected Delivery: <span>{d.date}</span> at{' '}
                    <span> {d.timeslot}</span>
                  </p>
                  {d.medicine && (
                    <p>
                      Cost: <span> {d.medicine.cost}</span>
                    </p>
                  )}
                  <button
                    onClick={() => handleDelete(d._id)}
                    className='completed'
                  >
                    Completed
                  </button>
                </div>
              </div>
            )
          })
          .reverse()}
    </div>
  )
}

export default UserMedicine
