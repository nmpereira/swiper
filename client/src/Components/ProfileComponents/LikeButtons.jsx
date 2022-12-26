import { FaHeart, FaHeartBroken } from "react-icons/fa";
import { Tabs, TabList, Tab } from "@chakra-ui/react";

function LikeButtons() {
  return (
    <Tabs variant="soft-rounded" colorScheme="green" pt="3">
      <TabList>
        <Tab>
          <FaHeart />
        </Tab>
        <Tab>
          <FaHeartBroken />
        </Tab>
      </TabList>
    </Tabs>
  );
}

export default LikeButtons;
