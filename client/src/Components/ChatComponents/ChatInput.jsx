import {
  Avatar,
  Tag,
  Center,
  Box,
  FormControl,
  Input,
  Button,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import { AiOutlineSend } from "react-icons/ai";
import { useState, useEffect } from "react";
import axios from "axios";

function ChatInput() {
  const [currentUser, setCurrentUser] = useState("user1");
  const [otherUser, setOtherUser] = useState("user2");
  const [message, setMessage] = useState("");

  const sendMessage = async ({ currentUser, otherUser, message }) => {
    const reqBody = {
      userid: currentUser,
      otherUser: otherUser,
      message: message,
      primary: true,
    };
    // const response = await axios({
    //   method: "post",
    //   url: "/chat/messages",
    //   body: JSON.stringify(reqBody),
    //   headers: {
    //     "Content-Type": "application/www-form-urlencoded",
    //   },
    // });

    const response = await axios.post("/chat/messages", reqBody);
    console.log("response from server: ", response);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    console.log("message sent!", message);
    setMessage("");
    sendMessage({ currentUser, otherUser, message: message });
  };
  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <form onSubmit={handleSendMessage}>
      <FormControl mt="3">
        <Center>
          <InputGroup size="md">
            <Input
              type="text"
              placeholder="Type a message..."
              fontSize="10"
              size="md"
              value={message}
              onChange={handleChange}
            />
            <InputRightElement>
              <Button
                id="sendMessage"
                size="sm"
                colorScheme="twitter"
                rightIcon={<AiOutlineSend />}
                mr="1"
                type="submit"
              />
            </InputRightElement>
          </InputGroup>
        </Center>
      </FormControl>
    </form>
  );
}

export default ChatInput;
