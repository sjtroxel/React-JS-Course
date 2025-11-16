import React from "react"
import padsData from "./pads"

export default function App() {
    const [pads, setPads] = React.useState(padsData)

    const buttonElements = pads.map(pad => (
        <button key={pad.id} className="pad">
            {pad.id}
        </button>
    ))

    console.log(setPads)

    /**
     * Challenge part 1:
     * 1. Initialize state with the default value of the
     *    array pulled in from pads.js
     * 2. Map over that state array and display each one
     *    as a <button> (CSS is already written for you)
     *    (Don't worry about using the "on" or "color" 
     *    properties yet)
     */
    return (
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
        </main>
    )
}