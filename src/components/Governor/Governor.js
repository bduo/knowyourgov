import React from 'react'
import './Governor.css'
import { AppContext } from '../AppProvider/AppProvider';
import ErrorBoundary from '../ErrorBoundary';
import noImgSvg from '../../images/user.svg';

function Governor() {
    return (
        <AppContext.Consumer>
            {value => (
                <section className='Governor-section'>
                    <ErrorBoundary>
                        <div className='Governor'>
                            <h2 className='Rep-name'>{value.state.governor.name}</h2>
                            <h3 className='Rep-title'>(Governor)</h3>
                            { !value.state.governor.photoUrl ? <img src={noImgSvg} alt={'Stock avatar for representative'} />
                               : <img src={value.state.governor.photoUrl} alt={value.state.governor.name} />
                            }
                            <h4 className='Rep-party'>{value.state.governor.party}</h4>
                            <address className='Rep-address'>
                                <li>{value.state.governorAddress.line1}</li>
                                <li>{value.state.governorAddress.line2}</li>
                                <li>{value.state.governorAddress.city}</li>
                                <li>{value.state.governorAddress.state}</li>
                                <li>{value.state.governorAddress.zip}</li>
                                <a href={value.state.governor.phones} className='Rep-phone'>{value.state.governor.phones}</a>
                                <a href={value.state.governor.urls} target='_blank' rel='noopener noreferrer' className='Rep-url'>{value.state.governor.urls}</a>
                            </address>
                        </div>
                    </ErrorBoundary>
                </section> 
           )} 
        </AppContext.Consumer>
    )
}

export default Governor