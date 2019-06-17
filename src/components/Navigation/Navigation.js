import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import'./Navigation.css'

export default class Navigation extends Component {

    handleUserLogout = () => {

    }

    renderLoginLink() {
        return (
            <div className="Navigation_not_logged_in">
                <Link
                    to='/login'>
                    Login
                </Link>
                <Link 
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
                    <h1>KnowYourGov</h1>
                    
                </nav>

            </>
        )
    }
}