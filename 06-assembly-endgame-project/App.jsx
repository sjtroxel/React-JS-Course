import React from "react"
import { clsx } from "clsx"
import { languages } from "./languages"


/**
 * Goal: Add in the incorrect guesses mechanism to the game
 * 
 * Challenge:
 * 1. Create a variable `isGameOver` which evaluates to `true`
 *    if the user has guessed incorrectly 8 times. Consider how
 *    we might make this more dynamic if we were ever to add or
 *    remove languages from the languages array.
 * 2. Conditionally render the New Game button only if the game
 *    is over.
 * 
 * Challenge:
 * Conditionally render either the "won" or "lost" statuses
 * from the design, both the text and the styles, based on the
 * new derived variables.
 * 
 * Note: We always want the surrounding `section` to be rendered,
 * so only change the content inside that section. Otherwise the
 * content on the page would jump around a bit too much.
 */
 


export default function AssemblyEndgame() {

    // State values:
    const [currentWord, setCurrentWord] = React.useState("react")
    console.log(setCurrentWord)
    const [guessedLetters, setGuessedLetters] = React.useState([])

    // Derived values:
    const wrongGuessCount = guessedLetters.filter(
        letter => !currentWord.includes(letter)
            ).length
    const isGameWon = currentWord.split("").every(
        letter => guessedLetters.includes(letter))
    const isGameLost = wrongGuessCount >= languages.length - 1
    const isGameOver = isGameWon || isGameLost
    
    

    // Static values:
    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    function addGuessedLetter(letter) {
        setGuessedLetters(prevLetters => 
            prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
        )
    }



    const languageElements = languages.map((lang, index) => {
        const isLanguageLost = index < wrongGuessCount
        const styles = {
            backgroundColor: lang.backgroundColor,
            color: lang.color
        }
        const className = clsx("chip", isLanguageLost && "lost") 
        return (
        <span
            key={lang.name} 
            className={className}
            style={styles}
        >
            {lang.name}
        </span>
    )})

    const letterElements = currentWord.split("").map(
        (letter, index) => (
            <span key={index} className="letter">
                {guessedLetters.includes(letter) ? letter.toUpperCase() : ""}
            </span>
        )
    )

    const keyboardElements = alphabet.split("").map(letter => {
        const isGuessed = guessedLetters.includes(letter)
        const isCorrect = isGuessed && currentWord.includes(letter)
        const isWrong = isGuessed && !currentWord.includes(letter)
        const className = clsx({
            correct: isCorrect,
            wrong: isWrong
        })
        return (
            <button
                key={letter}
                className={className}
                onClick={() => addGuessedLetter(letter)}
            >
                {letter.toUpperCase()}
            </button>
        )
        })

    const gameStatusClass = clsx("game-status", {
        won: isGameWon,
        lost: isGameLost
    })
    
    return (
        <main>
            <header>
                <h1>Assembly: Endgame</h1>
                <p>Guess the word within 8 attempts to keep the
                    programming world safe from Assembly!!
                </p>
            </header>
           <section className={gameStatusClass}>
                {isGameOver ? (
                    isGameWon ? (
                    <>
                        <h2>You win!</h2>
                        <p>Well done! 🍕</p>
                    </>
                ) : (
                    <>
                        <h2>Game over!</h2>
                        <p>You lose! Better start learning Assembly! 😭</p>
                    </>
                )   
                ) : (
                    null
                    )  
                }
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
           {isGameOver && <button className="new-game">New Game</button>}
        </main>
    )
}