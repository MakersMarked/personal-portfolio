import { useState } from "react"

 const ContactForm = () => {
    const [contact, setContact] = useState({
        fullName: '',
        email: '',
        phoneNum: '',
        comments: ''
    })

    const formInput = (t, v) => {
        setContact({...contact, [t]:v}) 
    }
    return (
        <>
            <form className="flex flex-col m-5 gap-5 bg-gray-500" >
                <label >
                    Full Name:   <input className="rounded-md" type="text" name="fullName" onChange={(e)=> formInput(e.target.name, e.target.value)} />
                </label>
                <label>
                  Email:  <input type="email" name="email" onChange={(e)=> formInput(e.target.name, e.target.value)} />
                </label>
                <label >
                   Phone Number <input type="tel" name="phoneNum" onChange={(e)=> formInput(e.target.name, e.target.value)} />
                </label>
                <label>
                    Comments: <textarea type="text" name="comments" onChange={(e)=> formInput(e.target.name, e.target.value)} />
                </label>
                <input className="bg-blue-300" type="button" onClick={(()=>console.log(contact))} value={'Submit'} />
            </form>
        </>
    )
}

export default ContactForm