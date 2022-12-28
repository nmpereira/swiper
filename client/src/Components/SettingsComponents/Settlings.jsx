import {
  Card,
  Center,
  Input,
  FormControl,
  InputGroup,
  Button,
} from "@chakra-ui/react";
function Settings() {
  return (
    <Card minH="600" maxH="600" overflowY="auto">
      <Center>
        <h1>Settings</h1>
      </Center>
      <Center>
        <FormControl mt="3">
          <Center>
            <InputGroup size="md">
              <Input
                type="text"
                placeholder="Type a message..."
                fontSize="10"
                size="md"
              />
            </InputGroup>
          </Center>
        </FormControl>
      </Center>
    </Card>
  );
}

export default Settings;
