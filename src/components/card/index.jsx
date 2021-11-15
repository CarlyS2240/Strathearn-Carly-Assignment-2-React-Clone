import PropTypes from 'prop-types';  /* Using props to be able to reuse this poduct card component in other components of the website */
import "./styles.css"

import {AddShoppingCartOutlined} from '@material-ui/icons'; /* Importing some icons from Google */

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta> /* Used to add breakpoints to website for responsive design */

export const ProductCard = (props) => {

    const{newProduct, topSeller, img, title, description, price} = props; /* Declaring props */

    /* Making the product card component */

    return (
            <div className="productCard"> 
                <div className="cardBody">
                    <input type="checkbox" id="compare" name="compare" value="compare" className="checkBox"></input>
                    <label for="checkbox" className="checkboxLabel">Compare</label>
                    <div className="topSellerTag" style={{ display: topSeller }}>Top Seller</div>
                    <img className="plantImage" src={img}/>
                    <p className="newTag" style={{ visibility: newProduct }}>New</p>
                    <h1 className="cardTitle">{title}</h1>
                    <h2 className="cardDescription">{description}</h2>
                    <h3 className="cardPrice">{price}</h3>
                    <button type="button" className="addCart"><AddShoppingCartOutlined></AddShoppingCartOutlined></button>
                    <hr className="productCardDivider"></hr>
                </div>
            </div>

    );
}

/* ProductCard component takes a parameter for the following: text if the product is new, text for if the product is a top seller, product image
   product title, product description, product price*/

ProductCard.propTypes = {
    newProduct: PropTypes.string,
    topSeller: PropTypes.string,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
}
