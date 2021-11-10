import "./styles.css"

export const ProductCard = (props) => {
    return (
        <div className="productCard">
            <div className="cardBody">
                <input type="checkbox" id="compare" name="compare" value="compare" className="checkBox"></input>
                <label for="checkbox" className="checkboxLabel">Compare</label>
                <img className="plantImage" src={props.img}/>
                <h1 className="cardTitle">{props.title}</h1>
                <h2 className="cardDescription">{props.description}</h2>
                <h3 className="cardPrice">{props.price}</h3>
            </div>
        </div>


    );
}