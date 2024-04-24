import { Fragment,} from "react"
import axios from "axios"
import Button from "../../button/button"
const PayButton=({cartItems})=>{
    const handlerCheckOut=async()=>{
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/Stripe/create-checkout-session`,{
            cartItems,
      }).then((res)=>{
        if(res.data.url){
            window.location.href=res.data.url
        }
      }).catch((err)=>{
        alert(err.message)
      })
    }
   return(
    <Fragment>
        <Button onClick={handlerCheckOut}>PAY</Button>
    </Fragment>
   )
}
export default PayButton















