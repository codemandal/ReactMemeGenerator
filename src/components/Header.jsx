﻿import trollFace from "../images/troll_face.png"

export default function Header() {
    return (
        <header className="header">
            <img
                src={trollFace}
            />
            <h1>Meme Generator</h1>
        </header>
    )
}