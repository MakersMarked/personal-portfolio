import TypeWriter from 'typewriter-effect';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
const Intro = () => {
    
    const [loaded, setLoaded] = useState(false);

 const handleLoad = () => {
  setLoaded(true);
  
};

useEffect(()=> {
    handleLoad()
    setTimeout(() => console.log(loaded),1000)
},[loaded])




    const fullName = <TypeWriter 
                onInit={(typewriter) => {
                    typewriter.pauseFor(1000)
                      .typeString('Jordan Ane')
                      .pauseFor(300)
                      .deleteChars(1)
                      .typeString('derson')
                      .start()
                }}
                    /> 
                   
return (
    <>
    <div className="  w-screen h-screen flex justify-center items-center flex-col gap-5">
        <div className="text-3xl  pt-3 md:text-3xl">
            <h1 className="font-bold text-center" >{fullName}</h1>
        </div>
        <div className={`flex gap-5 transition-opacity ease-in   ${loaded ? 'opacity-100 delay-5000 duration-2000' : 'opacity-0'}`}>
            <button>
                <Link to='/1/bio'>Bio</Link>
            </button>
            <button>
                <Link to='/1/projects'>Projects</Link>
            </button>
            <button>
                <Link to='/1/contact' >Contact</Link>
            </button>
        </div>
    </div>
    
        
    </>
)

}

export default Intro