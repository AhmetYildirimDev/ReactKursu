import { useState } from "react";
import "./App.css";
import Course from "./Course";

function randomBmw() {
  const cars = ["m3", "m4", "m5", "m8"];
  return cars[Math.floor(Math.random() * cars.length)];
}

function App() {
  const [carsList, setCarList] = useState([]);

  const addCars = () => {
    setCarList([...carsList, randomBmw()]);
  };
  const listCars = carsList.map((car, index) => {
    return <Course key={index} carName={car} />;
  });

  return (
    <>
      <div className="app"> 
          <button className="addCarButton" onClick={addCars}>
            Araba Ekle
          </button>
        <div className="card">{listCars}</div>
      </div>
    </>
  );
}

export default App;
