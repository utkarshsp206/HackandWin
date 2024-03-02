import React, { useEffect, useState } from 'react'
import axios from '../axios'
import toast from 'react-hot-toast'
import LabTestBooking from '../Popups/LabTestBooking'
import { MutatingDots } from 'react-loader-spinner'

const BloodBank = () => {
  const [location, setLocation] = useState('Kharar')
  const [bloodGroup, setBloodGroup] = useState('B-')
  const [banks, setBanks] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [filtered, setFiltered] = useState([])
  const [loading, setLoading] = useState(false)

  const [id, setId] = useState('')

  useEffect(() => {
    async function get () {
      try {
        setLoading(true)
        const res = await axios.get('/bloodbank')
        const all = await res.data.banks
        setBanks(all)
        setLoading(false)
      } catch (err) {
        console.error(err)
        return null
      }
    }

    get()
  }, [])

  const togglePopup = (id, type) => {
    setIsOpen(!isOpen)
    setId(id)
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      setLoading(true)

      const res = await axios.get(`/bloodbank/${location}/${bloodGroup}`, {
        params: {
          location: location,
          bloodGroup: bloodGroup
        }
      })
      setFiltered(res.data.banks)
      toast.success(`${res.data.banks.length} Blood Banks Found`)
      setLoading(false)
    } catch (error) {
      console.error(error)
      return null
    }
  }
  return (
    <>
      <div className='bloodbank'></div>
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

      <div className='doc-home'>
        <div
          style={{ background: 'white', boxShadow: 'none' }}
          className='searchbar'
        >
          <div className='left'>
            <div className='title'>Find Blood Emergency</div>
            <form onSubmit={handleSubmit}>
              <select
                name='location'
                value={location}
                onChange={e => handleSubmit(e.target.value)}
              >
                <option value='Kharar'>Kharar</option>
                <option value='Mohali'>Mohali</option>
                <option value='Chandigarh'>Chandigarh</option>
              </select>
              <select
                id='bloodGroup'
                value={bloodGroup}
                onChange={e => setBloodGroup(e.target.value)}
              >
                <option value=''>--Select a Blood Group--</option>
                <option value='A+'>A+</option>
                <option value='A-'>A-</option>
                <option value='B+'>B+</option>
                <option value='B-'>B-</option>
                <option value='AB+'>AB+</option>
                <option value='AB-'>AB-</option>
                <option value='O+'>O+</option>
                <option value='O-'>O-</option>
              </select>
              <button className='doc-sub' type='submit'>
                Search
              </button>
            </form>
          </div>
          <div className='right'>
            <img src={'/medicines/blood.png'} alt='' />
          </div>
        </div>
      </div>

      <div className='lab-home'>
        <div className='lab-res'>
          <div className='labres-inside'>
            <div className='down'>
              <div className='doc-res'>
                <div
                  style={{ padding: '0', marginRight: '46%' }}
                  className='res-inside'
                >
                  {filtered.length > 0 ? (
                    <div className='title'>
                      {filtered.length} {bloodGroup} available in {location}{' '}
                      <br />
                      <span>
                        <i class='fa-solid fa-circle-check'></i>&nbsp;Book at your ease{' '}
                      </span>
                    </div>
                  ) : (
                    <div className='none'>Search Blood Above</div>
                  )}
                </div>
              </div>
              <div className='top-booked'>
                {filtered.length > 0 ? (
                  filtered.map(test => {
                    const bloodGroupData = test.bloodGroups.find(
                      group => group.bloodGroupName === bloodGroup
                    )
                    return (
                      <div key={test._id} className='tb-card'>
                        <div className='testname'>{test.name}</div>
                        <div className='testdesc'></div>
                        <div className='testdreports'>
                          {test.location}, {test.address}
                        </div>
                        <div className='testcost'>
                          Rs.{' '}
                          {bloodGroupData ? (
                            <p>
                              Cost of {bloodGroup}:{' '}
                              {bloodGroupData.bloodGroupCost}
                            </p>
                          ) : (
                            <p>Cost of {bloodGroup}: Not Available</p>
                          )}
                        </div>
                        <button
                          onClick={() => togglePopup(test._id, 'medbook')}
                          className='book-btn'
                        >
                          Book
                        </button>
                      </div>
                    )
                  })
                ) : (
                  <div className='none'></div>
                )}
              </div>

              <div className='banner'>
                <div className='ban-inside'>
                  <div className='left'>
                    <img src='/homepage/specs/acne.png' alt='' />
                    <p>
                      Need Blood in Emergency? <br />{' '}
                      <span>Our experts are here to help you</span>
                    </p>
                  </div>
                  <div className='right'>
                    <button>+91 80856 59484</button>
                  </div>
                </div>
              </div>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className='pop-overlay'>
          <div className='popup'>
            <LabTestBooking id={id} type={bloodGroup} what={'blood'} />
            <button className='cls-btn' onClick={togglePopup}>
              <i class='fa-solid fa-xmark'></i>
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default BloodBank
