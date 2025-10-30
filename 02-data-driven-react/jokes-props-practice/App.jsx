/**
 * Challenge: create a page that displays your favorite jokes
 * - Create a Joke component in its own file.
 * - Import and render 4-5 <Joke /> components
 * - Each Joke should receive a "setup" prop and a "punchline" prop
 *   and render those however you'd like
 * - Use your favorite 2-part jokes (setup & punchline), or check
 *   jokes.md file for some examples.
 * 
 * EXTRA CREDIT:
 * Some jokes are only a punchline with no setup:
 * 
 * E.g.: "It’s hard to explain puns to kleptomaniacs because 
 * they always take things literally."
 * 
 * If you don't pass in a "question" prop, how might you make it only 
 * show the punchline?
 */

import Joke from "./components/Joke"

export default function App() {
    return (
        <>
        <Joke
            setup="Setup: I got my daughter a fridge for her birthday."
            punchline="Punchline: I can't wait to see her face light up when she opens it." />
        <Joke
            setup="Setup: How did the hacker escape the police?"
            punchline="Punchline: He just ransomware!" />
        <Joke
            setup="Setup: Why don't pirates travel on mountain roads?"
            punchline="Punchline: Scurvy." />
        <Joke
            setup="Setup: Why do bees stay in the hive in the winter?"
            punchline="Punchline: Swarm." />
        <Joke
            setup="Setup: What's the best thing about Switzerland?"
            punchline="Punchline: I don't know, but the flag is a big plus!" />
        <Joke 
            punchline="Punchline: It's hard to explain puns to kleptomaniacs because they take things literally."/>
        </>
    )
}