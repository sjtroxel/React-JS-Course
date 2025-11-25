import React from 'react'
import Die from './Die'
import {nanoid} from "nanoid"
import Confetti from "react-confetti"

export default function App() {
    const buttonRef = React.useRef(null)  

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
     * Allow the user to play a new game when the button is
     * clicked and they've already won!
     */

        
    /**
     * Challenge:
     * Make it so when the game is over, the "New Game" button
     * automatically receives keyboard focus so keyboard users
     * can easily trigger that button without having to tab
     * through all the dice first.
     * 
     * Hints:
     * 1. Focusing a DOM element with the DOMNode.focus() method
     *    requires accessing the native DOM node. What tool have
     *    we learned about that allows us to do that?
     * 
     * 2. Automatically calling the .focus() on a DOM element when
     *    the game is won requires us to synchronize the local
     *    `gameWon` variable with an external system (the DOM). What
     *    tool have we learned about that allows us to do that?
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
            buttonRef.current?.focus() 
        } else {
            setGameWon(false)
        }
   }, [dice]) 

     return (
        <main>
            {/* Render Confetti component if `gameWon` is true*/}
            {gameWon && <Confetti />}
            <div aria-live="polite" className="sr-only">
                {gameWon && <p>Congratuations! You won! Press "New Game" to start again.</p>}
            </div>
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
                {diceElements}
            </div>

        <button className="roll-dice" onClick={rollDice} ref={buttonRef}>
            {gameWon ? "New Game!" : "Roll Dice!"}
            </button>
        </main>
    )
}