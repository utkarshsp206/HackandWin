import React, { useState } from 'react'
import axios from '../axios'
import toast from 'react-hot-toast'

const Services = ({ id, services, type }) => {
  const [selectedTime, setSelectedTime] = useState('')
  const [selectedDate, setSelectedDate] = useState('')

  console.log('id',id, 'services',services,  'type', type);

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
  const [enteredNumber, setEnteredNumber] = useState('')

  const handleNumberChange = event => {
    setEnteredNumber(event.target.value)
  }

  const handleSubmit = async e => {
    e.preventDefault();
    if (type === 'bed') {
      try {
        console.log(type);
        console.log(token)
        const response = await axios.post(
          `/book/bed/${id}/${enteredNumber}/${selectedTime}/${selectedDate}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        )
        console.log(response.data)
        toast.success('Booked Bed')
      } catch (error) {
        toast.error('Could Not Book')
        console.error(error)
      }
    }
    else{

    }
  }

  return (

   
    <div className='time-selector-container'>
      <label htmlFor='date-input'>Select a date:</label>
      <input type='date' id='date-inputs' onChange={handleDateChange} />

      <br />
      <label htmlFor='time-select'>Select a time:</label>
      <select id='time-select' value={selectedTime} onChange={handleTimeChange}>
        <option value=''>--Please choose a time--</option>
        {timeOptions.map(time => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>
      <br />
      <label htmlFor='number-input'>Enter a number:</label>
      <input type='number' id='number-input' onChange={handleNumberChange} />

      <br />
      <p>Selected date: {selectedDate}</p>
      <p>Selected time: {selectedTime}</p>
      <p>Entered number: {enteredNumber}</p>
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Services
