import {
  Avatar,
  Tag,
  Center,
  Box,
  FormControl,
  Input,
  Button,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import { AiOutlineSend } from "react-icons/ai";

function ChatInput() {
  return (
    <FormControl mt="3">
      <Center>
        <InputGroup size="md">
          <Input
            type="text"
            placeholder="Type a message..."
            fontSize="10"
            size="md"
          />
          <InputRightElement>
            <Button
              size="sm"
              colorScheme="twitter"
              rightIcon={<AiOutlineSend />}
              mr="1"
            />
          </InputRightElement>
        </InputGroup>
      </Center>
    </FormControl>
  );
}

export default ChatInput;
