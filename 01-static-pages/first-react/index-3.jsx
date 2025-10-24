/**
 * Challenge: set up a new React app from scratch!
 * Hints:
 * 1. Need to import the method to create a new root 
 *    from the "react-dom/client" package)
 * 2. Use that root to render some JSX. For now, just render
 *    an h1 element that says anything you want.
 */

import { createElement } from "react"
import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))

root.render(
    <section>
    <img src="react-logo.png" />
    <h1>This is another element!</h1>
    </section>
)

createElement("div", null, createElement())

// root.render ( 
//     <div>
//     <h1>Is this right?</h1>
//     <p>After a week, I've forgotten everything!</p>
//     </div>
// )