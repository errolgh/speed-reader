import { Link } from 'react-router-dom'

export default function Reader ( { words, handleSpeedReader, word, handleSpeed } ) {
    return(
        <div className="reader-container">
            <div className="word-viewer">
                <p>{word}</p>
            </div>
            <span>Set Speed:</span>
            <span>(in milliseconds)</span>
            <input type="number" onChange={handleSpeed} min="30" max="2000"/>

            <button onClick={handleSpeedReader} className="start-over">Should be a play button and progress slider but, hey not bad for a couple hours</button>

            <Link to="/">
                <button style={{"color":"blue"}}className="start-over">Back</button>
            </Link>

        </div>
    )
}
