import "./SearchBar.css";

export default function SearchBar(props) {

    function submitForm(e) {
        e.preventDefault();
        console.log("form submitted");
        props.addTerm(e.target['searchContent'].value);
    }
    function searchFocus(e) {
        console.log("textbox focused");
    }
    function inputChange(e) {
        console.log("input by user: ", e.target.value);
    }
    function buttonClicked(e) {
        console.log("button clicked");
    }
    return (
        <section className="searchBar">
            <form onSubmit={submitForm}>
                <input type="text" name="searchContent" className="searchText" placeholder="keyword" onFocus={searchFocus} onInput={(ev) => inputChange(ev)}></input>
                <button type="submit" className="searchBtn" name="searchBtn" onClick={buttonClicked}>Search</button>
                {props.term?<p>You searched for {props.term}</p> : ''}
            </form>
        </section>
    )
}
