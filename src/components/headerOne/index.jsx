import PropTypes from 'prop-types';

import "./styles.css"

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

export const HeaderOne = (props) => {

    const {Icon, Message} = props; 

    return (
            <ul className="headerList">
                <li className="headerItems">
                    {Icon}
                    {Message}
                </li>
            </ul>
    );
}

HeaderOne.propTypes = {
   Icon: PropTypes.element,
   Message: PropTypes.string.isRequired,
}