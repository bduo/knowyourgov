import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'


function Footer() {
    return (
        <footer>
            <p className="column disclaimer">* Disclaimer: Your address and information will not be saved unless you register for an account.</p>
            <div className="column">
                <a href="https://vote.gov/" target="_blank"><button className="vote-button">REGISTER<br></br>TO VOTE</button></a>
            </div>
        
        </footer>
    )


}


export default Footer