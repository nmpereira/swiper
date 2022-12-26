import { FaHome, FaSearch, FaUsers } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { BsFillChatLeftDotsFill } from "react-icons/bs";
import { AiTwotoneSetting } from "react-icons/ai";
import { Tabs, TabList, Tab } from "@chakra-ui/react";
import { viewList } from "../../App";
import { Tooltip } from "@chakra-ui/react";

function BottomNavButtons(props) {
  return (
    <Tabs variant="soft-rounded" colorScheme="green">
      <TabList>
        <Tab onClick={() => props.changeView(viewList.card)}>
          <FaUsers />
        </Tab>
        <Tab onClick={() => props.changeView(viewList.likes)}>
          <AiFillHeart />
        </Tab>
        <Tab
          onClick={() =>
            // props.currentView === viewList.chatBox
            //   ? props.changeView(viewList.chatBox)
            //   : props.changeView(viewList.card)
            props.changeView(viewList.chat)
          }
        >
          <BsFillChatLeftDotsFill />
        </Tab>
        <Tab onClick={() => props.changeView(viewList.appSettings)}>
          <AiTwotoneSetting />
        </Tab>
      </TabList>
    </Tabs>
  );
}

export default BottomNavButtons;
