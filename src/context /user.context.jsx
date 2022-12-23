import {  createContext, useState ,useEffect} from "react";
import { onAuthStateChangedListener ,createUserDocumentFromAuth} from "../Utils/firebase/firebase.utils";
export const UserContext=createContext({

})


export const UserProvider=({children})=>{

    const[currentUser,setCurrentUser]=useState(null)
const value={currentUser,setCurrentUser}


useEffect(()=>{ const unsubsribe=onAuthStateChangedListener((user)=>{

    if(user){
        createUserDocumentFromAuth(user)
    }
console.log(user)
setCurrentUser(user)
}) 

return unsubsribe
},[])

return(

    <UserContext.Provider value={value}>{children}</UserContext.Provider>
)

}