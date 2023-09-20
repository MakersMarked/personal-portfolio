import { useState } from "react"
import menuIcon from './assets/icons8-menu.svg'
const SideBar = () => {
    const [sideBar, setSideBar] = useState(false);

    const toggleSideBar = () => {
        sideBar ? setSideBar(false) : setSideBar(true);
    } 
    return (
        <>
            {
                sideBar ? 
                    <div
                        className="text-3xl absolute z-30 right-4" 
                        onClick={toggleSideBar}>
                        &times;
                    </div> : 
                    <img 
                        src={menuIcon} 
                        alt="Menu" 
                        onClick={toggleSideBar} 
                        className=' z-20 p-3 self-end ease-in duration-300 md:hidden'
                    />
            }
                    
            <div className={`z-20 top-0  h-screen fixed right-0 w-3/4 bg-blue-300  ease-in-out duration-300 ${ sideBar ? 'translate-x-0' : 'translate-x-full'}`}>
                
                <div className="flex flex-col gap-5 text-xl p-10 ">
                    <button>Home</button>
                    <button>Projects</button>
                    <button>Contact</button>
                </div>
            </div>
        </>
    )
}
export default SideBar