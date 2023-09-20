

 import SideBar from './SideBar'
 const Hero = () => {
    
    return (
        <>
        <header className=" sticky flex border-b-2 w-screen shadow-sm items-center h-32 ">
            
            <div>
            </div>
            <SideBar  />
            <nav className=" hidden md:flex gap-3 self-end items-end p-3">
                <button>Home</button>
                <button>Projects</button>
                <button>Contact</button>
            </nav>
        </header>
        
        </>
    )
}

export default Hero