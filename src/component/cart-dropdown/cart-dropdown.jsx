// redux
import {useSelector } from 'react-redux';
import {selectCartItem} from '../../store/cart/cart.selector'

import { useNavigate } from 'react-router-dom';
import CartItem from '../cart-item/cart-item';
import Button from '../button/button';
import { CartDropdownContainer,EmptyMessage,CartItems } from './cart-dropdown.style';
const CartDropDown=()=>{
    const cartItems=useSelector(selectCartItem)

    const navigation=useNavigate();

    const goToCheckOutHandler=()=>{
      navigation('/checkout')
    }
return(
    <CartDropdownContainer>
     <CartItems>
     {
 cartItems.length ?
(cartItems.map(item => <CartItem key={item.id} cartItem={item} />))
:
(<EmptyMessage>Your cart is empty</EmptyMessage>)}
     </CartItems>
     <Button onClick={goToCheckOutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
)
}
export default CartDropDown;