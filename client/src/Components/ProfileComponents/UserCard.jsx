import ProfileImage from "./ProfileImage";
import ProfileBio from "./ProfileBio";
import LikeButtons from "./LikeButtons";
import "./UserCard.css";

function UserCard() {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <ProfileImage />
          <ProfileBio />
          <LikeButtons />
        </div>
      </div>
    </div>
  );
}

export default UserCard;
