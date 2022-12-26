import ProfileImage from "./ProfileImage";
import ProfileBio from "./ProfileBio";
import LikeButtons from "./LikeButtons";
import { Center, Box } from "@chakra-ui/react";

function UserCard() {
  return (
    <Box p="5">
      <Center>
        <ProfileImage />
      </Center>
      <Center textAlign="center">
        <ProfileBio />
      </Center>
      <Center>
        <LikeButtons />
      </Center>
    </Box>
  );
}

export default UserCard;
