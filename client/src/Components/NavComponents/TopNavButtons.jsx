
import { FaHome, FaSearch, FaUser } from "react-icons/fa";

function TopNavButtons() {
    return ( 
        <div className="top-nav-buttons">
            <button className="btn btn-primary">
                <FaHome />
            </button>
            <button className="btn btn-primary">
                <FaSearch />
            </button>
            <button className="btn btn-primary">
                <FaUser />
            </button>
        </div>

     );
}

export default TopNavButtons;