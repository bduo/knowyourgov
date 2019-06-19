import React, { Component } from 'react'
import TokenService from '../../services/token-service'
import { Button, Input } from '../../helpers/Helpers'
import './LoginForm.css'


export default class LoginForm extends Component {
    
    static defaultProps = {
        onLoginSuccess: () => {}
    }
    
    state = { error: null }
    
    handleSubmitBasicAuth = event => {
        event.preventDefault()
        const { user_name, password } = event.target
        
        TokenService.saveAuthToken(
           TokenService.makeBasicAuthToken(user_name.value, password.value)
        )

        user_name.value = ''
        password.value = ''
        this.props.onLoginSuccess()
    }
    
    render() {
        const { error } = this.state
        return (
            <section>
                <form 
                    className="login-form"
                    onSubmit={this.handleSubmitBasicAuth}
                    >
                    <div role="alert">
                        {error && <p className="red">{error}</p>}
                    </div>    
                    <label className="Username">Username:
                        <Input
                            type="text" 
                            name="user_name" 
                            id="LoginForm_user_name"
                            required>
                        </Input>        
                    </label>
                    <label className="Password">Password:
                        <Input 
                        type="password" 
                        name="password" 
                        id="LoginForm_password"
                        required>
                        </Input>    
                    </label>
                    <Button type="submit">
                        Login
                    </Button>    
                </form>
            </section>
        )
    }
}