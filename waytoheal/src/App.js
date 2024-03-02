import { useEffect, useState } from 'react'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Error from './Components/Error'
import {
  Homepage,
  FindDoctors,
  FindHospital,
  FindMedicine,
  LabTest,
  About,
  BloodBank
} from './Pages'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import axios from './axios'
import OxygenFinder from './Pages/OxygenFinder'
import UserPanel from './Pages/UserPanel'
import AdminPanel from './Pages/AdminPanel'
function App () {
  const [user, setUser] = useState(null)
  const [role, setRole] = useState(null)

  const [content, setContent] = useState(null)

  const token = localStorage.getItem('access_token')
  const admintoken = localStorage.getItem('admin')
  useEffect(() => {
    async function getContent () {
      if (!token && !admintoken) {
        return
      }

      const utoken = admintoken || token

      try {
        const response = await axios.get('/validateUser', {
          headers: {
            Authorization: `Bearer ${utoken}`
          }
        })
        setUser(response.data.validateOne.name)
        setRole(response.data.validateOne.role)
      } catch (error) {
        console.log(error)
      }
    }

    getContent()
  }, [])

  return (
    <>
      <Toaster
        position='top-center'
        toastOptions={{
          success: {
            theme: {
              primary: '#18206F'
            },
            style: {
              background: '#18206F',
              color: 'white'
            },
            iconTheme: {
              primary: '#FBCBDC',
              secondary: '#18206F'
            }
          }
        }}
      ></Toaster>
      <Router>
        <Navbar roleo={role} usero={user} />
        <main>
          <Routes>
            <Route path='' element={<Homepage />} />
            <Route path='doctors' element={<FindDoctors />} />
            <Route path='medicines' element={<FindMedicine />} />
            <Route path='labtests' element={<LabTest />} />
            <Route path='hospitals' element={<FindHospital />} />
            <Route path='about' element={<About />} />
            <Route path='bloodbank' element={<BloodBank />} />
            <Route path='oxygencylinder' element={<OxygenFinder />} />
            {token && (
              <Route path='myprofile' element={<UserPanel user={user} />} />
            )}
          {
            admintoken && <Route path='myprofile' element={<Error />} />
          }  
            {admintoken && <Route path='adminpanel' element={<AdminPanel />} />}
            <Route path='adminpanel' element={<Error />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  )
}

export default App
