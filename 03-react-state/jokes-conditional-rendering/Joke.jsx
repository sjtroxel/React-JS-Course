import React from "react"

export default function Joke(props) {
    /**
     * Challenge:
     * - Create state `isShown` (boolean, default to `false`)
     * - Add a button that toggles the value back and forth
     */

    const [isShown, setIsShown] = React.useState(false)

    function toggleShown() {
        setIsShown(prevShown => !prevShown)
    }

    /**
     * Challenge:
     * - only display the punchline paragraph if `isShown` is true
     */
    
    console.log(isShown)
    console.log(toggleShown)
    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {isShown === true && <p>{props.punchline}</p>}

            <button onClick={toggleShown}>
                {isShown ? "Hide Punchline!" : "Show Punchline!"}
            </button>

            <hr />
        </div>
    )
}



const a = false
// const b = true

// if (a && b) {
//     console.log("Everything was true!")
// }

// if (a && console.log("This code is running!")) {
if (console.log("This code is running!") && a) {
    // console.log()
}