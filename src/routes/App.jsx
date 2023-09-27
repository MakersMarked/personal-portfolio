

import Hero from '../Hero'
import '../styles/App.css'
import { Outlet } from 'react-router-dom'



function App() {
  



  return (
    <>
    <Hero />
    <div>
     <Outlet /> 
    </div> 
    </>
   
  )
}

export default App
