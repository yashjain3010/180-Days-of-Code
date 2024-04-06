import React,{memo} from "react";
import { useState } from "react"

function App() {

  const [title, setTitle] = useState("my name is yash");

  function updatedTitle() {
    setTitle("My name is " + Math.random());
  }

  return (
    <div>
      <button onClick={updatedTitle}>Update the title</button>
      <Header title={title}></Header>
      <Header title="yash2"></Header>
    </div>
  );
}

const Header = memo(function Header({ title }) {
  return <div>{title}</div>;
});

export default App;
