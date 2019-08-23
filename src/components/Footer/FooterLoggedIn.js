import React from 'react'
import './FooterLoggedIn.css'


function FooterLoggedIn() {
    return (
        <footer>
            <div className="centerButton">
                <a href='https://vote.gov/' target='_blank' rel='noopener noreferrer'><button className='vote-button'>REGISTER<br></br>TO VOTE</button></a>
            </div>
        </footer>
    )
}


export default FooterLoggedIn