import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Todo from "./components/TodoList/Todo";
function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark-bg" : "light-bg"}>
      <Header
        className={darkMode ? "dark-header" : "light-header"}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      ></Header>
      <div className="mainContent">
        <Todo></Todo>
      </div>
    </div>
  );
}

export default App;
