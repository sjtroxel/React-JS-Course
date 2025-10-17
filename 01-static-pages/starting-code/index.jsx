import { createRoot } from "react-dom/client"

createRoot(document.querySelector("#root")).render(<ul>
    <li>I am excited to learn React after already working with Angular in my bootcamp!</li>
    <li>But I am nervous that I can't learn React very well all on my own.</li>
    <li>Wish me good luck, please!</li>
</ul>)

// const root = createRoot(document.getElementById("root"))

// const root = createRoot(document.querySelector("#root"))
// root.render(<h2>I'm going to try and learn how to do React!</h2>)