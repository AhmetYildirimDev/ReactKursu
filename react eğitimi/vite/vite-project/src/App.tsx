import { useState } from 'react'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const students = 43000;
  const nameSurname = "Ahmet YILDIRIM";
  const dogruMu = false;
  const URL = "https://picsum.photos/250/250";

  return (
    <>    
    <h1>isim soyisim: {nameSurname} </h1>
    <p>denemeler nasıl gider</p>
    <input type="date"  /> 
    <p>students</p>
    <p>{students}</p>
    <p> doğru mu değilmi kontrol yapılıyor = { dogruMu ? nameSurname : students}</p>
    {/* <img src="https://picsum.photos/250/250" alt=" random photo" /> */}
    <img src={URL} alt="" />
    </>
  )
}

export default App
