import React, { Component } from 'react'
import RegisterForm from '../../components/RegisterForm/RegisterForm'
import './RegisterPage.css'
import history from '../../history'

export default class RegisterPage extends Component {
    
    handleRegistrationSuccess = () => {
        history.push('/login')
    }

    render() {
        return (
            <section className="Register-page">
                <h1 className="page-title">Register</h1>
                <RegisterForm onRegistrationSuccess={this.handleRegistrationSuccess} />
            </section>
        )
    }
}
