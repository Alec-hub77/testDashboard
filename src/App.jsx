import React from "react";
import "./app.scss";
import { Header, LeftTable } from "./components";
import RightSide from "./components/rightSide/RightSide.jsx";

const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="contentWrapper">
        <LeftTable/>
        <div className="rightContainer">
          <RightSide/>
        </div>
      </div>
    </div>
  );
};

export default App;
