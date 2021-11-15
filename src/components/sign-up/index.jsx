import "./styles.css"

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta> /* Used to add breakpoints to website for responsive design */

/* Making the SignUp component from text and buttons*/

export const SignUp = () => {

    return (
        <div className="signUpContainer">
            <p className="pAccount">Don't have an IKEA account yet? Create one now:</p>
            <div>
                <button className="forHomeButton">I'm buying for my home</button>
            </div>
            <div>
            <button className="forWorkButton">I'm buying for my business</button>
            </div>
        </div>
    );
}

