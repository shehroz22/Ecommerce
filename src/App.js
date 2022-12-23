
// import './App.css';

import Home  from "./Components/Routes/home.component.jsx";

import {Routes,Route} from "react-router-dom"
import Navigation from "./Components/Navbar/Navbar.jsx";
import Authentication from "./Components/Authentication/Authentication.component.jsx";

import Shop from "./Components/Routes/shop/shop.component.jsx";




const App=()=> {
  
  


  return (
<Routes>
<Route path="/"  element={<Navigation/>}>
<Route index  element={<Home/>}/>
<Route path="Shop"  element={<Shop/>}/>
<Route path="auth"  element={<Authentication/>}/>




</Route>




 </Routes>

)}
    

export default  App;

