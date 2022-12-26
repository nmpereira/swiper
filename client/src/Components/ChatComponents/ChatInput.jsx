import {
  Avatar,
  Tag,
  Center,
  Box,
  FormControl,
  Input,
  Button,
} from "@chakra-ui/react";

function ChatInput() {
  return (
    // <div className="chat-input">
    //   <form>
    //     <input type="text" placeholder="Type a message..." />
    //     <button type="submit">Send</button>
    //   </form>
    // </div>
    <FormControl>
      <Input type="text" placeholder="Type a message..." fontSize="10" />
      <Button type="submit">Send</Button>
    </FormControl>
  );
}

export default ChatInput;
