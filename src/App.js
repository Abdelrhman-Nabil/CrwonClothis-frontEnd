import { Routes ,Route } from "react-router-dom"
import Home from "./routes/home/home.component"
import Navigation from "./routes/navigation/navigation"
import Authentication from "./routes/authentication/authentication"
import Shop from "./routes/shop/shop.component"
import CheckOut from "./routes/checkout/checkout"

// redux
import { onAuthStateChangedListener,createUserDocumentFromAuth } from "./utils/fireBase/fireBase.utils";
import {setCurrentUser} from './store/users/user.action';
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import CheckOutSuccess from "./component/payment-method/checkOut-seccess/checkoutSucess"
const App=()=>{
  const dispatch=useDispatch();
  useEffect(()=>{
    const unsubscibe=onAuthStateChangedListener((user)=>{
    if(user){
      createUserDocumentFromAuth(user);

    }
    dispatch(setCurrentUser(user));
    })

  return unsubscibe;
 },[dispatch])
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<CheckOut />} />
        <Route path="checkOut-success" element={<CheckOutSuccess/>}/>


      </Route>
    </Routes>


)}

export default App

















