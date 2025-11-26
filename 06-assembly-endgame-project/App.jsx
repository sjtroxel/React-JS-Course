import React from "react"


/**
 * Project planning:
 * 
 * Questions to ask yourself before writing any code:
 * 
 * - What are the main containers of elements I need
 *   in this app?
 * 
 *      Header
 *      Status Bar/Section  
 *      List of Languages
 *      Word with Blank Letter Spots*      Keys with Clickable Letters
 *      New Game Button
 * 
 * - What values will need to be saved in state vs.
 *   what values can be derived from the state?
 * 
 *      Is the game over or not?
 *      Has the user won or lost?
 *      How many wrong guesses has the user had?
 *      What letters have already been guessed?
 *      What word is the user trying to guess?
 *      Etc.
 * 
 * - How will the user interact with the app? What
 *   events do I need to handle?
 * 
 *      The user will be clicking on the letter keys
 *      which will cause re-renders, i.e. fill in 
 *      missing letters, destroy languages, etc.
 *      Also there is the new game button, which will
 *      only show up when the game is over. 
 */


/**
 * Goal: Build out the main parts of our app!
 * 
 * Challenge: Add a header, with the game title and
 * description. Starting out easy!!
 */


export default function AssemblyEndgame() {
    return (
        <main>
            <header>
                <h1>Assembly: Endgame</h1>
                <p>Guess the word within 8 attempts to keep the programming
                    world safe from Assembly!!
                </p>
            </header>
        </main>
    )
}