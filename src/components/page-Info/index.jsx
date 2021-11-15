import PropTypes from 'prop-types'; /* Using props to be able to reuse this page information component in other components of the website. For example, all product pages would feature this component. */

import "./styles.css"

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta> /* Used to add breakpoints to website for responsive design */

export const PageInfo = (props) => { 

    const {pBreadCrumbs, pTitle, pSubtitle, pDescription} = props; /* Declaring props */

    /* Making the PageInfo (page information) component from text. This component would be used on all product pages, props make it easy to change
       the page information*/

    return (
        <div className="pageInfo">
                <p className="breadCrumbs">{pBreadCrumbs}</p>
                <h1 className="pageTitle">{pTitle}</h1>
                <h2 className="pageSubTitle">{pSubtitle}</h2>
                <h3 className="pageDescription">{pDescription}</h3>
        </div>
    );
}

/* PageInfo component takes a parameter for the following: breadcrumb trail, title of page, subtitle of page, description of page. */

PageInfo.propTypes = {
    pBreadCrumbs: PropTypes.string.isRequired,
    pTitle: PropTypes.string.isRequired,
    pSubtitle: PropTypes.string.isRequired,
    pDescription: PropTypes.string.isRequired,
}