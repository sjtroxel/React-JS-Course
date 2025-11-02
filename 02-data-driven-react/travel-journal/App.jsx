import Header from "./components/Header"
import Entry from "./components/Entry"
import data from "./data"

export default function App() {
    
    const entryElements = data.map((entry) => {
        return (
            // <Entry
            //     key={entry.id}
            //     img={entry.img}
            //     title={entry.title}
            //     country={entry.country}
            //     googleMapsLink={entry.googleMapsLink}
            //     dates={entry.dates}
            //     text={entry.text}
            // />
            <Entry
                key={entry.id}  // key has to stay - this is specific to React
                {...entry}      // this works but it can be confusing - *too* simplistic
            />
            // <Entry
            //     key={entry.id}  // key has to stay - this is specific to React
            //     entry={entry}   // but the other props can all be replaced with {entry}
            // />
        )
    })
    
    return (
        <>
            <Header />
            <main className="container">
                {entryElements}
            </main>
        </>
    )
}