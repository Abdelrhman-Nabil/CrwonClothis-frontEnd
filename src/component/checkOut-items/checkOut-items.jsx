import { useDispatch ,useSelector } from 'react-redux';
import {addItemsToCart,removeItemFromCart,clearItemFromCart} from '../../store/cart/cart.action'
import{selectCartItem} from '../../store/cart/cart.selector'


import './checkOut-items.scss'
const CheckoutItem = ({ cartItem }) => {
 const dispatch=useDispatch();
 const cartItems = useSelector(selectCartItem)


    const{name,imageUrl,price,quantity}=cartItem
const addItemToHandler=()=>dispatch(addItemsToCart(cartItems,cartItem))
const removeItemToHandler=()=>dispatch(removeItemFromCart(cartItems,cartItem));
const clearItemToHandler=()=>dispatch(clearItemFromCart(cartItems,cartItem));
return(
    <div className='checkout-item-container'>
     <div className='image-container'>
        <img src={imageUrl} alt={name} />
     </div>
     <span className='name'>{name}</span>
        <span className='quantity'>
            <div className='arrow' onClick={removeItemToHandler}>&#10094;</div>
            <span className='value'>{quantity}</span>
            <div className='arrow' onClick={addItemToHandler}>&#10095;</div>
        </span>
     <span className='price'>{price}</span>
     <span className='remove-button' onClick={clearItemToHandler}>&#10005;</span>
    </div>
)

}
export default CheckoutItem