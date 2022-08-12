import "./app.css"
export default function CreateForm(){

    return(
        <div>

             <form  >
                   <input
                    name="fullName" 
                    className="input"
                    type="text" 
                    placeholder="Full Name*"
                    style={{marginBottom:"15px"}} 
                    />

                   <input
                   name="UserName" 
                   className="userName"
                   type="text" 
                   placeholder="UserName*"
                   /> 
                   <br/>
                   <input 
                    name="Email"
                    className="Email" 
                    type="text"
                     placeholder="Email*" 
                     style={{marginBottom:"15px"}} 
                     />
                       
                   <input
                    name="Number" 
                    className="Number" 
                    type="text" 
                    placeholder="Number*" 
                    />
                   <br/>

                   <input
                    name="Password"  
                    className="Password" 
                    type="text" 
                    placeholder="Password*"
                    style={{marginBottom:"15px"}} 
                    />

                   <input  
                   name ="Confirm_Password" 
                   className="confirm-Password"  
                   type="text" 
                   placeholder="Confirm Password*" 
                   />

                   <br/> 
                   <input 
                   name = "URL" 
                   className="url" 
                   type="link" 
                   placeholder="URL Link*" 
                   />

                   <input 
                   name="Slug" 
                   className="slug" 
                   type="text" 
                   placeholder="Slack*" 
                  
                   />
                    <br/>
                    <button type="submit" className="btn">Submit</button>
            </form>


        </div>
       

    )
}