import './cart-icon.style.scss'

import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag (2).svg"
import { useContext } from 'react';
import { CartContext } from '../../context /cart.context';
const CartIcon=()=>{
    const {IsCartOpen,setIsCartOpen}=useContext(CartContext)
    const toggleCartOpen=()=>setIsCartOpen(!IsCartOpen)
    return (
        <div className='cart-icon-container' onClick={toggleCartOpen}>
          <ShoppingIcon className='shopping-icon' />
          <span className='item-count '>0</span>
        </div>
      );
}
export default CartIcon