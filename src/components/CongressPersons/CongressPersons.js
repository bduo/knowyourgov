import React from 'react'
import './CongressPersons.css'
import { AppContext } from '../AppProvider/AppProvider';

function CongressPersons() {
    return (
        <AppContext.Consumer>
            {value => (
                <section className="CongressPersons-section">
                    <div className="Congress1">
                        <h2>{value.state.congress1.name}</h2>
                        <img src={value.state.congress1.photoUrl} alt={value.state.congress1.name} />
                        <p>{value.state.congress1.party}</p>
                        <a href={value.state.congress1.phones}>{value.state.congress1.phones}</a>
                        <a href={value.state.congress1.urls} target="_blank" rel="noopener noreferrer">{value.state.congress1.urls}</a>
                        <address>
                            <li>{value.state.congress1Address.line1}</li>
                            <li>{value.state.congress1Address.line2}</li>
                            <li>{value.state.congress1Address.city}</li>
                            <li>{value.state.congress1Address.state}</li>
                            <li>{value.state.congress1Address.zip}</li>
                        </address>
                        <p>{value.state.congress1.emails}</p>
                    </div>
                    <div className="Congress2">
                        <h2>{value.state.congress2.name}</h2>
                        <img src={value.state.congress2.photoUrl} alt={value.state.congress2.name} />
                        <p>{value.state.congress2.party}</p>
                        <a href={value.state.congress2.phones}>{value.state.congress2.phones}</a>
                        <a href={value.state.congress2.urls} target="_blank" rel="noopener noreferrer">{value.state.congress2.urls}</a>
                        <address>
                            <li>{value.state.congress2Address.line1}</li>
                            <li>{value.state.congress2Address.line2}</li>
                            <li>{value.state.congress2Address.city}</li>
                            <li>{value.state.congress2Address.state}</li>
                            <li>{value.state.congress2Address.zip}</li>
                        </address>
                        <p>{value.state.congress2.emails}</p>
                    </div>
                </section>
            )}
        </AppContext.Consumer>
    )
}

export default CongressPersons