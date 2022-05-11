import { useEffect, useState } from 'react'
import './App.css'

import md5 from 'md5'
import axios from 'axios'

const baseUrl = `http://gateway.marvel.com/v1/public/comics`
const publicKey = `33f8b1d5369368cdf2cf55ec6cd1fbb0`
const privateKey = `4d45be370d81f5d5fcaee4777969f3b64ecf7d63`
const time = Number(Date.now())
const hash = md5(time + privateKey + publicKey)

function App() {
  useEffect(() => {
    axios.get(baseUrl + `?ts=${time}&apikey=${publicKey}&hash=${hash}`).then(res => console.log(res.data))
  }, [])

  return (
    <div className="App">
      <h1>Marvel</h1>
    </div>
  )
}

export default App
