import { Box, Tag } from "@chakra-ui/react";

function UserInterests(props) {
  return (
    <Box>
      <Box size="md" colorScheme="blue">
        {/* show each interest in the array */}
        {props.interests.map((interest) => {
          return (
            <Tag size="md" colorScheme="blue" m="1">
              {interest}
            </Tag>
          );
        })}
      </Box>
    </Box>
  );
}

export default UserInterests;
