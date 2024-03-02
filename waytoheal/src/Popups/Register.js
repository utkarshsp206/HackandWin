import React, { useState } from 'react'
import axios from '../axios'
import { toast } from 'react-hot-toast'
import './login.css'

const Register = () => {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [mobile, setmobile] = useState('')
  const [password, setpassword] = useState('')
  const [confirm_password, setconfirm_password] = useState('')
  const [loading, setLoading] = useState(false)

  const handleRegister = async e => {
    e.preventDefault()
    setLoading(true)

    const res = await axios
      .post('/register', {
        name,
        email,
        mobile,
        password,
        confirm_password
      })
      .then(() => {
        toast.success('Succesfull Register')

        setLoading(false)
        window.location.reload(false)
      })
      .catch(err => {
        console.log('err react')

        toast.error(err.response.data.message)
        setLoading(false)
      })
  }
  return (
    <>
      {/* <section class='form-container r-f'>
        
      </section> */}

      {loading &&
        toast('Saving You in Database...', {
          icon: '🔃'
        })}
      <div class='form-container'>
        <p class='title'>Register</p>
        <form class='form'>
          <div class='input-group'>
            <label for='username'>Name:</label>
            <input
              type='text'
              value={name}
              name='username'
              id='username'
              onChange={e => setname(e.target.value)}
            />
          </div>
          <div class='input-group'>
            <label for='username'>E-mail</label>
            <input
              type='email'
              value={email}
              name='username'
              id='username'
              onChange={e => setemail(e.target.value)}
            />
          </div>
          <div class='input-group'>
            <label for='username'>Mobile:</label>
            <input
              type='text'
              value={mobile}
              name='username'
              id='username'
              onChange={e => setmobile(e.target.value)}
            />
          </div>

          <div class='input-group'>
            <label for='password'>Password</label>
            <input
              type='password'
              name='password'
              value={password}
              id='password'
              placeholder=''
              onChange={e => setpassword(e.target.value)}
            />
          </div>
          <div class='input-group'>
            <label for='password'>Confirm Password</label>
            <input
              type='password'
              name='password'
              value={confirm_password}
              id='password'
              placeholder=''
              onChange={e => setconfirm_password(e.target.value)}
            />
          
          </div>
          <br /> <br />
          <button onClick={handleRegister} class='sign'>
            Sign in
          </button>
        </form>
        <br />
        <br />
        <br />
      </div>
    </>
  )
}

export default Register
