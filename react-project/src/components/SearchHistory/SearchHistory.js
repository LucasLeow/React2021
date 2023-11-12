import List from "../List/List";
import "./SearchHistory.css";

export default function SearchHistory(props) {
    const { searches } = props;
    let formattedData = searches.map((item, idx) => {
        return {
            ref: idx,
            title: item,
            txt: null
        }
    })
    return (
        <div className="history">
            <List data={ formattedData } />
        </div>
    )
}