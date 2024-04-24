import SignUp from '../../component/sign-up/signUP';
import SignIn from '../../component/sign-in/signIN';
import './authentication.scss'
const Authentication=()=>{  

   
    return(
        <div className='authentication-container'>
            <SignIn/>
            <SignUp/>
        </div>
    )
}

export default Authentication