import TypeWriter from 'typewriter-effect'
import { useState } from 'react'
const Home = () => {
    const [dropDown, setDropDown] = useState({
        bio: false,
        projects:false,
        contact: false
    })
    const toggleDropDown = (select) => {
        let toDrop = select;
        dropDown[toDrop] ? setDropDown({...dropDown, [toDrop]:false}) : setDropDown({...dropDown, [toDrop]:true})
        console.log(dropDown[toDrop])
    }
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
    const bio = 'Hello, My name is Jordan. Im an aspiring software engineer'
return (
    <>
    <div className="  w-screen">
       <div className="text-3xl  pt-3 md:text-3xl flex-1">
        <h1 className="font-bold text-center" >{fullName}</h1>
     </div>
        <section className=" ">
        
        <div className="flex gap-3">
            <h2 className="font-bold underline text-xl">Bio</h2>
            <button className="" name = 'bio' onClick={(e)=> toggleDropDown(e.target.name)}>open</button>
        </div>
        
           {
          
            <p className={`ease-in-out duration-300 ${!dropDown.bio ? ' scale-0 h-0' : 'transform h-100' } `}>
                {bio}
            </p>} 
    
         
        </section>
        
    </div>
  
        
    </>
)

}

export default Home