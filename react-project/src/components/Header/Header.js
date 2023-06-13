import "./Header.css";
import Nav from "../Nav/Nav";

export default function Header() {
    return (
        <header className="header1" onClick={(e)=>console.log(e.type)}>
            <Nav />
        </header>
    )
}