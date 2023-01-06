import { Box, Center, Text } from "@chakra-ui/react";
import UserImage from "../ChatComponents/UserImage";

function Like(props) {
  return (
    <Box mt="1">
      <Center>
        <UserImage
          src="https://bit.ly/dan-abramov"
          size="sm"
          name="Dan Abrahmov"
          m="1"
        />
        <Text>{props.user} liked you</Text>
      </Center>
    </Box>
  );
}

export default Like;
