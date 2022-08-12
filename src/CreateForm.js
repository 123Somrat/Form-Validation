import {useState} from "react"
import "./app.css"
export default function CreateForm(){
     // Declare state for tracking form data
     const[userData,setUserData]=useState({



     })


       const handleChange = (e)=>{
         const  name = e.target.name;
         const values =  e.target.value;
         setUserData({
            ...userData,
            [name]:values
         })
         console.log(name)
         console.log(values)
         console.log(userData)

       }

    return(
        <div>

             <form  >
                   <input
                    name="fullName" 
                    className="input"
                    type="text" 
                    placeholder="Full Name*"
                    style={{marginBottom:"15px"}}
                    onChange={handleChange} 
                    />

                   <input
                   name="UserName" 
                   className="userName"
                   type="text" 
                   placeholder="UserName*"
                   onChange={handleChange}
                   /> 
                   <br/>
                   <input 
                    name="Email"
                    className="Email" 
                    type="text"
                     placeholder="Email*" 
                     style={{marginBottom:"15px"}} 
                     onChange={handleChange}
                     />
                       
                   <input
                    name="Number" 
                    className="Number" 
                    type="text" 
                    placeholder="Number*"
                    onChange={handleChange}
                    />
                   <br/>

                   <input
                    name="Password"  
                    className="Password" 
                    type="text" 
                    placeholder="Password*"
                    style={{marginBottom:"15px"}}
                    onChange={handleChange}
                    />

                   <input  
                   name ="Confirm_Password" 
                   className="confirm-Password"  
                   type="text" 
                   placeholder="Confirm Password*"
                   onChange={handleChange} 
                   />

                   <br/> 
                   <input 
                   name = "URL" 
                   className="url" 
                   type="link" 
                   placeholder="URL Link*"
                   onChange={handleChange} 
                   />

                   <input 
                   name="Slug" 
                   className="slug" 
                   type="text" 
                   placeholder="Slack*" 
                   onChange={handleChange}
                   />
                    <br/>
                    <button type="submit" className="btn">Submit</button>
            </form>


        </div>
       

    )
}