
import{signInWithGooglePopup,createUserFromAuth} from "../../src/Utils/firebase/firebase.utils.js"


const SignIn=()=>{

const logGoogleUser=async()=>{
  const {user}=  await signInWithGooglePopup()
  const userDocRef= await createUserFromAuth(user)
    console.log(userDocRef)
}

return(
<div>
    

    <h1>hi how are you</h1>
    <button onClick={logGoogleUser} type="">click</button>
    </div>
)


}
export default SignIn