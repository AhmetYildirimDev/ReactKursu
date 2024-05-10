import { useState } from "react";
import "./App.css";
import InputForm from "./component/inputForm";

function App() {
  const [count, setCount] = useState("");

  const handleChildChange = (value) => {
    setCount(value);
    console.log(count);
    console.log(value);
  };
  const pullImage = () => {
    
  }

  return (
    <>
      <InputForm image={handleChildChange} />
    </>
  );
}

export default App;
