import { useState } from "react"
import './signIN.scss'
import {signInWithGooglePopup, createUserDocumentFromAuth
     ,SignInAuthUserWithEmailAndPassword} 
     from "../../utils/fireBase/fireBase.utils";
import FormInput from "../form.component/from.component";
import Button from "../button/button";
const defaultFormFilds = { Email: '', Password: '' }
const SignIn = () => {
    const [formFilds, setFormFilds] = useState(defaultFormFilds);
    const { Email, Password } = formFilds;
        

    const resetFormFild = () => {
        setFormFilds(defaultFormFilds)
    }
 
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const {user}=await SignInAuthUserWithEmailAndPassword(Email,Password);
            resetFormFild();
        }
        catch (error) {
          if(error.code='auth/invalid-login-credentials'){
            alert("Password or Email dons't correct ")
            console.log(error)
          }
        }
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFilds({ ...formFilds, [name]: value })
    }
    const signInWithGoogle = async () => {
         await signInWithGooglePopup();
       
    }

    return (
        <div className="sign-in-container">
            <h2>Already Have an Account </h2>
            <span>Sign in with Email And Password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Email"
                    required
                    type="email"
                    onChange={handleChange}
                    name="Email"
                    value={Email}
                />

                <FormInput
                    label="Password"
                    required
                    type="password"
                    onChange={handleChange}
                    name="Password"
                    value={Password}
                />
                <div className="buttons-container">
    <Button  type="submit">Sign In</Button>
    <Button type="button" buttonType='google' onClick={signInWithGoogle}>Google sign in</Button>;

                </div>
            </form>

        </div>
    )
}
export default SignIn
// onChange={handleChange}