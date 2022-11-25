
// import './App.css';

import Home  from "./Components/Routes/home.component.jsx";

import {Routes,Route} from "react-router-dom"
import Navigation from "./Components/Navbar/Navbar.jsx";
import SignIn from "./Sign-in/sign-in.component.jsx";


const Shop=()=>{
  return(
  <h1>hiasidha</h1>
  )
}




const App=()=> {
  
  


  return (
<Routes>
<Route path="/"  element={<Navigation/>}>
<Route index  element={<Home/>}/>
<Route path="Shop"  element={<Shop/>}/>
<Route path="SignIn"  element={<SignIn/>}/>




</Route>




 </Routes>

)}
    

export default  App;

