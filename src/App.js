import React from 'react'
import Header from './components/Header'
import Meme from './components/Meme'
import './App.css'

function App () {
  return (
    <section id="App" className='App'>
      <Header />
      <main id='main-section' className='container'>
        <Meme />
      </main>
    </section>
  )
}


export default App