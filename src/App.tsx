import "./App.css"
import Home from "./Home"
import SBI1 from "./SBI1"
import Players from "./Players"
import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />

      <div className='app-container'>
        <Routes>
          <Route path='/SBI-Archive' element={<Home />} />
          <Route path='/SBI1' element={<SBI1 />} />
          <Route path='/Players' element={<Players />} />
        </Routes>
      </div>
    </>
  )
}

export default App
