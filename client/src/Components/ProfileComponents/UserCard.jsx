import ProfileImage from "./ProfileImage";
import ProfileBio from "./ProfileBio";
import LikeButtons from "./LikeButtons";
import { Center, Box, Card } from "@chakra-ui/react";
import UserInterests from "./UserInterests";
import UserInfo from "./UserInfo";

function UserCard() {
  return (
    <Box p="5">
      <Card overflowY="auto" minH="520" maxH="520">
        <Center>
          <ProfileImage />
        </Center>
        <Box>
          <UserInfo
            name="John Doe"
            title="Software Engineer"
            status="Employed"
            age="25"
            location="New York, USA"
          />
        </Box>
        <Box>
          <Center textAlign="center">
            <ProfileBio />
          </Center>
          <Center>
            <UserInterests interests={["abc", "def"]} />
          </Center>
        </Box>
      </Card>
      <Center>
        <LikeButtons />
      </Center>
    </Box>
  );
}

export default UserCard;
