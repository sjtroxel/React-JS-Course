export default function Joke(props) {
    console.log(props)
    return (
        <>
        {/* <p style={{display: props.setup ? "block" : "none"}} className="setup">{props.setup}</p> */}
        {/* {props.setup && <p className="setup">{props.setup}</p>} */}
        <p className="setup">{props.setup}</p>
        <p className="punchline">{props.punchline}</p>
        <hr />
        </>
    )
}