import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))


/**
 * Challenge:
 * 
 * Using flexbox, line up the 'li's' horizontally and put them inline
 * with the React logo.
 * 
 * For practice's sake, don't select any elements, but use classes
 * for all styling.
 */

/**
 * Challenge:
 * 
 * More the 'width' style off the JSX and into CSS with a dedicated
 * className on the img element, and change the width to 55px instead.
 * 
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
            <header className="header">
                <img src="react-logo.png" alt="React logo" className="nav-logo"/>
                <nav>
                    <ul className="nav-list">            
                        <li className="nav-list-item">Pricing</li>
                        <li className="nav-list-item">About</li>
                        <li className="nav-list-item">Contact</li>
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
                <li className="list-reason">I learned Angular, but I think it's necessary to know more than one JS framework to get a job.</li>
                <li className="list-reason">React is the most widely used JavaScript framework so far as I know and lots of employers use it.</li>
            </ol>
            </section>
        </> )
}
function Footer() {
    return (
        <>
             <footer className="footer">
                <small>© 2025 sjtroxel development. All rights reserved!</small>
            </footer>
        </> )
}