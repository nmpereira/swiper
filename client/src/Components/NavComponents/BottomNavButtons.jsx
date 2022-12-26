import { FaHome, FaSearch, FaUser } from "react-icons/fa";
import { BsFillChatLeftDotsFill } from "react-icons/bs";

function BottomNavButtons(props) {
  return (
    <div className="bottom-nav-buttons">
      <button className="btn btn-primary">
        <FaHome />
      </button>
      <button className="btn btn-primary">
        <FaSearch />
      </button>
      <button className="btn btn-primary">
        <FaUser />
      </button>
      <button onClick={() => props.currentView === 'chatBox'? 
        props.changeView('userCard') : props.changeView('chatBox')  
    }>
        <BsFillChatLeftDotsFill />
      </button>
    </div>
  );
}

export default BottomNavButtons;
