import { useState } from "react";

function InputForm(image) {
  const [value, setvalue] = useState("");
  const onSearch = (event) => {
    event.preventDefault();
    console.log(value);
    image(value);
  };
  const inputKey = (event) => {
    setvalue(event.target.value);
  };

  return (
    <>
      <form onSubmit={onSearch}>
        <h1>Ne Aratmak İstiyorsunuz</h1>
        <input onChange={inputKey} />
      </form>
      <h1>{value}</h1>
      
    </>
  );
}

export default InputForm;