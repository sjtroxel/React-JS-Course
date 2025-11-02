export default function Joke(props) {
    return (
        <>
            {props.setup && <p className="setup">{props.setup}</p>}
            <p className="punchline">{props.punchline}</p>
            <hr />
        </>
    )
}