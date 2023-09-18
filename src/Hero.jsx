 import { useState } from 'react';
 import TypeWriter from 'typewriter-effect'
 import menuIcon from './assets/icons8-menu.svg'
 import SideBar from './SideBar'
 const Hero = () => {
    
    return (
        <>
        <header className=" sticky flex border-b-2 w-screen shadow-sm items-center h-32 ">
            <div className="text-2xl  pt-3 md:text-3xl flex-1">
                <h1 className="font-bold text-center" >
                    <TypeWriter 
                        onInit={(typewriter) => {
                            typewriter.pauseFor(1000)
                                .typeString('Jordan Ane')
                                .pauseFor(300)
                                .deleteChars(1)
                                .typeString('derson')
                                .start()
                          }}
                    />    
                </h1>
            </div>
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