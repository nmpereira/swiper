import { FaHeart, FaHeartBroken } from "react-icons/fa";

function LikeButtons() {
  return (
    <div className="like-buttons">
      <button className="btn btn-primary">
        <FaHeart />
      </button>
      <button className="btn btn-primary">
        <FaHeartBroken />
      </button>
    </div>
  );
}

export default LikeButtons;
