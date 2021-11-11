import PropTypes from 'prop-types';
import "./styles.css"

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

export const PageInfo = (props) => {

    const {pBreadCrumbs, pTitle, pSubtitle, pDescription} = props;

    return (
        <div className="pageInfo">
                <p className="breadCrumbs">{pBreadCrumbs}</p>
                <h1 className="pageTitle">{pTitle}</h1>
                <h2 className="pageSubTitle">{pSubtitle}</h2>
                <h3 className="pageDescription">{pDescription}</h3>
        </div>
    );
}

PageInfo.propTypes = {
    pBreadCrumbs: PropTypes.string.isRequired,
    pTitle: PropTypes.string.isRequired,
    pSubtitle: PropTypes.string.isRequired,
    pDescription: PropTypes.string.isRequired,
}