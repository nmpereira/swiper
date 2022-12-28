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
        currentUser={true}
      />
      <Message
        currentUser={false}
        message="consectetur adipiscing elit"
        imageSrc="https://bit.ly/kent-c-dodds"
      />{" "}
      <Message
        message="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
        imageSrc="https://bit.ly/dan-abramov"
        currentUser={true}
      />
      <Message
        currentUser={false}
        message="consectetur adipiscing elit"
        imageSrc="https://bit.ly/kent-c-dodds"
      />{" "}
      <Message
        message="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
        imageSrc="https://bit.ly/dan-abramov"
        currentUser={true}
      />
      <Message
        currentUser={false}
        message="consectetur adipiscing elit"
        imageSrc="https://bit.ly/kent-c-dodds"
      />{" "}
      <Message
        message="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
        imageSrc="https://bit.ly/dan-abramov"
        currentUser={true}
      />
      <Message
        currentUser={false}
        message="consectetur adipiscing elit"
        imageSrc="https://bit.ly/kent-c-dodds"
      />{" "}
      <Message
        message="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
        imageSrc="https://bit.ly/dan-abramov"
        currentUser={true}
      />
      <Message
        currentUser={false}
        message="consectetur adipiscing elit"
        imageSrc="https://bit.ly/kent-c-dodds"
      />
    </Box>
  );
}

export default Messages;
