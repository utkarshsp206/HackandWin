import React, { useState } from 'react'
import axios from '../axios'
import toast from 'react-hot-toast'
import Services from '../Popups/Services'
import { MutatingDots } from 'react-loader-spinner'

const FindHospitals = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [location, setLocation] = useState('Kharar')
  const [service, setSpeciality] = useState('Gynecology')
  const [doctors, setDoctors] = useState([])
  const [booktype, setBookType] = useState('')
  const [servicesPass, setServicesPass] = useState([])
  const [id, setId] = useState('')
  const [loading, setLoading] = useState(false)

  const togglePopup = (id, services, type) => {
    setIsOpen(!isOpen)
    setServicesPass(services)
    setId(id)
    setBookType(type)
  }

  const handleSubmit = async e => {
    e.preventDefault()

    if (location.length < 1 || service.length < 1) {
      return toast.error('Select all fields')
    }
    try {
      setLoading(true)
      const res = await axios.get('/hospitals', {
        params: { location, service }
      })
      setDoctors(res.data)

      toast.success(`${res.data.length} Hospitals Found`)
      setLoading(false)
    } catch (err) {
      console.error(err)
      return null
    }
  }

  function randomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
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
              value={service}
              onChange={e => setSpeciality(e.target.value)}
            >
              <option value='Gynecology'>Gynecology</option>
              <option value='Pediatrics'>Pediatrics</option>
              <option value='Dermatology'>Dermatology</option>
              <option value='Urology'>Urology</option>
              <option value='Endocrinology'>Endocrinology</option>
              <option value='Orthopedics'>Orthopedics</option>
              <option value='Dentistry'>Dentistry</option>
              <option value='Gastroenterology'>Gastroenterology</option>
              <option value='ENT'>ENT</option>
              <option value='Cardiology'>Cardiology</option>
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
          <img
            style={{ marginTop: '5%' }}
            src={'/doctors/hospital.png'}
            alt=''
          />
        </div>
      </div>

      <div className='doc-res'>
        <div className='res-inside'>
          {doctors.length > 0 ? (
            <div className='title'>
              {doctors.length} {service} available in {location} <br />
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
                let x = randomNumber(1, 8);
                return (
                  <>
                    <div className='res-cards'>
                      <div className='left'>
                        <div className='img'>
                          <img src={`/doctors/Group-${x}.png`} alt='' />
                        </div>
                        <div className='desc'>
                          <div className='name'>{d.name}</div>
                          <div className='role'>{d.service}</div>
                          <div className='exp'>{d.years} Years </div>
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
                            class='services'
                            style={{ width: '40%', textAlign: 'center' }}
                          >
                            Service Available
                          </button>

                          <button
                            style={{ width: '40%', textAlign: 'center' }}
                            onClick={() => togglePopup(d._id, [], 'bed')}
                          >
                            Book Bed
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
            Safety of your data is our
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
                <p>A lot of Patients recommendation</p>
                <button>Find me the right doctor</button>
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
            <Services id={id} services={servicesPass} type={booktype} />
            <button className='cls-btn' onClick={togglePopup}>
              <i class='fa-solid fa-xmark'></i>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default FindHospitals
