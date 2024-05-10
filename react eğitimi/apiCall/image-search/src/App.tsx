import './App.css'
import SearchHeader from './Component/Search-header'
import SearchImage from './Api';

function App() {

  const heandleFormSubmit = (value) => {
    debugger;
    SearchImage(value)

  }
  return (
    <>
      <SearchHeader search={heandleFormSubmit} />
      <SearchImage value={value}/>
      <img src="" alt="" />
    </>
  )
}

export default App
