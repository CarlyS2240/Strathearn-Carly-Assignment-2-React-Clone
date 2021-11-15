import PropTypes from 'prop-types';
import "./styles.css"

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

export const Button = (props) => {

    const{text, name, disabled} = props;

    return (
            <button disabled="disabled" className={name}>{text}</button>
    );
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    disabled: PropTypes.string.isRequired,
}
