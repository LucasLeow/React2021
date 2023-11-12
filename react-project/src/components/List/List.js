import './List.css';
import ListItem from '../ListItem/ListItem';

export default function List(props) {
    console.log(props);
    return (
        <ul className="list">
            {props.data.map((item, idx) => (
                <ListItem key={item.ref} data={item}/>
            ))}
        </ul>
    )
}