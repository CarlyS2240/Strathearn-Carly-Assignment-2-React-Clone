/* OUTDATED COMPONENT */

import PropTypes from 'prop-types';  /* Using props to be able to reuse this header component in other components of the website */

import "./styles.css"

import {Language, Crop54, Edit} from '@material-ui/icons'; /* Importing some icons from Google */

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>  /* Used to add breakpoints to website for responsive design */

export const Header = (props) => {

    const {firstMessage, secondMessage, thirdMessage} = props; /* Declaring props */

    /* Making the Header component from text and icons */

    return (
            <ul className="header-list">
                <li className="Language">
                    <Language className="languageIcon"></Language>
                    {firstMessage}
                </li>
                <li className="Join">
                    <Crop54 className="cropIcon"></Crop54>
                    {secondMessage}
                </li>
                <li className="Planning">
                    <Edit className="editIcon"></Edit>
                    {thirdMessage}
                </li>
            </ul>
    );
}

/* Header component takes a parameter for the following: the first message, second message, and third message displayed in the component*/

Header.propTypes = {
    firstMessage: PropTypes.string.isRequired,
    secondMessage: PropTypes.string.isRequired,
    thirdMessage: PropTypes.string.isRequired,
}