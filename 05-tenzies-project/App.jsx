import React from 'react'
import Die from './Die'

/**
 * Challenge:
 * Write a function (generateAllNewDice) that returns an array 
 * of 10 random numbers between 1-6 inclusive.
 * Log the array of numbers to the console for now.
 */

/**
 * Challenge:
 * 
 * Create state to hold our array of numbers. (Initialize
 * the state by calling our `generateAllNewDice` function so it 
 * loads all new dice as soon as the app loads)
 * 
 * Map over the state numbers array to generate our array
 * of Die components and render those in place of our
 * manually-written 10 Die elements.
 */

 /**
  * Challenge: Create a `Roll Dice` button that will re-roll
  * all 10 dice.
  * 
  * Clicking the button should generate a new array of numbers
  * and set the `dice` state to that new array (thus re-rendering
  * the array to the page).
  */

export default function App() {
    // function generateAllNewDice() {
    //     // create a new array (empty)
    //     const newDice = []
    //     // loop 10 times
    //     for (let i = 0; i < 10; i++) {
    //         // generate a random number between 1-6
    //         const rand = Math.ceil(Math.random() * 6)
    //         // push that number to the array
    //         newDice.push(rand)
    //     }
    //     return newDice
    // }
    // console.log(generateAllNewDice())

    function generateAllNewDice() {
        return new Array(10)
            .fill(0)
            .map(() => Math.ceil(Math.random() * 6))
    }

    const [dice, setDice] = React.useState(generateAllNewDice())

    const diceElements = dice.map((num, index) => (
        <Die key={index} value={num} />
    ))

    function rollDice() {
        setDice(generateAllNewDice())
    }

     return (
        <main>
            <div className="dice-container">
                {/* <Die value={1} />
                <Die value={2} />
                <Die value={3} />
                <Die value={4} />
                <Die value={5} />
                <Die value={6} />
                <Die value={2} />
                <Die value={4} />
                <Die value={1} />
                <Die value={3} /> */}
                {diceElements}
            </div>

        <button className="roll-dice" onClick={rollDice}>Roll Dice!</button>

        </main>
    )
}