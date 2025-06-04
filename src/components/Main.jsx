import { useState, useEffect } from "react"

export default function Main() {
    const [allMemes, setAllMemes] = useState({})
    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imageUrl:"http://i.imgflip.com/1bij.jpg"

    })
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))

    }, [])
    function handleChange(event) {
        const {name, value } = event.currentTarget
        setMeme((preMeme) => ({
            ...preMeme,
            [name]: value,
           
        }))

    }
    function handleClick() {
        const randomIndex = Math.floor(Math.random() * allMemes.length);
       
        setMeme((preMeme) => ({
            ...preMeme,
          imageUrl: allMemes[randomIndex].url
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
                <button onClick={handleClick}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}