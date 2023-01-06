import { Avatar, Tag, AvatarBadge } from "@chakra-ui/react";
function UserImage(props) {
  return (
    <Avatar
      size={props.size ? props.size : "sm"}
      name={props.name ? props.name : "Dan Abrahmov"}
      src={props.src ? props.src : "https://picsum.photos/200/300"}
      m={props.m ? props.m : "1"}
    />
  );
}

export default UserImage;
