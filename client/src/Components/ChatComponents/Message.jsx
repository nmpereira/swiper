import { Avatar, Tag, Box, Text } from "@chakra-ui/react";
import UserImage from "./UserImage";
import { useState } from "react";
import TimeStamp from "./TimeStamp";

function Message(props) {
  return (
    <Box pt="2" m="2">
      {props.currentUser ? (
        <Box display="flex" alignItems="center" justifyContent="flex-start">
          <UserImage src={props.imageSrc} size="sm" name="Dan Abrahmov" m="1" />
          <Box>
            <Tag
              size="sm"
              colorScheme="green"
              borderRadius="full"
              p="2"
              textAlign="center"
            >
              {props.message}
            </Tag>
            <Text fontSize="8" color="gray.500" ml="2" mt="1">
              <TimeStamp time={props.time} />
            </Text>
          </Box>
        </Box>
      ) : (
        <Box display="flex" alignItems="center" justifyContent="flex-end">
          <Box>
            <Tag
              size="sm"
              colorScheme="blue"
              borderRadius="full"
              p="2"
              textAlign="center"
            >
              {props.message}
            </Tag>
            <Text
              fontSize="8"
              color="gray.500"
              mr="2"
              mt="1"
              display="flex"
              alignItems="center"
              justifyContent="flex-end"
            >
              <TimeStamp time={props.time} />
            </Text>
          </Box>
          <UserImage src={props.imageSrc} />
        </Box>
      )}
    </Box>
  );
}

export default Message;
