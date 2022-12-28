import { Box, Center, Tag, Text } from "@chakra-ui/react";

function UserInfo(props) {
  return (
    <Box>
      <Center>
        <Tag size="lg" colorScheme="blue" m="1">
          {props.name}
        </Tag>{" "}
        <Tag size="sm" colorScheme="blue" m="1">
          {props.age}
        </Tag>
      </Center>
      <Center>
        <Tag size="md" colorScheme="blue" m="1">
          {props.title}
        </Tag>
      </Center>
      <Center>
        <Tag size="md" colorScheme="blue" m="1">
          {props.status}
        </Tag>
      </Center>
      <Center>
        <Tag size="sm" colorScheme="blue" m="1">
          {props.location}
        </Tag>
      </Center>
    </Box>
  );
}

export default UserInfo;
