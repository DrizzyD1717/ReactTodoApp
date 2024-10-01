import { useState } from "react";
import "./App.css";
import TodoApp from "./TodoApp/TodoApp";

function App() {
  const [lightDark, setlightDark] = useState("light");

  const handleDark = () => {
    setlightDark("dark");
  };

  const handleLight = () => {
    setlightDark("light");
  };

  return (
    <div className="overallLight">
      <div className={lightDark == "light" ? "topLight" : "topDark"}></div>
      <div
        className={lightDark == "light" ? "bottomLight" : "bottomDark"}
      ></div>
      <div className="todoOverall">
        <TodoApp
          lightDark={lightDark}
          handleDark={handleDark}
          handleLight={handleLight}
        ></TodoApp>
      </div>
    </div>
  );
}

export default App;
