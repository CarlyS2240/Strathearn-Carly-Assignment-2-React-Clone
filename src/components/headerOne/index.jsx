/* New Header Component - Working */

import PropTypes from 'prop-types';  /* Using props to be able to reuse this header component in other components of the website */

import "./styles.css"

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>  /* Used to add breakpoints to website for responsive design */

export const HeaderOne = (props) => {

    const {Icon, Message} = props; /* Declaring props */

    /* Making the Header component from text and icons */

    return (
            <ul className="headerList">
                <li className="headerItems">
                    {Icon}
                    {Message}
                </li>
            </ul>
    );
}

/* Header component takes a parameter for the following: message, and icon. By structuring the component this way we can add or remove as
   many messages as we like. */

HeaderOne.propTypes = {
   Icon: PropTypes.element,
   Message: PropTypes.string.isRequired,
}