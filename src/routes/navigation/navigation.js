import { Fragment } from "react"
import { Link, Outlet } from "react-router-dom"
import { ReactComponent as Crowlogo } from "../../assets/crown.svg"
import CartIcon from "../../component/cart-icon/cart-icon.jsx";
import CartDropDown from "../../component/cart-dropdown/cart-dropdown";
import {signOutUser} from  '../../utils/fireBase/fireBase.utils'
// redux
import { useSelector } from "react-redux/es/hooks/useSelector.js";
import {selectCurrnetUser} from '../../store/users/user.selector.js'
import {selectIsCartOpen} from '../../store/cart/cart.selector.js'
import './navigation.styles.css'
const Navigation = () => {
     const currentUser=useSelector(selectCurrnetUser);
    const IsCartOpen=useSelector(selectIsCartOpen)
    return (
        <Fragment>
            <div className="NavigationContainer">
                <Link to='/'>
                < Crowlogo className="logo"/>
                </Link>
               <div className="NavLinks">
               <Link to='/Shop'>Shop</Link>

            {
                currentUser ? 
                (<Link onClick={signOutUser}>sign out</Link>)
                :(<Link to='auth'>Sign In</Link>)
            }
                    <CartIcon />
                </div>
                { IsCartOpen && <CartDropDown />}
            </div>
            <Outlet />
        </Fragment>
    )
}
export default Navigation