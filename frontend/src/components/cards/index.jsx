import "./style.css"
import { Link } from 'react-router-dom';
const Cards = ({products}) => {
    return(
        <div className="container-cards">
            {products.map((prod) => (
                <div className="container-card" key={prod.id}>
                    <div className="container-foto">
                    <img className="foto" src={prod.image} alt={prod.image} />
                    </div>
                    <h2 id="title">{prod.name}</h2>
                    <p id="tag">{prod.tag}</p>
                    <p id="price">${prod.price}</p>
                    <Link to={`/${prod.id}`}>
                    <label id="label-cart"><button id="cart">+</button>Details</label>
                    </Link>
                </div>
            ))}
        </div>



    )
}
export default Cards;