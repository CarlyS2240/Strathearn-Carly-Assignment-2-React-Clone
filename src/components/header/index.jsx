import PropTypes from 'prop-types';

import "./styles.css"

import {Language, Crop54, Edit} from '@material-ui/icons';

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

export const Header = (props) => {

    const {firstMessage, secondMessage, thirdMessage} = props; 

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

Header.propTypes = {
    firstMessage: PropTypes.string.isRequired,
    secondMessage: PropTypes.string.isRequired,
    thirdMessage: PropTypes.string.isRequired,
}