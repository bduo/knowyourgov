import React from 'react'
import './Governor.css'
import { AppContext } from '../AppProvider/AppProvider'
import ErrorBoundary from '../ErrorBoundary'
import noImgSvg from '../../images/user.svg'
import CallButton from '../../images/KYGcallyourrep.svg'
import WebsiteButton from '../../images/KYGwebsite.svg'
import EmailButton from '../../images/KYGemail.svg'
import PhoneIcon from '../../images/KYGphone_icon.svg'
import WebsiteIcon from '../../images/KYGwebsite_icon.svg'
import EmailIcon from '../../images/KYGemail_icon.svg'

// Governor component that consumes representative data from the AppProvider
function Governor() {
    return (
        <AppContext.Consumer>
            {value => (
                <section className='Governor-section'>
                    <ErrorBoundary>
                        <div className='Governor'>
                            <h2 className='Rep-name'>{value.state.governor.name}</h2>
                            <h3 className='Rep-title'>— Governor —</h3>
                            { !value.state.governor.photoUrl ? <img src={noImgSvg} alt={'Stock avatar for representative'} className='Rep-photo' />
                               : <img src={value.state.governor.photoUrl} alt={value.state.governor.name} className='Rep-photo' />
                            }
                            <h4 className='Rep-party'>{value.state.governor.party}</h4>
                            <address className='Rep-address'>
                                <div className='Phone-link-desktop'>
                                    <img src={PhoneIcon} alt={'phone icon'} className='Phone-icon'/>
                                    <a href={`tel:${value.state.governor.phones}`} className='Rep-phone'>{value.state.governor.phones}</a>
                                </div>
                                <a href={`tel:${value.state.governor.phones}`} ><img src={CallButton} className='Rep-phone-button' alt={'Call your representative button'} /></a>
                                <div className='Website-link-desktop'>
                                    <img src={WebsiteIcon} alt={'website icon'} className='Website-icon'/>
                                    <a href={value.state.governor.urls} target='_blank' rel='noopener noreferrer' className='Website-link-style' >Website</a>
                                </div>
                                <a href={value.state.governor.urls} target='_blank' rel='noopener noreferrer' ><img src={WebsiteButton} className='Rep-url-button' alt={'Representatives Website button'} /></a> 
                                <div className='Email-link-desktop'>
                                    <img src={EmailIcon} alt={'email icon'} className='Email-icon'/>
                                    <a href={`mailto:${value.state.governor.emails}`} className='Rep-email-desktop'>Email</a>
                                </div>
                                <a href={`mailto:${value.state.governor.emails}`} ><img src={EmailButton} className='Rep-email-button' alt={'Email representative button'} /></a>
                            </address>
                        </div>
                    </ErrorBoundary>
                </section> 
           )} 
        </AppContext.Consumer>
    )
}

export default Governor