import React, { Component } from 'react'
import TokenService from '../../services/token-service'
import { Button, Input } from '../../helpers/Helpers'
import AuthApiService from '../../services/auth-api-service'
import './LoginForm.css'


export default class LoginForm extends Component {

    static defaultProps = {
        onLoginSuccess: () => {}
    }
    
    state = { error: null }

    handleSubmitJwtAuth = event => {
        event.preventDefault()
        const { user_name, password } = event.target
        
        AuthApiService.postLogin({
            user_name: user_name.value,
            password: password.value,
        })
        .then(response => {
            user_name.value = ''
            password.value = ''
            TokenService.saveAuthToken(response.authToken)
            this.props.onLoginSuccess()
        })
        .catch(response => {
            this.setState({ error: response.error })
        })
    }

    render() {
        const { error } = this.state
        return (
            <section>
                <form 
                    className='login-form'
                    onSubmit={this.handleSubmitJwtAuth}
                    >
                    <label className='Username'>Username</label>
                        <Input
                            type='text' 
                            name='user_name' 
                            className='user_name_input'
                            required>
                        </Input>        
                    <label className='Password'>Password</label>
                        <Input 
                        type='password' 
                        name='password' 
                        className='password_input'
                        required>
                        </Input>    
                    <Button type='submit' className='submitButton' >
                        Login
                    </Button>
                    <div role='alert'>
                        {error && <p className='Error-message'>{error}</p>}
                    </div>   
                </form>
            </section>
        )
    }
}


