import React from 'react'
import './Senators.css'
import { AppContext } from '../AppProvider/AppProvider';

function Senators() {
    return (
        <AppContext.Consumer>
            {value => (
                <section className="Senators-section">
                    <div className="Senator1">
                        <h2 className="Rep-name">{value.state.senator1.name}</h2>
                        <h3 className="Rep-title">(Senator)</h3>
                        <img src={value.state.senator1.photoUrl} alt={value.state.senator1.name}/>
                        <h4 className="Rep-party">{value.state.senator1.party}</h4>
                        <address className="Rep-address">
                            <li>{value.state.senator1Address.line1}</li>
                            <li>{value.state.senator1Address.line2}</li>
                            <li>{value.state.senator1Address.city}</li>
                            <li>{value.state.senator1Address.state}</li>
                            <li>{value.state.senator1Address.zip}</li>
                            <a href={value.state.senator1.phones} className="Rep-phone">{value.state.senator1.phones}</a>
                            <a href={value.state.senator1.urls} className="Rep-url">{value.state.senator1.urls}</a>
                        </address>
                    </div>
                    <div className="Senator2">
                        <h2 className="Rep-name">{value.state.senator2.name}</h2>
                        <h3 className="Rep-title">(Senator)</h3>
                        <img src={value.state.senator2.photoUrl} alt={value.state.senator1.name}/>
                        <h4 className="Rep-party">{value.state.senator2.party}</h4>
                        <address className="Rep-address">
                            <li>{value.state.senator2Address.line1}</li>
                            <li>{value.state.senator2Address.line2}</li>
                            <li>{value.state.senator2Address.city}</li>
                            <li>{value.state.senator2Address.state}</li>
                            <li>{value.state.senator2Address.zip}</li>
                            <a href={value.state.senator2.phones} className="Rep-phone">{value.state.senator2.phones}</a>
                            <a href={value.state.senator2.urls} className="Rep-url">{value.state.senator2.urls}</a>
                        </address>
                    </div>
                </section>
            )}
        </AppContext.Consumer>
        
    )
}

export default Senators