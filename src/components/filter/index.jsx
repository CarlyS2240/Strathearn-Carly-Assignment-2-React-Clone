import "./styles.css"
import {KeyboardArrowDown, Tune} from '@material-ui/icons';

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

export const Filter = () => {

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
                            <p>8 items</p>
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
            </div>

    );
}



