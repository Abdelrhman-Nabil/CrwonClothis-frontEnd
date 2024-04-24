import {cart_Action} from './cart.type'
import {ReduserAction} from '../../utils/reduser/reduser'


const addCardItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
    if (existingCartItem) {
    return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } :  cartItem )
        
    }
    return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const removeCartItem=(cartItems,productToRemove)=>{
 const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToRemove.id);

 if(existingCartItem.quantity===1){
    return cartItems.filter(cartItem=>cartItem.id !==productToRemove.id)
 }

 return cartItems.map((cartItem) => cartItem.id === productToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } :  cartItem )


}
const clearCartItem=(cartItems,productToClear)=>{
    return cartItems.filter(cartItem=>cartItem.id!==productToClear.id);
}


export const setIsCartOpen=(boolean)=>ReduserAction(cart_Action.set_Cart_open ,boolean)


export const addItemsToCart = (cartItems,productToAdd) => {
    const newCartItems=addCardItem(cartItems, productToAdd)
 return ReduserAction(cart_Action.set_cart_item,newCartItems)
}

export const removeItemFromCart = (cartItems,productToRemove) => {
    const newCartItems=removeCartItem(cartItems, productToRemove)
 return ReduserAction(cart_Action.set_cart_item,newCartItems)
}
export const clearItemFromCart= (cartItems,productToClear)=>{
    const newCartItems=clearCartItem(cartItems,productToClear)
 return ReduserAction(cart_Action.set_cart_item,newCartItems)
}