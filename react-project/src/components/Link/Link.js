import "./Link.css";

export default function Link(props) {
    return (
        <a className="navLinks" href={props.link.url} target="_blank">{props.link.title}</a>
    )
}