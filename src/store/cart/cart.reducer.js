import {cart_Action} from './cart.type'
const INITIAL_VALUE={
    IsCartOpen: false,
    cartItems: [],
    
}

export const CartReducer=(state=INITIAL_VALUE,action={})=>{
    const {type,payload}=action;
    switch(type){
        case cart_Action.set_cart_item:
            return{
                ...state,
                cartItems:payload
            }
            case cart_Action.set_Cart_open:
                return{
                    ...state,
                    IsCartOpen:payload
                }
        default:
        return state;
    }
}