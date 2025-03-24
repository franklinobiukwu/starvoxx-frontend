import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import LandingPage from './pages/LandingPage'

function App() {

  return (
          <BrowserRouter>
            <Routes>
                <Route index element={<LandingPage/>} />
            </Routes>
          </BrowserRouter>
  )
}

export default App
