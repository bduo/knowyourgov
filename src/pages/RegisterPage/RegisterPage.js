import React, { Component } from 'react'
import RegisterForm from '../../components/RegisterForm/RegisterForm'
import './RegisterPage.css'

export default class RegisterPage extends Component {
    static defaultProps = {
        history: {
          push: () => {},
        },
    }
    
    handleRegistrationSuccess = user => {
        const { history } = this.props
        history.push('/login')
    }

    render() {
        return (
            <section className="Register-page">
                <h1>Register</h1>
                <RegisterForm onRegistrationSuccess={this.handleRegistrationSuccess} />
            </section>
        )
    }
}
