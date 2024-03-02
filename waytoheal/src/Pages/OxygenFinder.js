import React, { useEffect, useState } from 'react'
import axios from '../axios'
import toast from 'react-hot-toast'
import LabTestBooking from '../Popups/LabTestBooking'
import { MutatingDots } from 'react-loader-spinner'

const OxygenFinder = () => {
  const [location, setLocation] = useState('Kharar')
  const [type, settype] = useState('F')
  const [banks, setBanks] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [filtered, setFiltered] = useState([])
  const [id, setId] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function get () {
      try {
        setLoading(true)

        const res = await axios.get('/oxygen')
        const all = await res.data.cylinders
        console.log('no', res.data.cylinders)

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

      const res = await axios.get(`/oxygen/${location}/${type}`)

      console.log('hii', res.data.cylinders)
      setFiltered(res.data.cylinders)
      toast.success(`${res.data.cylinders.length} Cylinders Found`)
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
            <div className='title'>Get Oxygen Cylinder</div>
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
                id='type'
                value={type}
                onChange={e => settype(e.target.value)}
              >
                <option value=''>--Select a Cylinder Type--</option>
                <option value='E'>E</option>
                <option value='F'>F</option>
                <option value='H'>H</option>
              </select>
              <button className='doc-sub' type='submit'>
                Search
              </button>
            </form>
          </div>
          <div className='right'>
            <img src={'/labtest/OBJECTS.png'} alt='' />
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
                      {filtered.length} {type} available in {location} <br />
                      <span>
                        <i class='fa-solid fa-circle-check'></i>&nbsp;Book
                        Oxygens with minimum wait-time {' '}
                      </span>
                    </div>
                  ) : (
                    <div className='none'>Search Your Oxygens Above</div>
                  )}
                </div>
              </div>
              <div className='top-booked'>
                {filtered.length > 0 ? (
                  filtered.map(test => {
                    const typeData =
                      test.types &&
                      test.types.find(group => group.cylinderType === type)
                    console.log(test)
                    return (
                      <div key={test._id} className='tb-card'>
                        <div className='testname'>{test.name}</div>
                        <div className='testdesc'></div>
                        <div className='testdreports'>
                          {test.location}, {test.address}
                        </div>
                        <div className='testcost'>
                          {typeData ? (
                            <p>{typeData.cylinderCost}</p>
                          ) : (
                            <p>Cost of {type}: Not Available</p>
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
                      Need Oxygen in Emergency? <br />{' '}
                      <span>Our Cylinders are here for you</span>
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
            <LabTestBooking id={id} type={type} what={'oxygen'} />
            <button className='cls-btn' onClick={togglePopup}>
              <i class='fa-solid fa-xmark'></i>
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default OxygenFinder
