import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import'./Navigation.css'
import history from '../../history'
import TokenService from '../../services/token-service'
import logo from '../../images/logo.svg'
import { AppContext } from '../../components/AppProvider/AppProvider'

export default class Navigation extends Component {

    handleUserLogout = () => {
        TokenService.clearAuthToken()
        history.push('/')
        window.location.reload()
    }

    static contextType = AppContext;

    renderLoginLink = () => {
        return (
            <div className='Navigation_not_logged_in'>
                <Link
                    to='/login'>
                    Login
                </Link>
                <Link
                    className='Nav-space' 
                    to='/register'>
                    Register
                </Link>
            </div>
        )
    }

    renderLogoutLink = () => {
        return (
            <div className='Navigation_logged_in'>
                <Link to='/'
                    onClick={this.handleUserLogout}
                    >
                    Logout         
                </Link>
            </div>
        )
    }
    
    render() {
        return (
            <nav className='Navigation'>
                <div><Link to='/'><img src={logo} className='logo' alt="KnowYourGov logo"></img></Link></div>
                <ul className='Navigation-items'>
                    { TokenService.hasAuthToken() ? this.renderLogoutLink() : this.renderLoginLink() }
                </ul>
            </nav>
        )
    }
}