import "./styles.css";

/* importing components to display within the login page */

import { LoginInstructions } from '../../login-instructions/index';
import { LoginForm } from '../../login-form/index';
import { ArrowBack } from "@material-ui/icons";

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta> /* Used to add breakpoints to website for responsive design */

/* Making the LoginPage component from the LoginInstructions component and the LoginForm Component*/

export const LoginPage = () => {
    return (
        <>
        <div class="loginPageContainer">
            <div className="row1">
                <LoginInstructions></LoginInstructions>
            </div>
            <div className="row2">
                <LoginForm></LoginForm>
            </div>
        </div>
        </>
    )
}