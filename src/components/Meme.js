import React, {useState, useEffect} from 'react'
import '../assets/Meme.css'
import memeData from '../assets/MemesData'


function Meme(){
    const [allMemeImages, setAllMemeImages] = useState(memeData);
    const[memeImage, updateMeme] = useState('https://i.imgflip.com/30b1gx.jpg')
    const [memeDetails, setMemeDetails] = useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    })

    useEffect(()=>{
        fetch(`https://api.imgflip.com/get_memes`).
        then(response => response.json()).
        then(data => setAllMemeImages(data))
    },[])
    
    function getMemeImage(){
        const memes = allMemeImages.data.memes;
        let url = memes[Math.floor(Math.random() * memes.length)].url;
        setMemeDetails(prevData => {
            return {
                ...prevData,
                randomImage: url
            }
        })
    }
    function handleChange(event){
        console.log(event.target.name);
        const {name, value, checked, type} = event.target;
        setMemeDetails(prevData => {
            return {
                ...prevData,
                [name]: type==='checkbox'?checked:value
            }
        })

    }
    
    return (
        <section id="meme-section" className='main-section t-secondary'>
            <div className='form-container form grid grid-1 gap-20 '>
                <div className='form-inputs grid grid-2 gap-20'>
                    <input onChange={handleChange} name='topText' type='meme-text top' id='first-text' value={memeDetails.topText}></input>
                    <input onChange={handleChange} name='bottomText' type='meme-text bottom' id='last-text' value={memeDetails.bottomText}></input>
                </div>
                <button onClick={getMemeImage} className='t-primary bg-purple submit-button meme-submit'>
                    Get a new meme image
                </button>
            </div>
            <div className='meme-output main-section'>
                <h2 className='meme-text top t-primary'>{memeDetails.topText}</h2>
                <h2 className='meme-text bottom t-primary'>{memeDetails.bottomText}</h2>
               <img src={memeDetails.randomImage} id="meme-image" className='m-auto'/>
            </div>
        </section>
    )
}


export default Meme