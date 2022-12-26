import "./App.css";
import ChatBox from "./Components/ChatComponents/ChatBox";
import UserCard from "./Components/ProfileComponents/UserCard";
import TopNavBar from "./Components/NavComponents/TopNavBar";
import BottomNavBar from "./Components/NavComponents/BottomNavBar";

import { useEffect, useState } from "react";

function App() {
  const [view, setView] = useState("userCard");

  const changeView = (view) => {
    setView(view);
  };

  return (
    <div className="App">
      <h1>Chat App</h1>
      <TopNavBar />
      {view === "userCard" ? <UserCard /> : <ChatBox />}
      <BottomNavBar
        changeView={(view) => changeView(view)}
        currentView={view}
      />
    </div>
  );
}

// styles

export default App;
