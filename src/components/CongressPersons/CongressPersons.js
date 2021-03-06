import React from 'react'
import './CongressPersons.css'
import { AppContext } from '../AppProvider/AppProvider'
import ErrorBoundary from '../ErrorBoundary'
import NoImgSvg from '../../images/user.svg'
import CallButton from '../../images/KYGcallyourrep.svg'
import WebsiteButton from '../../images/KYGwebsite.svg'
import EmailButton from '../../images/KYGemail.svg'
import PhoneIcon from '../../images/KYGphone_icon.svg'
import WebsiteIcon from '../../images/KYGwebsite_icon.svg'
import EmailIcon from '../../images/KYGemail_icon.svg'

// Congresspersons component that consumes representatives data from the AppProvider
function CongressPersons() {
    return (
        <AppContext.Consumer>
            {value => (
                <section className='CongressPersons-section'>
                    <ErrorBoundary>
                        <div className='Congress1'>
                            <h2 className='Rep-name'>{value.state.congress1.name}</h2>
                            <h3 className='Rep-title'>— Congressperson —</h3>
                            { !value.state.congress1.photoUrl ? <img src={NoImgSvg} alt={'Stock avatar for representative'} className='Rep-photo' />
                               : <img src={value.state.congress1.photoUrl} alt={value.state.congress1.name} className='Rep-photo' />
                            }
                            <h4 className='Rep-party'>{value.state.congress1.party}</h4>
                            <address className='Rep-address'>
                                <div className='Phone-link-desktop'>
                                    <img src={PhoneIcon} alt={'phone icon'} className='Phone-icon'/>
                                    <a href={`tel:${value.state.congress1.phones}`} className='Rep-phone'>{value.state.congress1.phones}</a>
                                </div>
                                <a href={`tel:${value.state.congress1.phones}`} ><img src={CallButton} alt={'Call your representative button'} className='Rep-phone-button' /></a>
                                <div className='Website-link-desktop'>
                                    <img src={WebsiteIcon} alt={'website icon'} className='Website-icon'/>
                                    <a href={value.state.congress1.urls} target='_blank' rel='noopener noreferrer' className='Website-link-style' >Website</a>
                                </div>
                                <a href={value.state.congress1.urls} target='_blank' rel='noopener noreferrer' ><img src={WebsiteButton} className='Rep-url-button' alt={'Representatives Website button'}/></a>
                                <div className='Email-link-desktop'>
                                    <img src={EmailIcon} alt={'email icon'} className='Email-icon'/>
                                    <a href={`mailto:${value.state.congress1.emails}`} className='Rep-email-desktop'>Email</a>
                                </div>
                                <a href={`mailto:${value.state.congress1.emails}`} ><img src={EmailButton} className='Rep-email-button' alt={'Email representative button'} /></a>
                            </address>
                        </div>
                    </ErrorBoundary>
                    <ErrorBoundary>   
                        <div className='Congress2'>
                            <h2 className='Rep-name'>{value.state.congress2.name}</h2>
                            <h3 className='Rep-title'>— Congressperson —</h3>
                            { !value.state.congress2.photoUrl ? <img src={NoImgSvg} alt={'Stock avatar for representative'} className='Rep-photo' />
                               : <img src={value.state.congress2.photoUrl} alt={value.state.congress2.name} className='Rep-photo' />
                            }
                            <h4 className='Rep-party'>{value.state.congress2.party}</h4>
                            <address className='Rep-address'>
                                <div className='Phone-link-desktop'>
                                    <img src={PhoneIcon} alt={'phone icon'} className='Phone-icon'/>
                                    <a href={`tel:${value.state.congress2.phones}`} className='Rep-phone'>{value.state.congress2.phones}</a>
                                </div>
                                <a href={`tel:${value.state.congress2.phones}`} ><img src={CallButton} className='Rep-phone-button' alt={'Call your representative button'} /></a>
                                <div className='Website-link-desktop'>
                                        <img src={WebsiteIcon} alt={'website icon'} className='Website-icon'/>
                                        <a href={value.state.congress2.urls} target='_blank' rel='noopener noreferrer' className='Website-link-style' >Website</a>
                                    </div>
                                <a href={value.state.congress2.urls} target='_blank' rel='noopener noreferrer' ><img src={WebsiteButton} className='Rep-url-button' alt={'Representatives Website button'} /></a>
                                <div className='Email-link-desktop'>
                                    <img src={EmailIcon} alt={'email icon'} className='Email-icon'/>
                                    <a href={`mailto:${value.state.congress2.emails}`} className='Rep-email-desktop'>Email</a>
                                </div> 
                                <a href={`mailto:${value.state.congress2.emails}`} ><img src={EmailButton} className='Rep-email-button' alt={'Email representative button'} /></a>
                            </address>
                        </div>
                    </ErrorBoundary> 
                </section>
            )}
        </AppContext.Consumer>
    )
}

export default CongressPersons