import './App.css';
import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar"
import SearchHistory from '../SearchHistory/SearchHistory';
import { useState } from "react";

function App() {
const [search, setSearch] = useState([]);

function appendHistory(term) {
  setSearch([term, ...search])
}

  return (
    <div className="App">
        <Header />
        <SearchBar term={search[0]} addTerm={appendHistory}/>
        <SearchHistory searches={search}/>
    </div>
  );
}

export default App;
