// import Joke from "./components/Joke"

export default function App() {
    /**
     * Challenge: manually turn this string array into an array of
     * JSX elements by surrounding each ninja turtle with an <h2> element.
     */

        // **MY WAY**
    const ninjaTurtles = ["Donatello", "Michaelangelo", "Raphael", "Leonardo"]
    const h2NinjaTurtles = ninjaTurtles.map(ninjaTurtles =>
    //    `<h2>${ninjaTurtles}</h2>`
       <h2>{ninjaTurtles}</h2>
    )
    return (
        <main>
            {h2NinjaTurtles}
        </main>
    )

        // **BOB'S WAY
    // const ninjaTurtles = [
    //     <h2>Donatello</h2>,
    //     <h2>Michaelangelo</h2>,
    //     <h2>Raphael</h2>,
    //     <h2>Leonardo</h2>,
    // ]
    // return (
    //     <main>
    //         {ninjaTurtles}
    //     </main>
    // )

    // const jsx = <h1>Donatello</h1>
    // console.log(jsx)
    // return (
    //     <main>
            
    //     </main>
    // )
}


        // <Joke
        //     setup="Setup: I got my daughter a fridge for her birthday."
        //     punchline="Punchline: I can't wait to see her face light up when she opens it."
        //     isPun={true} />
        // <Joke
        //     setup="Setup: How did the hacker escape the police?"
        //     punchline="Punchline: He just ransomware!"
        //     isPun={true} />
        // <Joke
        //     setup="Setup: Why don't pirates travel on mountain roads?"
        //     punchline="Punchline: Scurvy."
        //     isPun={true} />
        // <Joke
        //     setup="Setup: Why do bees stay in the hive in the winter?"
        //     punchline="Punchline: Swarm."
        //     isPun={true} />
        // <Joke
        //     setup="Setup: What's the best thing about Switzerland?"
        //     punchline="Punchline: I don't know, but the flag is a big plus!"
        //     isPun={!!false} />
        // <Joke 
        //     punchline={"Punchline: It's hard to explain puns to kleptomaniacs because they take things literally."}
        //     upvotes={10}
        //     isPun={true}
        //     comments={[
        //         {author: "", text: "", title: ""},
        //         {author: "", text: "", title: ""},
        //     ]} />