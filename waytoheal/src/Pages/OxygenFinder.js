import React, { useEffect, useState } from 'react'

import axios from '../axios'
import { toast } from 'react-hot-toast'
import LabTestBooking from '../Popups/LabTestBooking'
import { MutatingDots } from 'react-loader-spinner'

const LabTest = () => {
  const [tests, setTest] = useState([])
  const [filteredTests, setFilteredTests] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [active, setActive] = useState('all')
  const [isOpen, setIsOpen] = useState(false)
  const [id, setId] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getAllTests = async () => {
      setLoading(true)

      const response = await axios.get('/getlabtests')
      console.log(response.data.tests)
      setTest(response.data.tests)
      setLoading(false)
    }
    getAllTests()
  }, [])

  function handleFilter (category) {
    setSelectedCategory(category)
    if (category === 'all') {
      setLoading(true)

      setFilteredTests(tests)
      setLoading(false)
    } else {
      setLoading(true)

      const filtered = tests.filter(test => test.category === category)
      setFilteredTests(filtered)
      setActive(category)
      toast.success(`All ${category} Selected`)
      setLoading(false)
    }
  }

  const togglePopup = id => {
    setId(id)
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className='doc-home'></div>
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

      <div className='lab-home'>
        <div className='lab-res'>
          <div className='labres-inside'>
            <div className='top'>
              <h4>Find Test by Type</h4>
              <br />
              <br />
              <div className='btns'>
                <button
                  onClick={() => handleFilter('Blood Test')}
                  className={`${
                    active === 'Blood Test' ? 'active' : 'deactive'
                  }`}
                >
                  Blood Test
                </button>
                <button
                  onClick={() => handleFilter('Urine Test')}
                  className={`${
                    active === 'Urine Test' ? 'active' : 'deactive'
                  }`}
                >
                  Urine Test
                </button>
                <button
                  className={`${
                    active === 'Spurum Test' ? 'active' : 'deactive'
                  }`}
                  onClick={() => handleFilter('Spurum Test')}
                >
                  Spurum Test
                </button>
              </div>
            </div>
            <div className='down'>
              <div className='top-booked'>
                {filteredTests.length > 0 ? (
                  filteredTests.map(test => (
                    <div key={test._id} className='tb-card'>
                      <div className='testname'>{test.testName}</div>
                      <div className='testdesc'>
                        {test.testDesc.slice(0, 35)} ....
                      </div>
                      <div className='testdreports'>E-Reports in 1 day</div>
                      <div className='testcost'>Rs. {test.cost}</div>
                      <button
                        onClick={() => togglePopup(test._id)}
                        href=''
                        className='book-btn'
                      >
                        Book
                      </button>
                    </div>
                  ))
                ) : (
                  <div className='none'></div>
                )}
              </div>

              <div className='banner'>
                <div className='ban-inside'>
                  <div className='left'>
                    <img src='/homepage/specs/acne.png' alt='' />
                    <p>
                      Need help with booking your test? <br />{' '}
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

              <h4>Top Booked Diagnostic Tests</h4>
              <br />
              <div className='top-booked'>
                {tests.slice(0, 4).map(t => {
                  return (
                    <div className='tb-card'>
                      <div className='testname'>{t.testName}</div>
                      <div className='testdesc'>
                        {' '}
                        {t.testDesc.slice(0, 36)} ....
                      </div>
                      <div className='testdreports'>E-Reports in 1 day</div>
                      <div className='testcost'>Rs. {t.cost}</div>
                      <button
                        onClick={() => togglePopup(t._id)}
                        href=''
                        className='book-btn'
                      >
                        Book
                      </button>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        <div className='ads'>
          <div className='ad-in'>
            <div className='top'>
              <h1>WHY BOOK WITH US?</h1>
              <div className='lists'>
                <div className='li'>
                  <div className='img'>
                    <img src='/labtest/ads (1).png' alt='' />
                  </div>
                  <p>
                    Home sample collection for FREE <br />{' '}
                    <span>
                      A certified professional will collect your sample from
                      your preferred location
                    </span>
                  </p>
                </div>
                <div className='li'>
                  <div className='img'>
                    <img src='/labtest/ads (1).png' alt='' />
                  </div>
                  <p>
                    Home sample collection for FREE <br />{' '}
                    <span>
                      A certified professional will collect your sample from
                      your preferred location
                    </span>
                  </p>
                </div>
                <div className='li'>
                  <div className='img'>
                    <img src='/labtest/ads (1).png' alt='' />
                  </div>
                  <p>
                    Home sample collection for FREE <br />{' '}
                    <span>
                      A certified professional will collect your sample from
                      your preferred location
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className='down'>
              <h5>Thousands of Happy Customers</h5>
              <h3>
                "Very professional phlebo. Excellent job in collecting the
                sample. No pain at all. Got my report also within 24 hours"{' '}
                <br /> <span>Jane Doe</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className='pop-overlay'>
          <div className='popup'>
            <LabTestBooking id={id} type={'none'} what={'labtest'} />
            <button className='cls-btn' onClick={togglePopup}>
              <i class='fa-solid fa-xmark'></i>
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default LabTest
