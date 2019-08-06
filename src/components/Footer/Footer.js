import React from 'react'
import './Footer.css'


function Footer() {
    return (
        <footer>
            <div className='column'>
                <a href='https://vote.gov/' target='_blank' rel='noopener noreferrer'><button className='vote-button'>REGISTER<br></br>TO VOTE</button></a>
            </div>
            <p className='column disclaimer'>* Disclaimer: Your address and information will not <br></br>be saved unless you register for an account.</p>
        </footer>
    )
}


export default Footer