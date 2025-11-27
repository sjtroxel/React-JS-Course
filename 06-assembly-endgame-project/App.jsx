import React from "react"
import { languages } from "./languages"


/**
 * Goal: Build out the main parts of our app!
 * 
 * Challenge: 
 * Display the keyboard ⌨️. Use <button>s for each letter
 * since it'll need to be clickable and tab-accessible.
 */

/**
 * Goal: Allow the user to start guessing the letters
 * 
 * Challenge: Create a new array in state to hold the user's
 * guessed letters. When the user chooses a letter, add that
 * letter to this state array.
 * Don't worry about whether or not it was a right or wrong
 * guess quite yet.
 */


export default function AssemblyEndgame() {
    const [currentWord, setCurrentWord] = React.useState("react")
    console.log(setCurrentWord)
    const [guessedLetters, setGuessedLetters] = React.useState([])
    console.log(guessedLetters)

    function addGuessedLetter(letter) {
        setGuessedLetters(prevLetters => 
            prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
        )
    }

    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    const languageElements = languages.map(lang => {
        const styles = {
            backgroundColor: lang.backgroundColor,
            color: lang.color
        }
        return (
        <span key={lang.name} className="chip" style={styles}>
            {lang.name}
        </span>
    )})

    const letterElements = currentWord.split("").map(
        (letter, index) => (
            <span key={index} className="letter">
                {letter.toUpperCase()}
            </span>
        )
    )

    const keyboardElements = alphabet.split("").map(
        letter => (
            <button key={letter} className="key"
            onClick={() => addGuessedLetter(letter)}
            >
                {letter.toUpperCase()}
            </button>
        )
    )


    return (
        <main>
            <header>
                <h1>Assembly: Endgame</h1>
                <p>Guess the word within 8 attempts to keep the
                    programming world safe from Assembly!!
                </p>
            </header>
            <section className="game-status">
                <h2>You win!</h2>
                <p>Well done! 🍕</p>
            </section>
            <section className="language-chips">
                {languageElements}
            </section>
             <section className="word">
                {letterElements}
            </section>
             <section className="keyboard">
                {keyboardElements}
            </section>
            <button className="new-game">New Game</button>
        </main>
    )
}