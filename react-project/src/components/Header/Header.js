import "./Header.css";
import Nav from "../Nav/Nav";

export default function Header(props) {
    return (
        <header className="header1">
            <Nav />
            {props.company}
        </header>
    )
}