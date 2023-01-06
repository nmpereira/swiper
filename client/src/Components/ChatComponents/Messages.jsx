import { Avatar, Tag, Box } from "@chakra-ui/react";
import UserImage from "./UserImage";
import { useState } from "react";
import Message from "./Message";
import { useEffect } from "react";
import axios from "axios";

function Messages() {
  const [currentUser, setCurrentUser] = useState("user1");
  const [otherUser, setOtherUser] = useState("user2");

  const [message, setMessage] = useState(null);

  useEffect(() => {
    const getMessages = async () => {
      const reqBody = {
        userid: currentUser,
        otherUser: otherUser,
      };
      const response = await axios.get("/chat/messages", {
        params: reqBody,

        headers: {
          "Content-Type": "application/www-form-urlencoded",
        },
      });

      console.log("response from server: ", response);
      const data = await response.data.data;
      console.log("response from server: ", data);

      data.sort((a, b) => {
        return a.createdAt > b.createdAt ? 1 : -1;
      });
      setMessage(data);
      console.log("message", data);
    };
    getMessages();
  }, [currentUser]);

  return (
    <Box
      overflowY="auto"
      bgColor="lightgrey"
      maxH="500"
      minH="500"
      minW="375"
      maxW="375"
    >
      {/* sort message by time */}
      {message?.map((message) => {
        if (message.primary) {
          return (
            <Message
              key={message.createdAt}
              currentUser={true}
              message={message.message}
              imageSrc={message.imageSrc}
              time={message.createdAt}
            />
          );
        } else {
          return (
            <Message
              key={message.createdAt}
              currentUser={false}
              message={message.message}
              imageSrc={message.imageSrc}
              time={message.createdAt}
            />
          );
        }
      })}
    </Box>
  );
}

export { Messages };
