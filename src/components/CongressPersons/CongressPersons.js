import React from 'react'
import './CongressPersons.css'
import { AppContext } from '../AppProvider/AppProvider';

function CongressPersons() {
    return (
        <AppContext.Consumer>
            {value => (
                <section className="CongressPersons-section">
                    <div className="Congress1">
                        <h2 className="Rep-name">{value.state.congress1.name}</h2>
                        <h3 className="Rep-title">(Congressperson)</h3>
                        <img src={value.state.congress1.photoUrl} alt={value.state.congress1.name} />
                        <h4 className="Rep-party">{value.state.congress1.party}</h4>
                        <div className="Address-container">
                            <address className="Rep-address">
                                <li>{value.state.congress1Address.line1}</li>
                                <li>{value.state.congress1Address.line2}</li>
                                <li>{value.state.congress1Address.city}</li>
                                <li>{value.state.congress1Address.state}</li>
                                <li>{value.state.congress1Address.zip}</li>
                                <a href={value.state.congress1.phones} className="Rep-phone">{value.state.congress1.phones}</a>
                                <a href={value.state.congress1.urls} target="_blank" rel="noopener noreferrer" className="Rep-url">{value.state.congress1.urls}</a>
                                <p className="Rep-email">{value.state.congress1.emails}</p>
                            </address>
                        </div>
                        
                    </div>
                    <div className="Congress2">
                        <h2 className="Rep-name">{value.state.congress2.name}</h2>
                        <h3 className="Rep-title">(Congressperson)</h3>
                        <img src={value.state.congress2.photoUrl} alt={value.state.congress2.name} />
                        <h4 className="Rep-party">{value.state.congress2.party}</h4>
                        <address className="Rep-address">
                            <li>{value.state.congress2Address.line1}</li>
                            <li>{value.state.congress2Address.line2}</li>
                            <li>{value.state.congress2Address.city}</li>
                            <li>{value.state.congress2Address.state}</li>
                            <li>{value.state.congress2Address.zip}</li>
                            <a href={value.state.congress2.phones} className="Rep-phone">{value.state.congress2.phones}</a>
                            <a href={value.state.congress2.urls} target="_blank" rel="noopener noreferrer" className="Rep-url">{value.state.congress2.urls}</a> 
                            <p className="Rep-email">{value.state.congress2.emails}</p>
                        </address>
                    </div>
                </section>
            )}
        </AppContext.Consumer>
    )
}

export default CongressPersons