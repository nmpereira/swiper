import { Text } from "@chakra-ui/react";
function ProfileBio(props) {
  return (
    <Text m="5" overflowY="auto" maxHeight="100" fontSize="12">
      {props.bio}
    </Text>
  );
}

export default ProfileBio;
