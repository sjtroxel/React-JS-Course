import React from "react"
import Count from "./Count"

export default function App() {

    /**
     * Challenge: 
     * Create state to track our count value (initial value is 0)
     * Don't forget to replace the hard-coded "0" with your new state
     */

    /**
     * Challenge: 
     * Create a function called 'add' that runs when the + button is
     * clicked. (Can just console.log("add") for now!)
     */

    /**
     * Challenge: See if you can think of a way to add +1 to the 
     * count every time the + button is clicked.
     */

    /**
     * Challenge: Add functionality to the minus (-) button!
     */

    const [count, setCount] = React.useState(0)

    // function add() {
    //     console.log("Add")
    //     setCount(count + 1)
    // }

    function add() {
        setCount(function (prevCount) {
            return prevCount + 1
        })
        // setCount(function (prevCount) {
        //     return prevCount + 1
        // })
        // setCount(function (prevCount) {
        //     return prevCount + 1
        // })
    }

    // function subtract() {
    //     console.log("Subtract")
    //     setCount(count - 1)
    // }

    function subtract() {
        setCount(prevCount => prevCount - 1)
        // setCount(prevCount => prevCount - 1)
        // setCount(prevCount => prevCount - 1)
    }

    /**   ^^   ^^
     * Note: If you ever need the old value of state to help you
     * determine the new value of state, you should pass a callback
     * function to your state-setter function instead of using state
     * directly. This callback function will receive the old value 
     * of state as its parameter which you can then use to determine
     * your new value of state.
     */

     /**
     * Challenge:
     * - Create a new component called `Count`
     *    - It should receive a prop called `number`, whose value
     *      is the current value of our count
     *    - Have the component render the h2.count element below
     *      and display the incoming prop `number`
     * - Replace the h2.count below with an instance of
     *   the new Count component, passing the correct value
     *   to its `number` prop.
     * - After doing this, everything should be working the
     *   same as before.
     */

    console.log("App rendered!")

    return (
        <main className="container">
            {/* <h1>How many times will Bob say "state" in this section?</h1> */}
            <div className="counter">
                <button className="minus" aria-label="Decrease count" onClick={subtract}>–</button>
                <Count number={count} />
                <button className="plus" aria-label="Increase count" onClick={add}>+</button>
            </div>
        </main>
    )
}