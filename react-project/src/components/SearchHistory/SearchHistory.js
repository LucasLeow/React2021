import "./SearchHistory.css";

export default function SearchHistory(props) {
    return (
        <>
        <h4>Search History</h4>
        <ul>
            {props.searches.map((search,idx) => (
                <li key={idx}>{search}</li>
            ))}
        </ul>
        </>

    )
}