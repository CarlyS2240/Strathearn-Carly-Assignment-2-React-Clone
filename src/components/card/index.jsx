import PropTypes from 'prop-types';
import "./styles.css"

import {AddShoppingCartOutlined} from '@material-ui/icons';

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

export const ProductCard = (props) => {

    const{newProduct, topSeller, img, title, description, price} = props;

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

ProductCard.propTypes = {
    newProduct: PropTypes.string,
    topSeller: PropTypes.string,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
}
