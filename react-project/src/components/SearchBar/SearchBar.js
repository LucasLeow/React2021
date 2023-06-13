import "./SearchBar.css";

export default function SearchBar(props) {
    function submitForm(e) {
        e.preventDefault();
        console.log("form submitted");
    }
    function searchFocus(e) {
        console.log("textbox focused");
    }
    function inputChange(e) {
        console.log("input by user: ", e.target.value);
    }
    function buttonClicked(e) {
        e.preventDefault();
        console.log("button clicked");
    }
    return (
        <section className="searchBar">
            <form onSubmit={submitForm}>
                <input onFocus={searchFocus} onInput={inputChange} type="text" name="keyword" className="searchText" placeholder="keyword" ></input>
                <button onClick={buttonClicked} type="submit" className="searchBtn" name="searchBtn">Search</button>
            </form>
        </section>
    )
}
