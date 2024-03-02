import React, { useRef, useState } from 'react'
import Register from '../Popups/Register'
import '../Popups/login.css'
import Login from '../Popups/Login'


const Homepage = () => {
  const [isOpen, setIsOpen] = useState(false)
const togglePopup = () => {
  setIsOpen(!isOpen)
}
  return (
    <div className='home'>
      <div className='banner'>
        <div className='banner-inside'>
          <div className='up'>
            <div className='left'>
              <img src='/homepage/Group.png' alt='' />
            </div>
            <div className='right'>
              <p>
                Accessible Healthcare At<br /> Way2Heal
              </p>
              <span>
                <i class='fa-solid fa-pills'></i> Integrated Platform{' '}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <i class='fa-solid fa-heart'></i> No more Waiting in Line
              </span>
              <a onClick={togglePopup}>Sign-up today</a>
            </div>
          </div>
          <div className='down'>
            Healthcare at finger tips
          </div>
        </div>
      </div>

      <div className='services'>
        <div className='ser-inside'>
          <a
            href='/oxygencylinder'
            style={{ textDecoration: 'none' }}
            className='ser-card'
          >
            <div
              className='img'
              style={{
                display: 'flex',
                justifyContent: 'end',
                alignItems: 'end'
              }}
            >
              <img src='/labtest/oxy.png' alt='' />
            </div>
            <div className='down'>
              <div className='title'>Find Oxygen Near You</div>
              <span
                style={{ textDecoration: 'none', all: 'unset' }}
                className='sp-link'
              >
                Oxygen in Emergency
              </span>
            </div>
          </a>
          <a
            href='/hospitals'
            style={{ textDecoration: 'none' }}
            className='ser-card'
          >
            <div className='img'>
              <img src='/homepage/serv/doctor.png' alt='' />
            </div>
            <div className='down'>
              <div className='title'>Find Hospitals Near You</div>
              <span
                style={{ textDecoration: 'none', all: 'unset' }}
                className='sp-link'
              >
                Every Hospital You want
              </span>
            </div>
          </a>
          <a
            style={{ textDecoration: 'none' }}
            href='/bloodbank'
            className='ser-card'
          >
            <div className='img'>
              <img src='/homepage/serv/ab.png' alt='' />
            </div>
            <div className='down'>
              <div className='title'>Find Blood Bank </div>
              <span
                style={{ textDecoration: 'none', all: 'unset' }}
                className='sp-link'
              >
                At Fastest
              </span>
            </div>
          </a>
          <a
            style={{ textDecoration: 'none' }}
            href='/medicines'
            className='ser-card'
          >
            <div className='img'>
              <img src='/homepage/serv/del2.png' alt='' />
            </div>
            <div className='down'>
              <div className='title'>Find Medicines Near You</div>
              <span
                style={{ textDecoration: 'none', all: 'unset' }}
                className='sp-link'
              >
                Essentails at your doorstep
              </span>
            </div>
          </a>
        </div>
      </div>

      <div className='specialities'>
        <div className='spe-inside'>
          <div className='up'>
            <div className='heading'>
              Consult top doctors online for any health concern <br />{' '}
              <span>
                Private online consultations with verified doctors in all
                specialists
              </span>
            </div>
            <a href='/hospitals' className='view-sp'>
              View All Specialities
            </a>
          </div>

          <a href='/hospitals' className='down'style={{ textDecoration: 'none' }}>
            <div className='sp-card'>
              <div className='img'>
                <img src='/material/health/preg.png' alt='' />
              </div>
              <div className='title'>Periods or Preganacy</div>
            </div>
            <div className='sp-card'>
              <div className='img'>
                <img src='/material/health/acne.png' alt='' />
              </div>
              <div className='title'>Acne, pimple others</div>
            </div>
            <div className='sp-card'>
              <div className='img'>
                <img src='/material/health/performance.png' alt='' />
              </div>
              <div className='title'>Strength</div>
            </div>
            <div className='sp-card'>
              <div className='img'>
                <img src='/material/health/cold.png' alt='' />
              </div>
              <div className='title'>Cough, cold or fever</div>
            </div>
            <div className='sp-card'>
              <div className='img'>
                <img src='/material/health/baby.png' alt='' />
              </div>
              <div className='title'>Could not feel well</div>
            </div>
            <div className='sp-card'>
              <div className='img'>
                <img src='/material/health/depression.png' alt='' />
              </div>
              <div className='title'>Depression or anxiety</div>
            </div>
          </a>
        </div>
      </div>

      <div className='articles'>
      
        <div className='art-inside'>
          <div className='up'>Health Tips to Keep in Mind</div>
          <div className='down'>
            <div className='art-card'>
              <div className='img'>
                <img src='/homepage/specs/acne.png' alt='' />
              </div>
              <div className='title'>
                Include a variety of foods from all food groups to get the
                nutrients you need.
              </div>
              <a className='art-link'>Learn More</a>
            </div>
            <div className='art-card'>
              <div className='img'>
                <img src='/homepage/specs/acne.png' alt='' />
              </div>
              <div className='title'>
                Most adults need around 7 to 8 hours of sleep per night.
              </div>
              <a className='art-link'>Learn More</a>
            </div>
            <div className='art-card'>
              <div className='img'>
                <img src='/homepage/specs/acne.png' alt='' />
              </div>
              <div className='title'>
                Aim for at least 30 minutes of moderate-intensity exercise most
                days of the week
              </div>
              <a className='art-link'>Learn More</a>
            </div>
            <div className='art-card'>
              <div className='img'>
                <img src='/homepage/specs/acne.png' alt='' />
              </div>
              <div className='title'>
                Find healthy ways to manage stress, such as exercise, relaxation
                techniques, or spending time with loved ones.
              </div>
              <a className='art-link'>Learn More</a>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className='pop-overlay '>
            <div className=' pr '>
              <Register />
              <button  className='cls-btn c-r cr' onClick={togglePopup}>
                <i class='fa-solid fa-xmark'></i>
              </button>
            </div>
          </div>
        )}
      </div>
      
    </div>
  )
}

export default Homepage
