import { Avatar, Tag, Box } from "@chakra-ui/react";
import UserImage from "./UserImage";
import { useState } from "react";

function Message(props) {
  return (
    <Box pt="2">
      {props.currentUser ? (
        <Box display="flex" alignItems="center">
          <UserImage />
          <Tag
            size="sm"
            colorScheme="green"
            borderRadius="full"
            p="5"
            textAlign="center"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </Tag>
        </Box>
      ) : (
        <Box display="flex" alignItems="center">
          <Tag
            size="sm"
            colorScheme="blue"
            borderRadius="full"
            p="5"
            textAlign="center"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quisquam,
          </Tag>
          <UserImage />
        </Box>
      )}
    </Box>
  );
}

export default Message;
