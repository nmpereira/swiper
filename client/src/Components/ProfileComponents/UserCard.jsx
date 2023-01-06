import ProfileImage from "./ProfileImage";
import ProfileBio from "./ProfileBio";
import LikeButtons from "./LikeButtons";
import { Center, Box, Card } from "@chakra-ui/react";
import UserInterests from "./UserInterests";
import UserInfo from "./UserInfo";
import TinderCard from "react-tinder-card";
import { useEffect, useState } from "react";
import axios from "axios";

const onSwipe = (direction) => {
  console.log("You swiped: " + direction);
};

const onCardLeftScreen = (myIdentifier) => {
  console.log(myIdentifier + " left the screen");
};

function UserCard() {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    console.log("view changed");

    const getResponse = async () => {
      const res = await axios.get("/userCard");
      console.log("response from server: ", JSON.stringify(res.data));
      setResponse(res.data);
    };
    getResponse();
  }, []);
  return (
    <Box p="5">
      <TinderCard
        className="pressable"
        preventSwipe={["up", "down"]}
        onSwipe={onSwipe}
        onCardLeftScreen={() => onCardLeftScreen("fooBar")}
      >
        <Card overflowY="auto" minH="520" maxH="520">
          <Center>
            <ProfileImage />
          </Center>
          <Box>
            <UserInfo
              name={response?.name ? response.name : "No Name"}
              title={response?.title ? response.title : "No Title"}
              status={response?.status ? response.status : "No Status"}
              age={response?.age ? response.age : "No Age"}
              location={response?.location ? response.location : "No Location"}
            />
          </Box>
          <Box>
            <Center textAlign="center">
              <ProfileBio bio={response?.bio ? response.bio : "No Bio"} />
            </Center>
            <Center>
              <UserInterests
                interests={[...(response?.hobbies ? response.hobbies : [])]}
              />
            </Center>
          </Box>
        </Card>
      </TinderCard>
      <Center>
        <LikeButtons />
      </Center>
    </Box>
  );
}

export default UserCard;
