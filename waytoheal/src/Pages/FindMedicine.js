import React, { useEffect, useState } from 'react'
import Booking from '../Popups/Booking'
import axios from '../axios'
import toast from 'react-hot-toast'
import LabTestBooking from '../Popups/LabTestBooking'
import { MutatingDots } from 'react-loader-spinner'

const FindMedicine = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const [medicines, setMedicines] = useState([])
  const [bokID, setBookId] = useState('none')
  const [booktype, setBookType] = useState('none')
  const [filtered, setFiltered] = useState([])
  const [category, setCategory] = useState('Cold')
  const [options, setOptions] = useState([])
  const [id, setId] = useState()

  const togglePopup = id => {
    setIsOpen(!isOpen)
    setId(id)
  }

  useEffect(() => {
    async function get () {
      try {
        setLoading(true)

        const res = await axios.get('/getmedicines')
        const all = await res.data.meds
        setMedicines(all)
        setLoading(false)
      } catch (err) {
        console.error(err)
        return null
      }
    }

    get()
    handleSubmit()
  }, [])

  useEffect(() => {
    setLoading(true)

    const categories = medicines.reduce((acc, curr) => {
      if (!acc.includes(curr.category)) {
        acc.push(curr.category)
        setLoading(false)
      }
      return acc
    }, [])
    setOptions(categories)
  }, [medicines])

  const handleSubmit = async e => {
    e.preventDefault()
    console.log(category)
    try {
      setLoading(true)

      const res = await axios.get('/getmedicines/category', {
        params: {
          category: category
        }
      })
      setFiltered(res.data.meds)
      toast.success(`${res.data.meds && res.data.meds.length} Medicines Found`)
      setLoading(false)
    } catch (error) {
      console.error(error)
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
          <div className='title'>Your home for Medicines</div>
          <br />
          <form onSubmit={handleSubmit}>
            <select
              name='speciality'
              value={category}
              onChange={e => setCategory(e.target.value)}
            >
              <option value='Cold'>Cold</option>
              {options &&
                options.map(m => {
                  return <option value={`${m}`}>{m}</option>
                })}
            </select>
            <button className='doc-sub' type='submit'>
              Search
            </button>
          </form>
          <br />
        </div>
        <div style={{ marginRight: '6%' }} className='right'>
          <img style={{ filter: 'none' }} src={'/medicines/top.png'} alt='' />
        </div>
      </div>

      <div className='doc-res'>
        <div className='res-inside'>
          {filtered.length > 0 ? (
            <div className='title'>
              {filtered.length} Search For {category} <br />
              <span>
                <i class='fa-solid fa-circle-check'></i>&nbsp;Buy Medicines just
                by sitting at your home.
              </span>
            </div>
          ) : (
            <div className='none'>Search Your Doctors Above</div>
          )}

          <div className='results'>
            {medicines.length > 0 ? (
              filtered.map(d => {
                return (
                  <>
                    <div key={d._id} className='res-cards'>
                      <div className='left'>
                        <div className='img'>
                          <img
                            style={{ width: '80%' }}
                            src={`/material/Medicines/med (${randomNumber(1,9)}).png`}
                            alt=''
                          />
                        </div>
                        <div className='desc'>
                          <div className='name'>{d.name}</div>
                          <div style={{ color: 'black' }} className='role'>
                            {d.category}
                          </div>
                          <div
                            style={{ color: 'gray', fontSize: '.6em' }}
                            className=''
                          >
                            {d.howTouse}
                          </div>

                          <br />
                          <div className='fees'>
                            <span> {d.cost} </span>
                          </div>
                        </div>
                      </div>

                      <div className='right'>
                        <div className='avail'>Available Today</div>
                        <div className='booking'>
                          <button onClick={() => togglePopup(d._id)}>
                            Order
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

      <div className='pop-pro'>
        <h2>Popular Products</h2>
        <div className='pop-cards'>
          {medicines
            .map(m => {
              return (
                <>
                  <a
                    onClick={() => togglePopup(m._id)}
                    key={m._id}
                    className='pop-card'
                  >
                    <div className='img'>
                      <img src={`/material/Medicines/med (${randomNumber(1,9)}).png`} alt='' />
                    </div>
                    <div className='name'>{m.name}</div>
                    <div className='cost'>{m.cost}</div>
                  </a>
                </>
              )
            })
            .slice(0, 4)}
        </div>
      </div>

      {isOpen && (
        <div className='pop-overlay'>
          <div className='popup'>
            <LabTestBooking id={id} type={'none'} what={'med'} />
            <button className='cls-btn' onClick={togglePopup}>
              <i class='fa-solid fa-xmark'></i>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default FindMedicine
