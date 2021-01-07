import Nav from './components/Nav'
import Feeder from './components/Feeder'
import Reader from './components/Reader'
import { useState } from 'react'
import { Switch, Route} from 'react-router-dom'

export default function App() {
  
  const initialWords = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus maiores amet modi expedita ipsum suscipit quidem ullam. Nulla modi quod cupiditate mollitia. Ad ullam nostrum nulla eos exercitationem, iure at! Nostrum ut commodi voluptas voluptatem recusandae voluptatum quibusdam, nobis voluptate tempore. Possimus, eaque nemo. Eius delectus non ad earum voluptates.\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Enim in natus recusandae? Repudiandae explicabo dicta pariatur hic exercitationem optio necessitatibus? \n\n Lorem, ipsum.`

  const [ words, setWords ] = useState(initialWords)
  const [ word, setWord ] = useState(words.split(" ")[0])
  const [ speed, setSpeed ] = useState(500)   //speed will be set on the UI

  const handleConsumeWords = e => {
    console.log("we in here", e.target.value)

  }

  const handleWordsChange = e => setWords(e.target.value)

  const handleSpeedReader = () => {
    console.log("we are in the word processor", words)
    //setInterval() setting the next word.
    // clearInterval()
    if(word === words.split(" ")[0]){
      let counter = 0
      let interval = setInterval(() => {
        setWord(words.split(" ")[counter++])
      }, speed)
    } else {
      return
    }
    // clearInterval(interval)
    // if(words.length - 1 === words.split(" ")[counter])
  }

  const handleSpeed = e => {
    // setSpeed(e.target.value)
    console.log(e)
  }

  return (
    <div>
      <Nav />
      <main>
        <section className="landing-page">
            <h2 className="call-to-action">Start reading faster <span className="emphasis-word">today.</span></h2>
            <Switch>
              <Route path="/" exact>
                <Feeder handleConsumeWords={handleConsumeWords} handleWordsChange={handleWordsChange} words={words}/>
              </Route>
              <Route>
                <Reader handleSpeedReader={handleSpeedReader} words={words}  word={word} setSpeed={setSpeed} handleSpeed={handleSpeed} />
              </Route>
            </Switch>
        </section>
      </main>

    </div>
  );
}


// need to add player to speed reader with html audio API
