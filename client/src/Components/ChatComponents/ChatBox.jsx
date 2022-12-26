import ChatInput from "./ChatInput";
import { Avatar, Tag, Center } from "@chakra-ui/react";
import UserImage from "./UserImage";
import Messages from "./Messages";

function ChatBox() {
  return (
    <Tag h="300" maxH="600">
      <Center>
        <Messages />
      </Center>

      <Center>{/* <ChatInput /> */}</Center>
    </Tag>
  );
}

export default ChatBox;
