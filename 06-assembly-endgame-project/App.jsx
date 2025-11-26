import React from "react"
import { languages } from "./languages"


/**
 * Goal: Build out the main parts of our app!
 * 
 * Challenge: Build a status section below the header.
 * For now, you can just hard-code in the styles for a
 * winning game, and we'll make it more dynamic later.
 * 
 * Challenge: Create the language chips. Use the 
 * `languages.js` file to pull in the array of languages
 * to use, which contains the language name, background
 * color, and text color:
 * 
 *      Hint for layout: use a flex container that can
 *      wrap to layout the languages.
 * 
 * Challenge: 
 * 1. Save a "currentWord" in state. Initialize as "react".
 * 2. Map over the letters of the word (you'll need to turn 
 *    the string into an array of letters first) and display
 *    each one as a <span>. Capitalize the letters when
 *    displaying them.
 * 3. Style to look like the design. You can get the underline 
 *    effect on the box using `border-bottom`.
 */
 


export default function AssemblyEndgame() {
    const [currentWord, setCurrentWord] = React.useState("react")
    console.log(setCurrentWord)

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
        </main>
    )
}