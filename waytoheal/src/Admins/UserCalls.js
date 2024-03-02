import React from 'react'
import axios from '../axios'
import toast from 'react-hot-toast'

const UserCalls = ({ data }) => {
  const handleDelete = async id => {
    try {
      const response = await axios.delete(`/deletecalls/${id}`)
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
                  <p>Requested At: {d.createdAt.slice(0, 10)}</p>
                  {!d.user && (
                    <>
                      {' '}
                      <p style={{ fontWeight: 800 }}>Name: {d.name}</p>
                      <p style={{ fontWeight: 800 }}>Mobile: {d.number}</p>
                      <p>
                        {d.query} <br />
                      </p>
                    </>
                  )}
                </div>
                <div className='right'>
                  <p style={{ width: '100%' }}>
                    Expected Date: <span>{d.date}</span>
                  </p>
                  <p style={{ width: '100%' }}>
                    Expected TIme: <span>{d.timeslot}</span>
                  </p>
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

export default UserCalls
