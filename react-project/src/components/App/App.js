import './App.css';
import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
import SearchHistory from '../SearchHistory/SearchHistory';
import SearchResults from '../SearchResults/SearchResults';
import { useState, useEffect } from "react";

function App() {
const [search, setSearch] = useState([]);
const [results, setResults] = useState([]);
const [searchType, setSearchType] = useState('films');

function appendHistory(term) {
  let newTerms = new Set([term, ...search]); // Set remove duplicates
  setSearch(Array.from(newTerms)) // convert Set of new terms back to array format
  fetchData(term);
}

async function fetchData(searchKeyword) {
let url = `https://swapi.dev/api/${searchType}`;
if (searchKeyword) {
  url += `/?search=${searchKeyword}`
}
  let res = await fetch(url);
  if (!res.ok) throw new Error(res.statusText);
  let data = await res.json();
  setResults(data.results);
}

useEffect(() => {
  console.log("initial render complete, fetching data");
  fetchData();
}, []);

  return (
    <div className="App">
        <Header />
        <SearchBar term={search[0]} addTerm={appendHistory}/>
        <main className='content'>
          <SearchHistory searches={search}/>
          <SearchResults results={results} type={searchType}/>
        </main>
    </div>
  );
}

export default App;
