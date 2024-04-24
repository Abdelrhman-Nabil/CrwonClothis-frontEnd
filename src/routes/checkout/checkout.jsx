import { useSelector } from 'react-redux';
import{selectCartTotal,selectCartItem} from '../../store/cart/cart.selector'
import CheckoutItem from '../../component/checkOut-items/checkOut-items';
import PayButton from '../../component/payment-method/payment-button/payment-button';
import './checkout.scss';
const CheckOut = () => {
    const cartItems=useSelector(selectCartItem);
    const cartTotal=useSelector(selectCartTotal);
    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'><span>Product</span></div>
                <div className='header-block'><span>Description</span></div>
                <div className='header-block'><span>Quantity</span></div>
                <div className='header-block'><span>Price</span></div>
                <div className='header-block'><span>Remove</span></div>
            </div>
            
                {cartItems.map((cartItem) => {
                    return (
                        <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
                })}
           <span className='total'>Total :${cartTotal}</span>
          <PayButton cartItems={cartItems}/>
           </div>
    )
}
export default CheckOut