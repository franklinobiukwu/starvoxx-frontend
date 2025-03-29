import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import DashboardLayout from './layouts/DashboardLayout'

function App() {

  return (
          <BrowserRouter>
            <Routes>
                <Route index element={<LandingPage/>} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/signup' element={<SignupPage/>} />
                <Route path='/dashboard' element={<DashboardLayout/>} />
            </Routes>
          </BrowserRouter>
  )
}

export default App
