import React, { useState } from 'react'
import axios from '../axios'
import toast from 'react-hot-toast'
const LabTestBooking = ({ id, type, what }) => {
  const [selectedTime, setSelectedTime] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [loading, setLoading] = useState(false)

  const token = localStorage.getItem('access_token')

  const timeOptions = []
  for (let i = 10; i <= 18; i++) {
    timeOptions.push(`${i}:00 - ${i + 1}:00`)
  }

  const handleTimeChange = event => {
    setSelectedTime(event.target.value)
  }

  const handleDateChange = event => {
    setSelectedDate(event.target.value)
  }


  const handleSubmit = async e => {
    e.preventDefault()
    if (what === 'labtest') {
      setLoading(true)

      try {
        console.log(token)
        const response = await axios.post(
          `/book/labtest/${id}/${selectedTime}/${selectedDate}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        )
        setLoading(false)

        toast.success('Booked Lab Tests')
      } catch (error) {
        setLoading(false)

        toast.error('Please, Login to Book')
        console.error(error)
      }
    } else if (what === 'oxygen') {
      try {
        setLoading(true)

        const response = await axios.post(
          `/book/oxygen/${id}/${type}/${selectedTime}/${selectedDate}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        )
        setLoading(false)

        toast.success('Oxygen Booked')
      } catch (error) {
        setLoading(false)

        toast.error('Please, Login to Book')
        console.error(error)
      }
    } else if (what === 'blood') {
      try {
        setLoading(true)

        console.log('hii in blod')
        const response = await axios.post(
          `/book/boodBank/${id}/${type}/${selectedTime}/${selectedDate}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        )
        setLoading(false)

        toast.success('Blood Booked')
      } catch (error) {
        setLoading(false)

        toast.error('Please, Login to Book')
        console.error(error)
      }
    } else {
      try {
        setLoading(true)

        console.log(token)
        const response = await axios.post(
          `/book/medicine/${id}/${selectedTime}/${selectedDate}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        )

        setLoading(false)

        toast.success('Booked Medicine')
      } catch (error) {
        setLoading(false)

        toast.error('Please, Login to Book')
        console.error(error)
      }
    }
  }
  return (
    <>
      {loading &&
        toast('Booking...', {
          icon: '🔃'
        })}
      <div className='time-selector-container '>
        <label htmlFor='date-input'>Select a date:</label>
        <input type='date' id='date-inputs' onChange={handleDateChange} />

        <br />
        <label htmlFor='time-select'>Select a time:</label>
        <select
          id='time-select'
          value={selectedTime}
          onChange={handleTimeChange}
        >
          <option value=''>--Please choose a time--</option>
          {timeOptions.map(time => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
        <br />
        <p>Selected date: {selectedDate}</p>
        <p>Selected time: {selectedTime}</p>
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  )
}

export default LabTestBooking
