import React, { useState } from "react";
import Header from "./components/Header/Header.jsx";
import Content from "./components/Content/Content.jsx";
import Picture from "./components/Picture/Picture.jsx";
import "./App.css";

function App() {
  const [isGrid, setIsGrid] = useState(false);

  const toggleGrid = (grid) => {
    setIsGrid(grid);
  };

  return (
    <div>
      <Header />
      <Content isGrid={isGrid} toggleGrid={toggleGrid} />
      <Picture isGrid={isGrid} />
    </div>
  );
}

export default App;
