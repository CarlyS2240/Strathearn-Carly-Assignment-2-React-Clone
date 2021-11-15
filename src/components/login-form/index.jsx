import "./styles.css"

import {Visibility} from '@material-ui/icons';
import { Button } from '../button/index';
import { SignUp } from '../sign-up/index';

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

export const LoginForm = () => {

    return (
            <form className="loginFormContainer">
                <label className="emailForm">
                    <input className="emailInput" name="submitted-email" autocomplete="email" placeholder="Email Address or verified mobile phone number"></input>
                    <hr className="inputDivider"></hr>
                    <p>Alternative login: <span className="alternativeLogin">Alternative login with a one-time code</span></p>
                </label>
                <label className="passwordForm">
                    <div className="passwordField">
                        <input className="passwordInput" name="submitted-password" autocomplete="password" placeholder="Password"></input>
                        <Visibility></Visibility>
                    </div>
                    <hr className="inputDivider"></hr>
                    <p>Forgot your password?</p>
                </label>
                <Button
                text="Continue"
                name="buttonComponent"
                disabled="false"></Button>
                <SignUp></SignUp>
        </form>
   
    );
}
