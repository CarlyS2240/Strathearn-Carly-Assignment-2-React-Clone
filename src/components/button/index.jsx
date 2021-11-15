import PropTypes from 'prop-types'; /* Using props to be able to reuse this button in other components of the website */
import "./styles.css"

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta> /* Used to add breakpoints to website for responsive design */

export const Button = (props) => {

    const{text, name, disabled} = props; /* Declaring props */

    return (
            <button disabled={disabled} className={name}>{text}</button> /* Making a button */
    );
}

/* Button component takes a parameter for the following: text displayed on the button, the class name, and whether the button is disabled or not */

Button.propTypes = {
    text: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    disabled: PropTypes.string.isRequired,
}
