/* Importing so we can create dynamic routes in the website*/

import {
    NavLink
} from 'react-router-dom';

import "./styles.css"

import {LocationOn, LocalShipping, PersonOutline, FavoriteBorder, ShoppingCart, Menu, Search, PhotoCameraOutlined} from '@material-ui/icons'; /* Importing some icons from Google */

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta> /* Used to add breakpoints to website for responsive design */

/* Making the Navbar (navigation bar) component from text, icons, and a search bar (HTML input field) */

export const Navbar = () => {
    return (
        <nav ClassName="navbar">
            <ul className="navbar-list">
                <li>
                    <button className="hamMenu-button">
                        <Menu></Menu>
                    </button>
                </li>
                <img className="logo" src="images/ikeaLogo.svg" alt="Ikea logo"/>
                <div className="linksContainer">
                    <li>
                        <button className="Products">
                            Products
                        </button>
                    </li>
                    <li>
                        <button className="Rooms">
                            Rooms
                        </button>
                    </li>
                    <li>
                        <button button className="Offers">
                            Offers
                        </button>
                    </li>
                </div>
                <div className="searchContainer">
                    <form action="/" method="get" className="searchBar">
                        <label htmlFor="headersearch">
                        </label>
                        <Search className="searchIcon"></Search>
                        <input className="searchInput"
                            type="text"
                            id="headersearch"
                            placeholder="What are you looking for?"
                        />
                        <PhotoCameraOutlined className="cameraIcon"></PhotoCameraOutlined>
                    </form>
                </div>

                <div>

                </div>
                <li>
                    <NavLink exact={true} activeClassName="nav-selected" to="/">
                    
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="nav-selected" to="/secondpage">
                    
                    </NavLink>
                </li>
                <li className="buttonList">
                    <button className="location">
                        <LocationOn></LocationOn>
                    </button>
         
                    <button className="shipping">
                        <LocalShipping></LocalShipping>
                    </button>
              
                    <button className="account">
                        <PersonOutline></PersonOutline>
                    </button>
         
                    <button className="favourite">
                        <FavoriteBorder></FavoriteBorder>
                    </button>

                    <button className="cart">
                        <ShoppingCart></ShoppingCart>
                    </button>
                </li>
            </ul>
            <hr className="divider"></hr>
        </nav>
    );
}