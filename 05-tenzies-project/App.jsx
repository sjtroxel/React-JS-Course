import React from 'react'
import Die from './Die'
import {nanoid} from "nanoid"

export default function App() {
    const [dice, setDice] = React.useState(generateAllNewDice())

        // check if the game is won

    function generateAllNewDice() {
        return new Array(10)
            .fill(0)
            .map(() => ({
                value: Math.ceil(Math.random() * 6),
                isHeld: false,
                id: nanoid()
    }))}

    const diceElements = dice.map(dieObj => (
        <Die 
            key={dieObj.id} 
            value={dieObj.value} 
            isHeld={dieObj.isHeld}
            hold={() => hold(dieObj.id)} />
    ))

    function rollDice() {
        setDice(oldDice => oldDice.map(die => {
            return die.isHeld
            ? die                                              // leave held dice alone
            : { ...die, value: Math.ceil(Math.random() * 6) }  // reroll unheld dice
        }))
    }

    /**
     * Challenge: Update the `hold` function to flip
     * the `isHeld` property on the object in the array
     * that was clicked, based on the `id` prop passed
     * into the function.
     * 
     * Hint: as usual, there's more than one way to 
     * accomplish this.
     */  
    
    /**
     * Challenge: Update the `rollDice` function to not just roll
     * all new dice, but instead to look through the existing dice
     * to NOT roll any that are being `held`.
     * 
     * Hint: this will look relatively similiar to the `hold`
     * function below. When we're "rolling" a die, we're really
     * just updating the `value` property of the die object.
     */

    function hold(id) {
        setDice(oldDice => oldDice.map(die => {
            return die.id === id ? {...die, isHeld: !die.isHeld } : die
        }))
    }

    // function hold(id) {
    // setDice(oldDice => {
    //     return oldDice.map(die => {
    //      return die.id === id ? {...die, isHeld: !die.isHeld } : die
    //     })
    // })}

     return (
        <main>
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
                {diceElements}
            </div>

        <button className="roll-dice" onClick={rollDice}>Roll Dice!</button>

        </main>
    )
}

    /**
     * Critical thinking time!
     * 
     * We want to indicate to the user that the game is over
     * if (1) all the dice are held, and (2) all the dice have
     * the same value.
     * 
     * How might we do this? Some questions to consider:
     * 
     * 1. Do we need to save a `gameWon` value in state? If so, why?
     *    If not, why not?
     * 
     *      No, we do not. 
     * 
     * 2. Do we need to create a side effect to synchronize the `gameWon`
     *    value (whether it's in state or not) with the current state of 
     *    the dice?
     * 
     *      If we answered yes to (1) then yes, a side effect would 
     *      be needed. But without a gameWon value in state, no side
     *      effect is needed.
     * 
     * Conclusion:
     * 
     *      We can derive the gameWon status based on the condition(s)
     *      of the current dice state on every render.
     * 
     */