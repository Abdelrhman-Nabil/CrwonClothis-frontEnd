import { combineReducers } from "redux";
import {userReduser} from './users/userReduser'
import { categoriesReducer } from './categories/categories.reduser';
import {CartReducer} from './cart/cart.reducer'
export const rootReduser=combineReducers({
    user:userReduser,
    categories: categoriesReducer,
    cart:CartReducer
})