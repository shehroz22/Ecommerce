import { createAuthUserWithEmailAndPassword ,createUserFromAuth} from "../../Utils/firebase/firebase.utils"
import FormInput from "../form-input/form-input.component"
import "./sign-up-form.styles.scss"
import Button from "../button/button.component"

import { useState } from "react"
  const defaultformfields=
{displayName:"",
email:"",
password:"",
confirmPassword:""
        }
  

const SignUpForm=()=>{

const resetformfields=()=>{

setformfiels(defaultformfields)

}
  const[formfields,setformfiels]=useState(defaultformfields)
  const{displayName,email,password,confirmPassword}=formfields
  console.log(formfields)

  const handleSubmit=async (event)=>{
    console.log("working")
    event.preventDefault()
if(password!==confirmPassword){
    alert("not matched password")
}

try{
    const {user}=await createAuthUserWithEmailAndPassword(email,password)
  
   await createUserFromAuth(user,{displayName})

    resetformfields()
    
}
catch(error){
    if(error.code==="auth/email-already-in-use"){
        alert("cannot create user already exist")
    }else{
    console.log('error ',error)}
}
  }

  const handleChange=(event)=>{
    const{name,value}=event.target

setformfiels({...formfields,[name]:value})




  }
return(

<div className="sign-up-container">
<h2>Dont Have Account Sign up Now!!</h2>
    <span>Sign Up With Your Email and Password</span>
    <form onSubmit={handleSubmit} >
    
    
    <FormInput label="displayName" type="text" required  name="displayName" value={displayName} onChange={handleChange}/>

  
    <FormInput label="Email" type="email" required onChange={handleChange} value={email} name="email"/>
   
    <FormInput label="Password" type="password" required onChange={handleChange} value={password} name="password" />
    
    <FormInput label="Confirm Password" type="password" required  onChange={handleChange} value={confirmPassword} name="confirmPassword"/>
    <Button  type="button">SignUp</Button>
    
    
    
    </form>
</div>


)






}
export default SignUpForm