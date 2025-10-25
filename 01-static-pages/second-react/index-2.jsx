import { createRoot } from "react-dom/client"
// import { Fragment } from "react"

const root = createRoot(document.getElementById("root"))

/** Mini Challenge:
 * 
 * Move the `header` element from the Page component into 
 * its own component called "Header"
 * 
 * Then render an instance of the Header component inside
 * the Page component where the `header` used to be.
 */

/** Challenge:
 * Move the 'main' element into its own component called "MainContent"
 * and render that component inside the Page component.
 * 
 * Do the same with the 'footer' element, moving it into a new
 * component called "Footer".
 */

/**
 * Challenge:
 * 
 * - Add a `nav` > `ul` > `li` (x3). The 3 items should say:
 *   "Pricing", "About", and "Contact"
 */


const ul = document.createElement("ul")
ul.className = ""

function Page() {
    return (
        <>
            <Header />
            <MainContent />
            <Footer />
        </>
    )
}

root.render(
     <Page />
)

export default Page

function Header() {
    return (
        <>
            <header>
                <img src="react-logo.png" width="40px" alt="React logo" />
                <nav>
                    <ul className="nav-list">            
                        <li>Pricing</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>
        </> )
}
function MainContent() {
    return (
        <>
           <section>
            <h1>Why I Am Learning React</h1>
            <ol>
                <li>I learned Angular, but I think it's necessary to know more than one JS framework to get a job.</li>
                <li>React is the most widely used JavaScript framework so far as I know and lots of employers use it.</li>
            </ol>
            </section>
        </> )
}
function Footer() {
    return (
        <>
             <footer>
                <small>© 2025 sjtroxel development. All rights reserved!</small>
            </footer>
        </> )
}