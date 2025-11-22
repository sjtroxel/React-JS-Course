import React from "react"

export default function Main() {
    const [meme, setMeme] = React.useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = React.useState([])
    
    React.useEffect(() => {
        fetch(`https://api.imgflip.com/get_memes`)
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])
    
    /**
     * Challenge: Get a random image from the array of
     * allMemes when the user clicks the button. Once
     * you've gotten a random image from the array, make
     * sure to write the code that will display that
     * random meme image to the page.
     */

    function getMemeImage() {
        // get a random number from 0 to array.length
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        // use the random number to get a random meme obj from the array
        const newMemeurl = allMemes[randomNumber].url
        // set state
        setMeme (prevMeme => ({
            ...prevMeme,
            imageUrl: newMemeurl
        }))
    }

    function handleChange(event) {
        const {value, name} = event.currentTarget
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                </label>
                <button onClick={getMemeImage}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}