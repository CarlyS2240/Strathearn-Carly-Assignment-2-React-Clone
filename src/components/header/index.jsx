import "./styles.css"

import {Language, Crop54, Edit} from '@material-ui/icons';

export const Header = () => {
    return (
            <ul className="header-list">
                <li className="Language">
                    <Language className="languageIcon"></Language>
                    We're experiencing supply issues
                </li>
                <li className="Join">
                    <Crop54 className="cropIcon"></Crop54>
                    Join IKEA family for free | Get member-only discounts, benefits and more
                </li>
                <li className="Planning">
                    <Edit className="editIcon"></Edit>
                    Personalized planning services
                </li>
            </ul>
    );
}