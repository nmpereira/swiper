import BottomNavButtons from "./BottomNavButtons";
import { Center } from "@chakra-ui/react";

function BottomNavBar(props) {
  return (
    <Center pt="5">
      <BottomNavButtons {...props} />
    </Center>
  );
}

export default BottomNavBar;
