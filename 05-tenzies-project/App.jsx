import React from 'react'
import Die from './Die'
import {nanoid} from "nanoid"
import Confetti from "react-confetti"

export default function App() {
    function generateAllNewDice() {
        return new Array(10)
            .fill(0)
            .map(() => ({
                value: Math.ceil(Math.random() * 6),
                isHeld: false,
                id: nanoid()
    }))}

    const [dice, setDice] = React.useState(() => generateAllNewDice())
    const [gameWon, setGameWon] = React.useState(false)
    
    /**
     * Challenge:
     * Log "Game won!" to the console only if the 2 winning
     * conditions are met.
     * 
     * 1. all the dice are being held, and
     * 2. all the dice have the same value
     * 
     * For now, no need to even save a variable!
     */

    /**
     * Challenge Part 2:
     * 1.   Create a new `gameWon` variable.
     * 2.   If `gameWon` is true, change the button text to
     *      "New Game" instead of "Roll". 
     */

    /**
     * Challenge:
     * Make the confetti drop when the game is won! 🎉🎊
     */




    const diceElements = dice.map(dieObj => (
        <Die 
            key={dieObj.id} 
            value={dieObj.value} 
            isHeld={dieObj.isHeld}
            hold={() => hold(dieObj.id)} />
    ))

    function rollDice() {
        if (gameWon) {
            // start fresh
            setDice(generateAllNewDice())
            setGameWon(false)
        } else {
            // normal re-roll
        setDice(oldDice => oldDice.map(die => {
            return die.isHeld
            ? die                                              // leave held dice alone
            : { ...die, value: Math.ceil(Math.random() * 6) }  // reroll unheld dice
        }))
        }
    }

    function hold(id) {
        setDice(oldDice => oldDice.map(die => {
            return die.id === id ? {...die, isHeld: !die.isHeld } : die
        }))
    }

    React.useEffect(() => {
        const allHeld = dice.every(die => die.isHeld)
        const firstValue = dice[0].value
        const allSameValue = dice.every(die => die.value === firstValue)

        if (allHeld && allSameValue) {
            setGameWon(true) 
        } else {
            setGameWon(false)
        }
   }, [dice]) 

     return (
        <main>
            {/* Render Confetti component if `gameWon` is true*/}
            {gameWon && <Confetti />}
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
                {diceElements}
            </div>

        <button className="roll-dice" onClick={rollDice}>
            {gameWon ? "New Game!" : "Roll Dice!"}
            </button>
        </main>
    )
}