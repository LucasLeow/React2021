import './App.css';
import Header from "../Header/Header";

function App() {
  const com_name = "My Company";
  return (
    <div className="App">
        <Header company={com_name}/>
    </div>
  );
}

export default App;
