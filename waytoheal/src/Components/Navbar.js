import React, { useEffect, useState } from 'react'
import Login from '../Popups/Login'
import CallReq from '../Popups/CallReq'
import '../popup.css'
import { useNavigate } from 'react-router-dom'

const Navbar = ({ roleo, usero }) => {
  console.log('user', usero)
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenCall, setIsOpenCall] = useState(false)
  const navigate = useNavigate()

  const togglePopup = () => {
    setIsOpen(!isOpen)
  }
  const togglePopupCall = () => {
    setIsOpenCall(!isOpenCall)
  }

  const handleLogout = () => {
    localStorage.clear()
    window.location.reload(false)
    navigate('/')
  }
  return (
    <div className='navbar sticky-top bg-light p-2 text-dark bg-opacity-75' >
      <div className='nav-left'>
        <div className='div-logo'>
          <a href='/'>
            <img src='/icons/logo.png' alt='' />
          </a>
        </div>
        <ul>
          <li>
            {' '}
            <a href='/doctors'>Find Doctors</a>{' '}
          </li>
          <li>
            {' '}
            <a href='/hospitals'>Find Hospitals</a>{' '}
          </li>

          <li>
            {' '}
            <a href='/labtests'>Lab Test</a>{' '}
          </li>
          <li>
            {' '}
            <a href='/about'>About Us</a>{' '}
          </li>
        </ul>
      </div>

      <div className='nav-right'>
        {usero ? (
          <>
            {roleo === 'user' && (
              <div class='btn-group'>
                <button
                  type='button'
                  class='btn btn-danger dropdown-toggle'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  {usero}
                </button>
                <div class='dropdown-menu dpm'>
                  <a class='dropdown-item' href='/myprofile'>
                    My Appointments
                  </a>
                  <a class='dropdown-item' href='/myprofile'>
                    My Online Consultations
                  </a>
                  <a class='dropdown-item' href='/myprofile'>
                    My Lab Tests
                  </a>
                  <a class='dropdown-item' href='/myprofile'>
                    My Oxygen Orders
                  </a>
                  <a class='dropdown-item' href='/myprofile'>
                    My Blood Tests
                  </a>
                  <a class='dropdown-item' href='/myprofile'>
                    My Medicines
                  </a>
                  <div class='dropdown-divider'></div>

                  <button onClick={handleLogout} class='dropdown-item' href='#'>
                    Logout
                  </button>
                </div>
              </div>
            )}
            {roleo === 'admin' && (
              <div class='btn-group'>
                <button
                  type='button'
                  class='btn btn-danger dropdown-toggle'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  {usero}
                </button>
                <div class='dropdown-menu dpm'>
                  <a class='dropdown-item' href='/adminpanel'>
                    View Appointments
                  </a>
                  <a class='dropdown-item' href='/adminpanel'>
                    View Consultaion
                  </a>
                  <a class='dropdown-item' href='/adminpanel'>
                    View Call Requests
                  </a>
                  <a class='dropdown-item' href='/adminpanel'>
                    View Blood Requests
                  </a>
                  <a class='dropdown-item' href='/adminpanel'>
                    View Oxygen Requests
                  </a>
                  <a class='dropdown-item' href='/adminpanel'>
                    View Medicine Requests
                  </a>
                  <a class='dropdown-item' href='/adminpanel'>
                    View Lab Test Requests
                  </a>
                  <div class='dropdown-divider'></div>
                  <button onClick={handleLogout} class='dropdown-item' href='#'>
                    Logout
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            <a className='reqs' onClick={togglePopupCall} href='#'>
              Request Call
            </a>
            <a onClick={togglePopup} className='login-btn'>
              Login
            </a>
          </>
        )}
      </div>

      {isOpenCall && (
        <div className='pop-overlay'>
          <div className='popup'>
            <CallReq />
            <button className='cls-btn' onClick={togglePopupCall}>
              <i class='fa-solid fa-xmark'></i>
            </button>
          </div>
        </div>
      )}

      {isOpen && (
        <div className='pop-overlay'>
          <div className='popup'>
            <Login />
            <button className='cls-btn' onClick={togglePopup}>
              <i class='fa-solid fa-xmark'></i>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
