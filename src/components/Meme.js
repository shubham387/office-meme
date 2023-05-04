import React, {useState} from 'react'
import '../assets/Meme.css'
import memeData from '../assets/MemesData'


function Meme(){
    const [allMemeImages, setAllMemeImages] = useState(memeData);
    const[memeImage, updateMeme] = useState('')


    function getMemeImage(){
        const memes = allMemeImages.data.memes;
        let url = memes[Math.floor(Math.random() * memes.length)].url;
        updateMeme(url);
    }
    
    return (
        <section id="meme-section" className='main-section t-secondary'>
            <div className='form-container form grid grid-1 gap-20 '>
                <div className='form-inputs grid grid-2 gap-20'>
                    <input type='text' id='first-text'></input>
                    <input type='text' id='last-text'></input>
                </div>
                <button onClick={getMemeImage} className='t-primary bg-purple submit-button meme-submit'>
                    Get a new meme image
                </button>
            </div>
            <div className='meme-output main-section'>
               <img src={memeImage} id="meme-image" className='m-auto'/>
            </div>
        </section>
    )
}


export default Meme