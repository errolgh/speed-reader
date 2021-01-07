import { Link } from 'react-router-dom'

export default function Feeder ( { handleConsumeWords, handleWordsChange, words } ) {
    return (
        <div className="feeder-container">
            <h3 className="directions">Speed read this awesome lorem text or paste in your own!</h3>
            <textarea spellCheck="false" rows="10" value={words} onChange={handleWordsChange}></textarea>
            <Link to="/reader">
                <button onClick={handleConsumeWords} className="speed-read-submit">Speed Read!</button>
            </Link>
        </div>
    )
}