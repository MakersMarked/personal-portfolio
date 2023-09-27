
import { Link } from 'react-router-dom'
 import SideBar from './SideBar'
 const Hero = () => {
    
    return (
        <>
        <header className=" sticky flex border-b-2 w-screen shadow-sm items-center h-32 ">
            <SideBar  />
            <nav className=" hidden md:flex gap-3 self-end items-end p-3">
                <button><Link to={`/1/bio`}>Bio</Link></button>
                <button><Link to={`/1/projects`}>Projects</Link></button>
                <button><Link to={`/1/contact`}>Contact</Link></button>
                
            </nav>
        </header>
        </>
    )
}

export default Hero