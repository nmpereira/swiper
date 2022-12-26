import ChatBox from "./Components/ChatComponents/ChatBox";
import UserCard from "./Components/ProfileComponents/UserCard";
import TopNavBar from "./Components/NavComponents/TopNavBar";
import "./App.css";
import BottomNavBar from "./Components/NavComponents/BottomNavBar";
import { ChakraProvider } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter, Box } from "@chakra-ui/react";

import { useEffect, useState } from "react";

function App() {
  const [view, setView] = useState("userCard");

  const changeView = (view) => {
    setView(view);
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

              <Card>{view === "userCard" ? <UserCard /> : <ChatBox />}</Card>

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

// styles

export default App;
