


import SignUpForm from "../Components/Sign-up-form/sign-up-form.component.jsx"

import{signInWithGooglePopup,createUserFromAuth,signInWithGoogleRedirect} from "../../src/Utils/firebase/firebase.utils.js"


const SignIn= ()=>{

const logGoogleUser=async()=>{
  const {user}=  await signInWithGooglePopup()
  const userDocRef= await createUserFromAuth(user)
    console.log(userDocRef)
}
// const logGoogleRedirectUser=async()=>{
//   const {user}=  await signInWithGoogleRedirect()
  
//     console.log({user})
// }


return(
<div>
    

  
    <button onClick={logGoogleUser} type="">click</button>
    <SignUpForm/>
   
    </div>
)


}
export default SignIn