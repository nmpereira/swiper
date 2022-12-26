import { FaHome, FaSearch, FaUser } from "react-icons/fa";
import { BsFillChatLeftDotsFill } from "react-icons/bs";
import { AiTwotoneSetting } from "react-icons/ai";
import { Tabs, TabList, Tab } from "@chakra-ui/react";

function BottomNavButtons(props) {
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
        <Tab
          onClick={() =>
            props.currentView === "chatBox"
              ? props.changeView("userCard")
              : props.changeView("chatBox")
          }
        >
          <BsFillChatLeftDotsFill />
        </Tab>
        <Tab>
          <AiTwotoneSetting />
        </Tab>
      </TabList>
    </Tabs>
  );
}

export default BottomNavButtons;
