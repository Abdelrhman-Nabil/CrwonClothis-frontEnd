import { useState } from "react"
import { createAuthUserWithEmailAndPassword,createUserDocumentFromAuth} from "../../utils/fireBase/fireBase.utils";
import FormInput from "../form.component/from.component";
import Button from "../button/button";
import './signUp.scss'
const defaultFormFilds = { DisplayName: '', Email: '', Password: '', ConfirmPassword: '' }

const SignUp = () => {
    const [formFilds, setFormFilds] = useState(defaultFormFilds);
    const { DisplayName, Email, Password, ConfirmPassword } = formFilds;
    // console.log(formFilds)


    const resetFormFild = () => {
        setFormFilds(defaultFormFilds)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (Password !== ConfirmPassword) {
            alert("passwords don't match")
        }
        try {
            const { user } = await createAuthUserWithEmailAndPassword(Email, Password);
            await  createUserDocumentFromAuth (user, { DisplayName });

           
            resetFormFild();
        }
        catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert("can't create user ,Email in used")
            } else {
                console.log("the error is :", error)
            }

        }
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFilds({ ...formFilds, [name]: value })
    }

    return (
        <div className="sign-up-container">
            <h2>Don't Have an Account </h2>
            <span>Sign up with email And Password</span>
            <form onSubmit={handleSubmit}>

                <FormInput
                    label="Display Name"
                    required type="text"
                    onChange={handleChange}
                    name="DisplayName"
                    value={DisplayName}
                />

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

                <FormInput
                    label="ConfirmPassword"
                    required type="password"
                    onChange={handleChange}
                    name="ConfirmPassword"
                    value={ConfirmPassword}
                />
        <Button  type="submit">Sign up</Button>
    </form>
    </div>
    )
}
export default SignUp
// onChange={handleChange}