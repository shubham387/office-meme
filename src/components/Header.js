import '../assets/Header.css'
import logo from '../media/logo.svg'


import React from 'react'

function Header(){
    return (
        <header id="main-header" className='bg-purple'>
            <div className='grid grid-2 header-container'>
                <div className='flex gap-10 logo-section' >
                    <img id='logo' className='logo-image' src={logo} />
                    <span className='index-site'>Meme Generator</span>
                </div>
                <div id="course-section" className='flex t-right'>
                    <span className='course-name'>React Course - Project 3</span>
                </div>
            </div>
        </header>
    )
}


export default Header