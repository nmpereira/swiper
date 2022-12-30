import { Avatar, Tag, Box } from "@chakra-ui/react";
import UserImage from "./UserImage";
import { useState } from "react";

function Message(props) {
  return (
    <Box pt="2" m="2">
      {props.currentUser ? (
        <Box display="flex" alignItems="center">
          <UserImage src={props.imageSrc} size="sm" name="Dan Abrahmov" m="1" />
          <Tag
            size="sm"
            colorScheme="green"
            borderRadius="full"
            p="2"
            textAlign="center"
          >
            {props.message}
          </Tag>
        </Box>
      ) : (
        <Box display="flex" alignItems="center">
          <Tag
            size="sm"
            colorScheme="blue"
            borderRadius="full"
            p="2"
            textAlign="center"
          >
            {props.message}
          </Tag>
          <UserImage src={props.imageSrc} />
        </Box>
      )}
    </Box>
  );
}

export default Message;
