// import { useState } from "react"
import React from "react"

export default function App() {

    /**
     * Challenge: replace our hard-coded "Yes" on the page with
     * some state initiated with React.useState().
     */

    let [isImportant, setIsImportant] = React.useState("yes")
    // setIsImportant("Heck yes!")
    

    /**
     * Challenge: 
     * 1. Create a function called 'handleClick' that runs 
     *    setIsImportant("Definitely!")
     * 2. Add a click event listener to the button that runs
     *    'handleClick' when the button is clicked.
     */
    

    function handleClick() {
        // setIsImportant("Definitely!")
        setIsImportant("heck yes!")
    }
    
    // const yes = React.useState("heck yes")
    // console.log(isImportant)
    // console.log(yes)
    
    
    // let state = "Yes"

    // function handleClick() {
    //     state = "heck, yes!"
    // }

    return (
        <main>
            <h1 className="title">Is state important to know??</h1>
            {/* <button onClick={handleClick} className="value">{state}</button> */}
            <button className="value" onClick={handleClick}>{isImportant}</button>
        </main>
    )
}