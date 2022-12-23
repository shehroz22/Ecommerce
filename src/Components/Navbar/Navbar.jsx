
import { Fragment ,useContext} from "react"
import {Outlet,Link} from "react-router-dom"
import { ReactComponent as Crownlogo } from "../../assets/crown.svg"
import "./navigation.styles.scss"


import {signoutUser} from "../../Utils/firebase/firebase.utils.js"

import CartIcon from "../cart-icon/cart-icon.component"
import { UserContext } from "../../context /user.context"
import CartDropdown from "../cart-dropdown/cart-dropdown.component"
import { CartContext } from "../../context /cart.context"



const Navigation=()=>{

 

  const{currentUser}=useContext(UserContext)
  const{IsCartOpen}=useContext(CartContext)
  
  console.log(currentUser,"work")

  
    return(

      
      <Fragment>
        <div className="navigation ">
  <Link className="logo-container" to="/">

    <Crownlogo/>
  </Link>
  <div className="nav-links-container ">

  <Link className="nav-link" to="/Shop">Shop</Link>

  {currentUser?(<span className="nav-link" onClick={signoutUser}>SignOut</span>):(  <Link className="nav-link" to="/auth">SignIn</Link>)}

  <CartIcon/>

  </div>
  {IsCartOpen&&<CartDropdown/>}
        </div>
        <Outlet/>
    </Fragment>
    )
  }
  export default Navigation