import React from "react"
import padsData from "./pads"
import Pad from "./Pad"

export default function App() {
    const [pads, setPads] = React.useState(padsData)

    /**
     * Challenge: Create a toggle() function that logs "clicked!"
     * to the console. Pass that function down to each of the Pad
     * components and set it up so that when they get clicked,
     * the function runs!!
     */

    function toggle(id) {
        console.log("Clicked!!", id)
    }

    const buttonElements = pads.map(pad => (
        <Pad key={pad.id} color={pad.color} id={pad.id} on={pad.on} 
        toggle={toggle} />
    ))

    console.log(setPads)
    
    return (
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
        </main>
    )
}