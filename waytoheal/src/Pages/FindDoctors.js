import React, { useState } from 'react'
import Booking from '../Popups/Booking'
import axios from '../axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { MutatingDots } from 'react-loader-spinner'

const FindDoctors = () => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const [location, setLocation] = useState('Kharar')
  const [specialisation, setSpeciality] = useState('Sexologist')
  const [doctors, setDoctors] = useState([])
  const [bokID, setBookId] = useState('none')
  const [booktype, setBookType] = useState('none')
  const [loading, setLoading] = useState(false)

  const hanlechance = () => {
    navigate('/doctors')
  }

  const togglePopup = (id, type) => {
    setIsOpen(!isOpen)
    setBookId(id)
    setBookType(type)
    console.log(id)
  }

  const handleSubmit = async e => {
    e.preventDefault()

    if (location.length < 1 || specialisation.length < 1) {
      return toast.error('Select all fields')
    }
    try {
      setLoading(true)

      const res = await axios.get('/doctors', {
        params: { location, specialisation }
      })
      setDoctors(res.data)

      toast.success(`${res.data.length} Doctors Found`)
      setLoading(false)
    } catch (err) {
      console.error(err)
      return null
    }
  }

  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <div className='doc-home'>
      {loading && (
        <>
          <div className='loader'>
            <div className='pop-overlay'></div>
            <MutatingDots
              height='100'
              width='100'
              color='#18206F'
              secondaryColor='#FBCBDC'
              radius='12.5'
              ariaLabel='mutating-dots-loading'
              wrapperStyle={{}}
              wrapperClass='mutating-dots-loading'
              visible={true}
            />
          </div>
        </>
      )}
      <div className='searchbar'>
        <div className='left'>
          <div className='title'>Your home for health</div>
          <form onSubmit={handleSubmit}>
            <select
              name='location'
              value={location}
              onChange={e => setLocation(e.target.value)}
            >
              <option value='Kharar'>Kharar</option>
              <option value='Mohali'>Mohali</option>
              <option value='Chandigarh'>Chandigarh</option>
            </select>
            <select
              name='speciality'
              value={specialisation}
              onChange={e => setSpeciality(e.target.value)}
            >
              <option value='Pediatrician'>Pediatrician</option>
              <option value='Dermatologist'>Dermatologist</option>
              <option value='Sexologist'>Sexologist</option>
            </select>
            <button className='doc-sub' type='submit'>
              Search
            </button>
          </form>
          <div className='title'>
            Safety of your data is our <br />
            <span>Top Priority</span>
          </div>
        </div>
        <div className='right'>
          <img src={'/doctors/drs1.png'} alt='' />
        </div>
      </div>

      <div className='doc-res'>
        <div className='res-inside'>
          {doctors.length > 0 ? (
            <div className='title'>
              {doctors.length} {specialisation} available in {location} <br />
              <span>
                <i class='fa-solid fa-circle-check'></i>&nbsp;Book appointments
                with minimum wait-time & verified doctor details{' '}
              </span>
            </div>
          ) : (
            <div className='none'>Search Your Doctors Above</div>
          )}

          <div className='results'>
            {doctors.length > 0 ? (
              doctors.map(d => {
                let x = randomNumber(1,8);
                console.log(x);
                return (
                  <>
                    <div className='res-cards'>
                      <div className='left'>
                        <div className='img'>
                          <img src={`/doctors/DR${x}.png`} alt='' />
                        </div>
                        <div className='desc'>
                          <div className='name'>{d.name}</div>
                          <div className='role'>{d.specialisation}</div>
                          <div className='exp'>{25} Years of Experience</div>
                          <div className='location'>
                            {d.location} <i class='fa-solid fa-circle'></i>{' '}
                            {d.address}
                          </div>
                          <div className='fees'>
                            <span>{d.clinicfees} </span>
                            Consultation fee at clinic
                          </div>
                        </div>
                      </div>

                      <div className='right'>
                        <div className='stories'>
                          <i class='fa-solid fa-thumbs-up'></i>&nbsp;{58}{' '}
                          Patient Stories
                        </div>
                        <div className='avail'>Available Today</div>
                        <div className='booking'>
                          <button
                            onClick={() =>
                              togglePopup(d._id, 'onlineconsultation')
                            }
                          >
                            Online Consultation
                          </button>
                          <button
                            onClick={() => togglePopup(d._id, 'Appointment')}
                          >
                            Book Free Clinic Visit
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                )
              })
            ) : (
              <>
                <div className='none'></div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className='doc-bottom'>
        <div className='docbottom-inside'>
          <div className='top'>
            <hr />
            Safety of your data
            <hr />
          </div>
          <div className='middle'>
            <div className='safety'>
              <div className='img'>
                <img src='/doctors/safety (1).png' alt='' />
              </div>
              <div className='text'>256-bit encyption</div>
            </div>
            <div className='safety'>
              <div className='img'>
                <img src='/doctors/safety (2).png' alt='' />
              </div>
              <div className='text'>ISO 27001 Certified</div>
            </div>
            <div className='safety'>
              <div className='img'>
                <img src='/doctors/safety (3).png' alt='' />
              </div>
              <div className='text'>HIPAA data centers</div>
            </div>
            <div className='safety'>
              <div className='img'>
                <img src='/doctors/safety (4).png' alt='' />
              </div>
              <div className='text'>DSCI Member</div>
            </div>
          </div>

          <div className='down'>
            <div className='banner'>
              <div className='left'>
                <p>
                  Instant appointment with doctors <br />
                  <span>Guaranteed</span> .
                </p>
                <p>10,000 Verified Doctors</p>
                <p>1M+ Patients recommendation</p>
                <button onClick={hanlechance}>Find me the right doctor</button>
              </div>
              <div className='right'>
                <img src='/doctors/drs2.png' alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className='pop-overlay'>
          <div className='popup'>
            <Booking bookType={booktype} bookID={bokID} />
            <button className='cls-btn' onClick={togglePopup}>
              <i class='fa-solid fa-xmark'></i>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default FindDoctors
