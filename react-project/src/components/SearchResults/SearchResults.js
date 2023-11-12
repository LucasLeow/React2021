import './SearchResults.css';
import List from '../List/List';

export default function SearchResults(props) {
    let { results, type } = props;
    let formattedData = results.map((item, idx)=> {
        let obj = {
            original: item // save original array just in case
        }
        switch(type) {
            case 'films':
                obj.ref =  item.episode_id;
                obj.title=item.title;
                obj.txt = item.release_date;
                break;
            case  'people':
                break;
            case 'planets':
            break; 
            default:
                console.log('hi');
                break;
         }
         return obj;
    })
    return (
        <div class="results">
            <List data={formattedData}/> 
        </div>
    )
}


    /* <ul className="filmResults">
            { props.results.map (item => (
                <li key={item.episode_id}> {item.title} </li>
            ))}
        </ul> */
    