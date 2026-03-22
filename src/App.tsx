import "./App.css"
import Home from "./Home"
import SBI1 from "./SBI1"
import Players from "./Players"
import Replays from "./Replays"
import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />

      <div className='app-container'>
        <Routes>
          <Route path='/SBI-Archive' element={<Home />} />
          <Route path='/SBI-Archive/SBI1' element={<SBI1 />} />
          <Route path='/SBI-Archive/Players' element={<Players />} />
          <Route path='/SBI-Archive/Replays' element={<Replays />} />
        </Routes>
      </div>
    </>
  )
}

export default App
