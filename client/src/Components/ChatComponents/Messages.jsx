import { Avatar, Tag, Box } from "@chakra-ui/react";
import UserImage from "./UserImage";
import { useState } from "react";
import Message from "./Message";

function Messages() {
  const [currentUser, setCurrentUser] = useState(true);
  return (
    <Box overflowY="auto" maxH="300">
      <Message currentUser={true} />
      <Message currentUser={false} /> <Message currentUser={true} />
      <Message currentUser={false} /> <Message currentUser={true} />
      <Message currentUser={false} /> <Message currentUser={true} />
      <Message currentUser={false} /> <Message currentUser={true} />
      <Message currentUser={false} /> <Message currentUser={true} />
      <Message currentUser={false} />
    </Box>
  );
}

export default Messages;
