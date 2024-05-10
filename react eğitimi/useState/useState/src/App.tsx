import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState(0);
  const [count, setCount] = useState(0);

  const add = () => {
    setValue(value + 1)
    console.log(value);

  }
  return (
    <>
      {/* <button onClick={() =>{
      console.log("kaslı ahmet");
    }}>kurs sayısını arttır</button> */}
      <button onClick={add}>kurs sayısını arttır</button>
      <h1>{value}</h1>
    </>
  )
}

export default App
