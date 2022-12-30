import { Avatar, Tag, Box } from "@chakra-ui/react";
import UserImage from "./UserImage";
import { useState } from "react";
import Message from "./Message";

function Messages() {
  const [currentUser, setCurrentUser] = useState(true);
  return (
    <Box overflowY="auto" bgColor="lightgrey" maxH="500" minH="500">
      <Message
        message="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
        imageSrc="https://bit.ly/dan-abramov"
        name="Dan Abrahmov"
        currentUser={true}
      />
      <Message
        currentUser={false}
        message="consectetur adipiscing elit"
        imageSrc="https://bit.ly/kent-c-dodds"
        name="Kent C Dodds"
      />{" "}
      <Message
        message="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
        imageSrc="https://bit.ly/dan-abramov"
        name="Dan Abrahmov"
        currentUser={true}
      />
      <Message
        currentUser={false}
        message="consectetur adipiscing elit"
        imageSrc="https://bit.ly/kent-c-dodds"
        name="Kent C Dodds"
      />{" "}
      <Message
        message="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
        imageSrc="https://bit.ly/dan-abramov"
        name="Dan Abrahmov"
        currentUser={true}
      />
      <Message
        currentUser={false}
        message="consectetur adipiscing elit"
        imageSrc="https://bit.ly/kent-c-dodds"
        name="Kent C Dodds"
      />{" "}
      <Message
        message="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
        imageSrc="https://bit.ly/dan-abramov"
        name="Dan Abrahmov"
        currentUser={true}
      />
      <Message
        currentUser={false}
        message="consectetur adipiscing elit"
        imageSrc="https://bit.ly/kent-c-dodds"
        name="Kent C Dodds"
      />{" "}
      <Message
        message="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
        imageSrc="https://bit.ly/dan-abramov"
        name="Dan Abrahmov"
        currentUser={true}
      />
      <Message
        currentUser={false}
        message="consectetur adipiscing elit"
        imageSrc="https://bit.ly/kent-c-dodds"
        name="Kent C Dodds"
      />
    </Box>
  );
}

export default Messages;
