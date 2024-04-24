import { createSelector } from "reselect"
export const selectCartReducer=state=>state.cart;    //input

export const selectCartItem=createSelector(
    [selectCartReducer],
    (cart)=>cart.cartItems
)
export const selectIsCartOpen=createSelector(
    [selectCartReducer],
    (cart)=>cart.IsCartOpen
)

export const selectCartCount=createSelector(
    [selectCartItem],
   (cartItems)=>cartItems.reduce((total,cartItem)=> total + cartItem.quantity,0)

)
export const selectCartTotal=createSelector(
    [selectCartItem],
        (cartItems)=>cartItems.reduce((total,cartItem)=>total +cartItem.quantity * cartItem.price ,0)

)

