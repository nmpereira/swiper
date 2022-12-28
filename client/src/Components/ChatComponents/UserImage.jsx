import { Avatar, Tag, AvatarBadge } from "@chakra-ui/react";
function UserImage(props) {
  return (
    <Avatar
      size="sm"
      name="Dan Abrahmov"
      src={props.src ? props.src : "https://picsum.photos/200/300"}
      m="1"
    />
  );
}

export default UserImage;
