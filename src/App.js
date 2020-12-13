import Navbar from "./components/navbar";
import Homepage from "./components/homepage";
import './App.css';

function App() {
  return (
    <div className="App">
        <Navbar fill="#1985A1" mode={true}/>
        <Homepage />
    </div>
  );
}

export default App;
