import { useState } from "react";

const ContentBlock = ({title, content }) => {
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
    
    return (
        <>
        <section className=" ">
            <div className="flex gap-3">
                <h2 className="font-bold underline text-xl">{title}</h2>
                <button className="" name = 'bio' onClick={(e)=> toggleDropDown(e.target.name)}>open</button>
            </div>
            
            <div className={` grid ease-in-out duration-300 transition-gridTemplateRows overflow-hidden ${!dropDown.bio ? 'grid-rows-0' : ' grid-rows-1'}`}>
                    <p  className='min-h-0'>
                       {content}
                    </p> 
            </div>
        </section>
        </>

    )
}

export default ContentBlock