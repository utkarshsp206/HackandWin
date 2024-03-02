import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BallTriangle } from 'react-loader-spinner'

import axios from '../axios'
import toast from 'react-hot-toast'
const Booking = ({ bookType, bookID }) => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const token = localStorage.getItem('access_token')
  useEffect(() => {
    if (!token) {
      toast.error('Please Login to Book')
      navigate('/')
    }
  }, [])

  const [selectedTime, setSelectedTime] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [pateintName, setname] = useState('')
  const [pateintEmail, setemail] = useState('')
  const [pateintNumber, setmobile] = useState('')

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

  const [paymentType, setPaymentType] = useState('cash')
  const [showPaymentOptions, setShowPaymentOptions] = useState(false)

  const handlePaymentTypeChange = event => {
    setPaymentType(event.target.value)

    if (event.target.value === 'online') {
      setShowPaymentOptions(true)
    } else {
      setShowPaymentOptions(false)
    }
  }

  const handlePaymentOptionChange = event => {
    console.log('Selected Payment Option:', event.target.value)
  }

  const handleSubmit = async e => {
    e.preventDefault()

    if (bookType === 'Appointment') {
      setLoading(true)

      try {
        const response = await axios.post(
          `/book/appointment/${bookID}/${selectedTime}/${selectedDate}`,
          { pateintName, pateintEmail, pateintNumber, paymentType },
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        )
        setLoading(false)
        toast.success('AppointMent Booked')
      } catch (error) {
        setLoading(false)

        toast.error('Could Not Book')
        console.error(error)
      }
    } else {
      setLoading(true)

      try {
        const response = await axios.post(
          `/book/consultation/${bookID}/${selectedTime}/${selectedDate}`,
          { pateintName, pateintEmail, pateintNumber, paymentType },
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        )
        setLoading(false)

        toast.success('Online Consultation Booked')
      } catch (error) {
        setLoading(false)

        toast.error('Could Not Book')
        console.error(error)
      }
    }
  }

  return (
    <div className='time-selector-container a-s'>
      <div className='bookings'>
        <div className='right'>
          <form
            action='
          '
          >
            <h6>
              <h6>Pateint Details</h6>{' '}
              {loading &&
               toast('Booking...', {
                icon: '🔃',
              })}
            </h6>

            <input
              type='text'
              placeholder='Full Name'
              value={pateintName}
              onChange={e => setname(e.target.value)}
            />
            <input
              type='text'
              placeholder='E-mail'
              value={pateintEmail}
              onChange={e => setemail(e.target.value)}
            />
            <input
              type='number'
              placeholder='Mobile'
              value={pateintNumber}
              onChange={e => setmobile(e.target.value)}
            />
            <br />
            <br />
            <h6>Payment Details</h6>

            {bookType === 'onlineconsultation' ? (
              <>
                <label
                  htmlFor='
            '
                >
                  <input
                    type='radio'
                    value='online'
                    checked={paymentType === 'online'}
                    onChange={handlePaymentTypeChange}
                  />
                  Online
                </label>
              </>
            ) : (
              <>
                <label htmlFor=''>
                  <input
                    type='radio'
                    value='cash'
                    checked={paymentType === 'cash'}
                    onChange={handlePaymentTypeChange}
                  />
                  Cash
                </label>
                <label
                  htmlFor='
            '
                >
                  <input
                    type='radio'
                    value='online'
                    checked={paymentType === 'online'}
                    onChange={handlePaymentTypeChange}
                  />
                  Online
                </label>
              </>
            )}

            {showPaymentOptions && (
              <div>
                <h6>Select Payment Option:</h6>
                <select onChange={handlePaymentOptionChange}>
                  <option value='gpay'>GPAY</option>
                  <option value='paytm'>Paytm</option>
                  <option value='visa'>Visa</option>
                </select>
              </div>
            )}
          </form>
        </div>
      </div>

      <div style={{ marginTop: '9%' }} className='s-l'>
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
        <br />
        <br />
        <button style={{ width: '60%' }} onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  )
}

export default Booking
