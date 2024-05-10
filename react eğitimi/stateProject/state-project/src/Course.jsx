import m3 from "./images/bmw_M3.jpg";
import m4 from "./images/bmw_m4.jpg";
import m5 from "./images/bmw_M5.jpg";
import m8 from "./images/bmw_M8.jpg";
import "./course.css"

const carsMap = {
  m3: m3,
  m4: m4,
  m5: m5,
  m8: m8,
};

function Course({ carName }) {
  return (
    <>
      <div>
        <img className="img" src={carsMap[carName]} alt="" />
      </div>
    </>
  );
}

export default Course;
