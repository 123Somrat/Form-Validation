import {useState} from "react"
import "./app.css"
export default function CreateForm(){
     // Declare state for tracking form data
     const[userData,setUserData]=useState({

     })


       const handleChange = (e)=>{
         // collect field name
         const  name = e.target.name;
         // collect all field value
         const values =  e.target.value;
         // updateing state useing state
         setUserData({
            // collecting all previous data useing spread operator
            ...userData,
            [name]:values
         })
        
         const handleSubmit = ()=>{
            
         }
       }
        // distructing object
       const{fullName,UserName,Email,Number,Password,Confirm_Password,URL,Slack}=userData;
       

    return(
        <div>

             <form onSubmit={handleSubmit} >
                   <input
                    name="fullName" 
                    className="input"
                    type="text" 
                    placeholder="Full Name*"
                    style={{marginBottom:"15px"}}
                    onChange={handleChange}
                    value={fullName} 
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