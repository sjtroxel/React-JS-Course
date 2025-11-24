import React from 'react'
import Die from './Die'
import {nanoid} from "nanoid"

export default function App() {
    /**
     * Challenge: Update the array of numbers in state to be
     * an array of objects instead. Each object should look like:
     * { value: <random number>, isHeld: false }
     * 
     * Making this change will break parts of our code, so make
     * sure to update things so we're back to a working state
     */

    /**
     * Challenge: Add conditional styling to the Die component
     * so that if it's held (isHeld === true), its background color
     * changes to a light green (#59E391)
     * 
     * Remember: currently the Die component has no way of knowing
     * if it's "held" or not.
     */

    /**
     * Challenge: Create a function `hold` that takes
     * `id` as a parameter. For now, just have the function
     * console.log(id).
     * 
     * Then, figure out how to pass that function down to each
     * instance of the Die component so when each one is clicked,
     * it logs its own unique ID property. (Hint: there's more
     * than one way to make that work, so just choose whichever
     * you want)
     */
    

    function generateAllNewDice() {
        return new Array(10)
            .fill(0)
            .map(() => ({
                value: Math.ceil(Math.random() * 6),
                isHeld: true,
                id: nanoid()
    }))}

    const [dice, setDice] = React.useState(generateAllNewDice())

    const diceElements = dice.map(dieObj => (
        <Die 
            key={dieObj.id} 
            value={dieObj.value} 
            isHeld={dieObj.isHeld}
            id={dieObj.id}
            hold={hold} />
    ))

    function rollDice() {
        setDice(generateAllNewDice())
    }

    function hold(id) {
        console.log(id)
    }

     return (
        <main>
            <div className="dice-container">
                {diceElements}
            </div>

        <button className="roll-dice" onClick={rollDice}>Roll Dice!</button>

        </main>
    )
}