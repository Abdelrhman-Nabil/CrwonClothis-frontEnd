// redux
import { useSelector,useDispatch } from 'react-redux';
import{ selectCartItem} from '../../store/cart/cart.selector'
import{addItemsToCart} from '../../store/cart/cart.action'
import './product-card.scss'
import Button from '../button/button'
// import { useContext } from 'react';
const ProductCard=({product})=>{
  const {imageUrl,name,price}=product;
  const disPatch=useDispatch();
 const cartItems=useSelector(selectCartItem);

  const addProductToCart=()=>disPatch(addItemsToCart(cartItems,product))

  return(
    <div className='product-card-container'>
        <img  src={imageUrl} alt={name}/>
        <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
        </div>
        <Button  buttonType='inverted' onClick={addProductToCart}>Add To Card</Button>
    </div>
  )

}

export default ProductCard