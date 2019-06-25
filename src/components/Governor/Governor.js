import React from 'react'
import './Governor.css'
import { AppContext } from '../AppProvider/AppProvider';

function Governor() {
    return (
        <AppContext.Consumer>
            {value => (
                <section className="Governor-section">
                    <div className="Governor">
                        <h2>{value.state.governor.name}</h2>
                        <img src={value.state.governor.photoUrl} alt={value.state.governor.name} />
                        <p>{value.state.governor.party}</p>
                        <a href={value.state.governor.phones}>{value.state.governor.phones}</a>
                        <a href={value.state.governor.urls}>{value.state.governor.urls}</a>
                        <address>
                            <li>{value.state.governorAddress.line1}</li>
                            <li>{value.state.governorAddress.line2}</li>
                            <li>{value.state.governorAddress.city}</li>
                            <li>{value.state.governorAddress.state}</li>
                            <li>{value.state.governorAddress.zip}</li>
                        </address>
                    </div>
                </section> 
           )} 
        </AppContext.Consumer>
    )
}

export default Governor