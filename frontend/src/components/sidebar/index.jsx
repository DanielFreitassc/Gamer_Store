import { Link } from 'react-router-dom';
import "./style.css"
const SideBar = () => {
    return(
        <div id="container-side">
            <div id="container-buttons">
            <button className="button-side">Profile</button>
            <button className="button-side">Search</button>
            <button className="button-side">Favorite</button>
            <button className="button-side">Balance</button>
            <Link to="/cadastro">
                <button className="button-side">Register</button>
            </Link>
            </div>
        </div>
    )
}
export default SideBar;