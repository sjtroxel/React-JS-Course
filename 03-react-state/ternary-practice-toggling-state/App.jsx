import React from "react"

export default function App() {
    const [isGoingOut, setIsGoingOut] = React.useState(false)

    /**
     * Challenge: 
     * - Initialize state for `isGoingOut` as a boolean
     * - Make it so clicking the button flips that
     *   boolean value (true -> false, false -> true)
     * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
     */

    function toggleIsGoingOut() {
        setIsGoingOut(prev => !prev)
    }

    return (
        <main>
            <h1 className="title">Do I feel like going out tonight?</h1>
            <button 
                className="value" 
                onClick={toggleIsGoingOut}
                aria-label={`Current answer is ${isGoingOut ? "Yes" : "No"} Click to change it.`}
                >
                {isGoingOut ? "Yes" : "No"}
            </button>
            <button className="value" onClick={() => {setIsGoingOut(!isGoingOut)}}>
                {isGoingOut ? "Yes" : "No"}
            </button>
        </main>
    )
}