import PropTypes from 'prop-types';
import "./styles.css"

export const ProductCard = (props) => {

    const{img, title, description, price} = props;

    return (
            <div className="productCard">
                <div className="cardBody">
                    <input type="checkbox" id="compare" name="compare" value="compare" className="checkBox"></input>
                    <label for="checkbox" className="checkboxLabel">Compare</label>
                    <img className="plantImage" src={img}/>
                    <h1 className="cardTitle">{title}</h1>
                    <h2 className="cardDescription">{description}</h2>
                    <h3 className="cardPrice">{price}</h3>
                    <hr className="productCardDivider"></hr>
                </div>
            </div>

    );
}

ProductCard.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
}
