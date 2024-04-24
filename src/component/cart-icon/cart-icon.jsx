// redux
import { useSelector ,useDispatch} from 'react-redux';
import {selectIsCartOpen ,selectCartCount} from '../../store/cart/cart.selector'
import {setIsCartOpen} from '../../store/cart/cart.action'

import {ShoppingIcon,CartIconContainer,ItemCount} from './cart-icon'

const CartIcon=()=>{
    const dispatch=useDispatch();
    const cartCount=useSelector(selectCartCount)
    const IsCartOpen=useSelector(selectIsCartOpen)
    const ToggleIsCartOpen=()=>dispatch(setIsCartOpen(!IsCartOpen));
return(
    <CartIconContainer onClick={ToggleIsCartOpen}>
        <ShoppingIcon/>
        <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
)
}
export default CartIcon;