import ChatBox from "./Components/ChatComponents/ChatBox";
import UserCard from "./Components/ProfileComponents/UserCard";
import TopNavBar from "./Components/NavComponents/TopNavBar";
import "./App.css";
import BottomNavBar from "./Components/NavComponents/BottomNavBar";
import { ChakraProvider } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter, Box } from "@chakra-ui/react";

import { useEffect, useState } from "react";
import Settings from "./Components/SettingsComponents/Settlings";
import Likes from "./Components/Likes/Likes";

function App() {
  const [view, setView] = useState(viewList.card);

  const changeView = (view) => {
    setView(view);
  };

  const appView = () => {
    switch (view) {
      case viewList.chat:
        console.log("chat");
        return <ChatBox />;
      case viewList.card:
        console.log("card");
        return <UserCard />;
      case viewList.appSettings:
        console.log("settings");
        return <Settings />;

      case viewList.likes:
        console.log("likes");
        return <Likes />;
      default:
        console.log("default");
        return <UserCard />;
    }
  };

  return (
    <ChakraProvider>
      <Box>
        <Center>
          <Card maxW="sm" maxH="800" h="600" pt="5">
            <div className="App">
              <Center>
                <h1>Chat App</h1>
              </Center>

              <TopNavBar />

              <Card>{appView()}</Card>

              <BottomNavBar
                changeView={(view) => changeView(view)}
                currentView={view}
              />
            </div>
          </Card>
        </Center>
      </Box>
    </ChakraProvider>
  );
}
export const viewList = {
  chat: "chatBox",
  card: "userCard",
  appSettings: "appSettings",
  likes: "likes",
};

export default App;
