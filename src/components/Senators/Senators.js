import React from 'react'
import './Senators.css'
import { AppContext } from '../AppProvider/AppProvider';

function Senators() {
    return (
        <AppContext.Consumer>
            {value => (
                <section className="Senators-section">
                    <div className="Senator1">
                        <h2>{value.state.senator1.name}</h2>
                        <img src={value.state.senator1.photoUrl} alt={value.state.senator1.name}/>
                        <p>{value.state.senator1.party}</p>
                        <a href={value.state.senator1.phones}>{value.state.senator1.phones}</a>
                        <a href={value.state.senator1.urls}>{value.state.senator1.urls}</a>
                        <address>
                            <li>{value.state.senator1Address.line1}</li>
                            <li>{value.state.senator1Address.line2}</li>
                            <li>{value.state.senator1Address.city}</li>
                            <li>{value.state.senator1Address.state}</li>
                            <li>{value.state.senator1Address.zip}</li>
                        </address>
                    </div>
                    <div className="Senator2">
                        <h2>{value.state.senator2.name}</h2>
                        <img src={value.state.senator2.photoUrl} alt={value.state.senator1.name}/>
                        <p>{value.state.senator2.party}</p>
                        <a href={value.state.senator2.phones}>{value.state.senator2.phones}</a>
                        <a href={value.state.senator2.urls}>{value.state.senator2.urls}</a>
                        <address>
                            <li>{value.state.senator2Address.line1}</li>
                            <li>{value.state.senator2Address.line2}</li>
                            <li>{value.state.senator2Address.city}</li>
                            <li>{value.state.senator2Address.state}</li>
                            <li>{value.state.senator2Address.zip}</li>
                        </address>
                    </div>
                </section>
            )}
        </AppContext.Consumer>
        
    )
}

export default Senators