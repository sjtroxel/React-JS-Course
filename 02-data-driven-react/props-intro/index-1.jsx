import ReactDOM from 'react-dom/client';

function App() {
    const firstName = "Joe"
    const lastName = "Schmoe"
    const hours = new Date().getHours() 

    let timeOfDay
    if (hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else if (hours < 21) {
        timeOfDay = "evening"
    } else {
        timeOfDay = "night"
    }

    /**
     * Challenge: finish off the h1 below to say "Hello, Joe Schmoe!"
     */

    /**
     * Challenge: change the hard-coded "night" to display the
     * text we determined from the logic above!
     */

    return (
        <>
        <h1>Hello, {firstName} {lastName}!</h1>
        <p>It is currently {hours}!</p>
        <p>Good {timeOfDay}, sir!</p>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

export default App