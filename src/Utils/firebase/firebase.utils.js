import {initializeApp} from 'firebase/app'
import {getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider} from "firebase/auth"
import{getFirestore,doc,getDoc,setDoc} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCOSaoyJPPyxomv6x1Ly0nPBwq_L_TvcSU",
    authDomain: "ecommerce-website-14525.firebaseapp.com",
    projectId: "ecommerce-website-14525",
    storageBucket: "ecommerce-website-14525.appspot.com",
    messagingSenderId: "774788496155",
    appId: "1:774788496155:web:b15baafd3deaa5f23631be"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const provider=new GoogleAuthProvider()
  provider.setCustomParameters({

prompt:"select_account"


  })
  export const auth=getAuth()
  export const signInWithGooglePopup=()=>signInWithPopup(auth,provider)
   export const db=getFirestore()
   export const createUserFromAuth=async(userAuth)=>{
const userDocRef=doc(db,"user",userAuth.uid)
console.log(userDocRef)

const userSnap=await getDoc(userDocRef)
console.log(userSnap.exists())

if(!userSnap.exists()){
    const{displayName,email}=userAuth
const createAt=new Date()

try{
    await setDoc(userDocRef,{displayName,
        email,
        createAt,
    })

}
catch(error){
    console.log("error is existing",error.message)
}

}


return userDocRef

   }