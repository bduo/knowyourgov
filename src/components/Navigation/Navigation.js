import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import'./Navigation.css'
import TokenService from '../../services/token-service';

export default class Navigation extends Component {

    handleUserLogout = () => {
        TokenService.clearAuthToken()
    }

    renderLoginLink() {
        return (
            <div className="Navigation_not_logged_in">
                <Link
                    to='/login'>
                    Login
                </Link>
                <Link
                    className="Nav-space" 
                    to='/register'>
                    Register
                </Link>
            </div>
        )
    }

    renderLogoutLink() {
        return (
            <div className="Navigation_logged_in">
                <Link
                    onClick={this.handleUserLogout}
                    to='/'>
                    Logout         
                </Link>
            </div>
        )
    }

    render() {
        return (
            <>
                <nav className="Navigation">
                    <h1 className="Logo-text"><Link to='/'>KnowYourGov</Link></h1>
                    <ul className="Navigation-items">
                        {TokenService.hasAuthToken() ? this.renderLogoutLink() : this.renderLoginLink()}
                    </ul>
                </nav>
            </>
        )
    }
}