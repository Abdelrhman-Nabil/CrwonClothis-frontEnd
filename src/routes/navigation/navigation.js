import { Fragment } from "react"
import { Outlet } from "react-router-dom"
import { ReactComponent as Crowlogo } from "../../assets/crown.svg"
import CartIcon from "../../component/cart-icon/cart-icon.jsx";
import CartDropDown from "../../component/cart-dropdown/cart-dropdown";
import {NavigationContainer,LogoContiners,NavLink,NavLinks} from  './navigation.styles.js';
import {signOutUser} from  '../../utils/fireBase/fireBase.utils'
// redux
import { useSelector } from "react-redux/es/hooks/useSelector.js";
import {selectCurrnetUser} from '../../store/users/user.selector.js'
import {selectIsCartOpen} from '../../store/cart/cart.selector.js'
const Navigation = () => {
     const currentUser=useSelector(selectCurrnetUser);
    const IsCartOpen=useSelector(selectIsCartOpen)
    return (
        <Fragment>
            <NavigationContainer>
                <LogoContiners to='/'>
                < Crowlogo className="logo"/>
                </LogoContiners>
               <NavLinks>
               <NavLink to='/Shop'>Shop</NavLink>

            {
                currentUser ? 
                (<NavLink onClick={signOutUser}>sign out</NavLink>)
                :(<NavLink to='auth'>Sign In</NavLink>)
            }
                    <CartIcon />
                </NavLinks>
                { IsCartOpen && <CartDropDown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}
export default Navigation