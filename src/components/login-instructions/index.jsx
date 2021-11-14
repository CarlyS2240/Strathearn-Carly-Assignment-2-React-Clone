import "./styles.css"
import {ArrowBack} from '@material-ui/icons';

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

export const LoginInstructions = () => {

    return (
        <div className="loginInstructionsContainer">
                <ArrowBack className="arrowIcon"></ArrowBack>
                <div className className="loginInstructions">
                    <img className="logoWhite" src="https://ca.accounts.ikea.com/resources/static/logo.svg" alt="Ikea logo"/>
                    <h1><span class="loginYellow">Login</span> to your IKEA account.</h1>
                    <p className="pInstructions">Too many passwords? <br/>You can now login with a one-time only code we will send to your email address, or verified mobile number saved on your IKEA account.</p>
                    <p className="pAccess">Access your IKEA account using your email address to add and verify your mobile number.</p>
                    <p className="pCopyright">IKEA.ca - Cookie Policy and Privacy Policy© Inter IKEA Systems B.V. 1999-2021</p>
                </div>
        </div>
    );
}

