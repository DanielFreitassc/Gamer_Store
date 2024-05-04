import { Link } from 'react-router-dom';
import { CgProfile  } from "@react-icons/all-files/cg/CgProfile";
import { CgSearch } from "@react-icons/all-files/cg/CgSearch";
import { CgHeart } from "@react-icons/all-files/cg/CgHeart";
import { CgCreditCard } from "@react-icons/all-files/cg/CgCreditCard";
import { CgAdd } from "@react-icons/all-files/cg/CgAdd";
import "./style.css"
const SideBar = () => {
    return(
        <div id="container-side">
            <div id="container-buttons">
            <button className="button-side1"><CgProfile/> Profile</button>
            <button className="button-side2"><CgSearch/> Search</button>
            <button className="button-side3"><CgHeart/> Favorite</button>
            <button className="button-side4"><CgCreditCard/> Balance</button>
            <Link to="/cadastro">
                <button className="button-side5"><CgAdd/> Register</button>
            </Link>
            </div>
        </div>
    )
}
export default SideBar;