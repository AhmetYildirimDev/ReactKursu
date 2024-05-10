import { useState } from "react";
import  "./Search-header.css";

function SearchHeader({search}) {

    
    const [valueInput, setValueInput] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        search('ahmet');
    }
    const handleChange  = (event) => {
        setValueInput(event.target.value)
    }
    return(<>
    <form className="form" onSubmit={handleSubmit}>
        <label> Ne Arıyorsun ?</label>
        <input type="text"  value={valueInput} onChange={handleChange}/>
    </form>
    <div>{valueInput}</div>
    </>)
}
export default SearchHeader;