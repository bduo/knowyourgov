import React, { Component } from 'react'
import TokenService from '../../services/token-service'
import { Button, Input } from '../../helpers/Helpers'
import './RegisterForm.css'

export default class RegisterForm extends Component {
    static defaultProps = {
       onRegistrationSuccess: () => {}
    }

    state = { error: null }
    
    handleSubmit = event => {
        event.preventDefault()
        const { user_name, password } = event.target

        TokenService.saveAuthToken(
            TokenService.makeBasicAuthToken(user_name.value, password.value)
        )

        user_name.value = ''
        password.value = ''
        this.props.onRegistrationSuccess()
    }

    render() {
        const { error } = this.state
        return (
            <section>
                <form 
                className="Register-form"
                onSubmit={this.handleSubmit}>
                    <div role="alert">
                        {error && <p className="red">{error}</p>}
                    </div>
                    <label className="Username">Username:
                        <Input
                        name="user_name" 
                        type="text"  
                        required 
                        id="RegisterForm_user_name">
                        </Input>    
                    </label>
                    <label className="Password">Password:
                        <Input
                        type="password"
                        name="password" 
                        required 
                        id="RegisterForm_password">
                        </Input>    
                    </label>
                    <Button type="submit">
                        Register
                    </Button>    
                </form>
            </section>
        )
    }
}