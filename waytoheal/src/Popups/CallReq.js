import React, { useState } from 'react'
import axios from '../axios'
import toast from 'react-hot-toast'
const CallReq = ({ id, type, what }) => {
  const [selectedTime, setSelectedTime] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)
  const [name, SetName] = useState('')
  const [number, setNumber] = useState('')

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

  console.log('labtest', id)

  const handleSubmit = async e => {
    e.preventDefault()

    setLoading(true)

    try {
      console.log(token)
      const response = await axios.post(
        `/call/${selectedTime}/${selectedDate}`,
        { query, name, number },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      setLoading(false)
      toast.success('Call Request sent')
    } catch (error) {
      setLoading(false)

      console.error(error)
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
        <label for='username'>Name</label>
        <input
          type='text'
          value={name}
          name='username'
          id='username'
          onChange={e => SetName(e.target.value)}
        />
        <br />
        <label for='username'>Number</label>
        <input
          type='number'
          value={number}
          name='username'
          id='username'
          onChange={e => setNumber(e.target.value)}
        />
        <br />
        <label
          htmlFor='
        '
        >
          Enter Query:
        </label>
        <textarea
          type='text'
          value={query}
          onChange={e => setQuery(e.target.value)}
        />{' '}
        <br />
        <p>Selected date: {selectedDate}</p>
        <p>Selected time: {selectedTime}</p>
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  )
}

export default CallReq
