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

    // function toggle(id) {
        // map over the pads array, and if the current item has the
        // same id as the one passed to this function, then flip its
        // `on` value.
        // console.log("Clicked!!", id)
    //     console.log("Toggle function!", id)
    // }

    /**
    * Challenge:
    * Call setPads to update the state of the one pad that was
    * clicked. Map over the previous pads array, and if the current
    * item you're iterating over has the same id as the `id` passed
    * to this function, then return a new object with the `on` value
    * set to the opposite of what it was before.
    * Otherwise (if the ids don't match), just return the previous
    * item as it was, unchanged.     
    */

    function toggle(id) {
        setPads(prevPads => prevPads.map(item => {
            return item.id === id ? {...item, on: !item.on} : item
        }))
    }

    const buttonElements = pads.map(pad => (
        <Pad key={pad.id} color={pad.color} id={pad.id} on={pad.on} 
        toggle={toggle} />
    ))


    
    return (
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
        </main>
    )
}