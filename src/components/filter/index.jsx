import PropTypes from 'prop-types';  /* Using a prop to be able to reuse the filter components in other components/pages of the website */
import "./styles.css"
import {KeyboardArrowDown, Tune} from '@material-ui/icons'; /* Importing some icons from Google */

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta> /* Used to add breakpoints to website for responsive design */

export const Filter = (props) => {

    const{itemNumber} = props; /* Declaring props */

    /* Making the Filter component from different buttons */

    return (
            <div className="filterButtons">
                <ul className="filter-buttons">
                    <li>
                        <button className="Sort">
                            Sort
                            <KeyboardArrowDown></KeyboardArrowDown>
                        </button>
                    </li>
                    <li>
                        <button className="Size">
                            Size
                            <KeyboardArrowDown></KeyboardArrowDown>
                        </button>
                    </li>
                    <li>
                        <button className="Color">
                            Color
                            <KeyboardArrowDown></KeyboardArrowDown>
                        </button>
                    </li>
                    <li>
                        <button className="Price">
                            Price
                            <KeyboardArrowDown></KeyboardArrowDown>
                        </button>
                    </li>
                    <li>
                        <button className="availableOnline">
                            Available Online
                            <KeyboardArrowDown></KeyboardArrowDown>
                        </button>
                    </li>
                    <li>
                        <button className="newProducts">
                            New Products
                        </button>
                    </li>
                    <li>
                        <button className="customerRatings">
                            Customer Ratings
                            <KeyboardArrowDown></KeyboardArrowDown>
                        </button>
                    </li>
                    <li>
                        <button className="allFilters">
                            All filters
                            <Tune></Tune>
                        </button>
                    </li>
                    <ul className="roomFilterButtons">
                        <li className="itemNumber">
                            <p className="itemNumber">{itemNumber}</p>
                        </li>
                        <li>
                            <button className="productB">
                                Product
                            </button>
                        </li>
                        <li>
                            <button className="roomB">
                                Room
                            </button>
                        </li>
                    </ul>
                </ul>
                <hr className="buttonDivider"></hr>
            </div>

    );
}

/* Filter component takes a parameter for the following: number of items on the page because it is the only thing that varies in this component*/

Filter.propTypes = {
    itemNumber: PropTypes.string.isRequired,
}



