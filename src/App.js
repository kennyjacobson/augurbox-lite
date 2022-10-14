import React, { useState } from 'react';

import './App.css';
import {Button, Typography} from '@mui/material'

const answers = [
  "Most Definitely Yes",
  "Cloudy, Try Again Later",
  "No Way",
  "Affirmative",
  "Negative",
  "OK",
  "Why Not?",
  "Not A Chance"
]

function App() {
  const [message, setMessage] = useState("Hi")
  const [buttonText, setButtonText] = useState("Your Answer")

  const getRandomPhrase = () => {
    const i = Math.floor(Math.random() * answers.length)
    console.log(i)
    setMessage(answers[i])
    setButtonText("Your Answer")
  }

  return (
    <div className="App">
      <header className="App-header">
        <Typography sx={{mb:2}} variant='h3'>Ask A Question</Typography>
        <Typography sx={{mb:4}} variant='h1'>{message}</Typography>
        <Button variant="contained" onClick={getRandomPhrase} >{buttonText}</Button>
      </header>
    </div>
  );
}

export default App;
