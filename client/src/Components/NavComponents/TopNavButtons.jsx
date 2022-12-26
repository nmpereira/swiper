import { FaHome, FaSearch, FaUser } from "react-icons/fa";
import { Tabs, TabList, Tab } from "@chakra-ui/react";

function TopNavButtons() {
  return (
    <Tabs variant="soft-rounded" colorScheme="green">
      <TabList>
        <Tab>
          <FaHome />
        </Tab>
        <Tab>
          <FaSearch />
        </Tab>
        <Tab>
          <FaUser />
        </Tab>
      </TabList>
    </Tabs>
  );
}

export default TopNavButtons;
