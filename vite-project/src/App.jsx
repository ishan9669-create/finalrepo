import { useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Home, { ImageSlider } from './pages/home.jsx'
import Header from './components/header'
import Firstshow from './pages/firstshow'
import {BrowserRouter as Router} from 'react-router-dom'
import Product from './pages/product.jsx'
import Mining from './pages/Mining.jsx'
import Agriculture from './pages/agriculture.jsx'
import Utility from './pages/utilities.jsx'
import Contact from './pages/contactUs.jsx'
import FAQs from './pages/faq.jsx'
import Login from './pages/login.jsx'
import Case from './pages/casestudies.jsx'
import Worksyte from './pages/worksyte.jsx'
import Register from './pages/register.jsx'
import Pilot from './pages/pilot.jsx'
import PilotRegister from './components/pilotregister.jsx'
import Aerial from './pages/aerialphoto.jsx'
import Inspection from './pages/inspectionandanalysis.jsx'
import Afterlogin from './pages/afterlogin.jsx'

function App() {
  const [count, setCount] = useState(0)

   const location = useLocation();

   const hideHeaderRoutes  = ['/worksyte','/register','/afterlogin'];

  return (
    <div> 
     {!hideHeaderRoutes.includes(location.pathname) && <Header />}
      


      <Routes>
       <Route path='/' element={<Firstshow/>}/>
       <Route path='/home' element={<Home/>} />
      <Route path='/product' element={<Product/>} />
      <Route path='/mining' element={<Mining/>} />
      <Route path='/agriculture' element={<Agriculture/>} />
      <Route path='/utilities' element = {<Utility/>}  />
      <Route path='/contactus' element={<Contact/>} />
      <Route path='/faqs' element={<FAQs/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/case' element={<Case/>} />
      <Route path='/worksyte' element={<Worksyte/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/pilot' element={<Pilot/>} />
      <Route path='/pilotregister' element={<PilotRegister/>} />
      <Route path='/aerialphoto' element={<Aerial/>} />
      <Route path='/inspection' element={<Inspection/>} />
      <Route path='/afterlogin' element={<Afterlogin/>} />
      </Routes> 
      
    </div>
      
       
    )
}

export default App
