import '../assets/Meme.css'


function Meme(){
    return (
        <section id="meme-section" className='main-section t-secondary'>
            <div className='form-container form grid grid-1 gap-10 '>
                <div className='form-inputs grid grid-2 gap-10'>
                    <input type='text' id='first-text'></input>
                    <input type='text' id='last-text'></input>
                </div>
                <button className='t-primary bg-purple submit-button meme-submit'>
                    Get a new meme image
                </button>
            </div>
            <div className='meme-output'>

            </div>
        </section>
    )
}


export default Meme