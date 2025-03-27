import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'

function App() {

  return (
          <BrowserRouter>
            <Routes>
                <Route index element={<LandingPage/>} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/signup' element={<SignupPage/>} />
            </Routes>
          </BrowserRouter>
  )
}

export default App
