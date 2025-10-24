// import { createRoot } from "react-dom/client"
// const root = createRoot(document.getElementById("root"))

// root.render(
//     <h1>Hello, React!</h1>
// )


/* 
Challenge - recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element (createElement)
- Give it some textContent
- Give it a class name of "header"
- append it as a child (using `appendChild`) of the div#root

Don't use innerHTML to accomplish any of this.
    
*/

const h1 = document.createElement("h1")
const p1 = document.createElement("p")
h1.textContent = "Hello, React! I'm doing my best!"
p1.textContent = "Trying to really drive home my understanding of this..."
h1.className = "header"
p1.className = "paragraph"
const root = document.getElementById("root")
root.appendChild(h1)
root.appendChild(p1)