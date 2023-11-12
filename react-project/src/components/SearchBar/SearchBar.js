import "./SearchBar.css";

export default function SearchBar(props) {

    function submitForm(e) {
        e.preventDefault();
        console.log("form submitted");
        props.addTerm(e.target['searchContent'].value);
    }

    return (
        <section className="searchBar">
            <form onSubmit={submitForm}>
                <input type="text" name="searchContent" className="searchText" placeholder="keyword"></input>
                <button type="submit" className="searchBtn" name="searchBtn">Search</button>
                {props.term && <p>You searched for {props.term}</p>}
            </form>
        </section>
    )
}


// {props.term?<p>You searched for {props.term}</p> : ''}