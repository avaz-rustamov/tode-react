import "./App.scss";
import { Header } from "./Header/Header";
import { useState } from "react";

function App() {
  const [x, setX] = useState([{ id: 1, content: "Todo #1" }]);

  const stylesH = {
    backgroundColor: "red",
    color: "green",
  };

  const addTodo = (e) => {
    if (e.code === "Enter") {
      setX([{ id: new Date().getTime(), content: e.target.value }, ...x]);
      e.target.value = null;
    }
  };

  return (
    <>
      <input onKeyPress={(e) => addTodo(e)} type="text" />
      <br />
      {x?.map((item) => {
        return <li key={item.id}>{item.content}</li>;
      })}
    </>
  );
}

export default App;
