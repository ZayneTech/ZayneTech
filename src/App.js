import Navbar from "./components/navbar";
import Homepage from "./components/homepage";
import './App.css';

function App() {

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

  return (
    <div className="App">
        <Navbar fill="#1985A1" mode={true}/>
        <Homepage />
    </div>
  );
}

export default App;
