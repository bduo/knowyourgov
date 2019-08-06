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
        this.setState({ error: null })
        const { user_name, password } = event.target
        
        AuthApiService.postLogin({
            user_name: user_name.value,
            password: password.value,
        })
            .then(res => {
                user_name.value = ''
                password.value = ''
                TokenService.saveAuthToken(res.authToken)
                this.props.onLoginSuccess()
            })
            .catch(res => {
                this.setState({ error: res.error })
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
                            id='user_name'
                            required>
                        </Input>        
                    <label className='Password'>Password</label>
                        <Input 
                        type='password' 
                        name='password' 
                        id='password'
                        required>
                        </Input>    
                    <Button type='submit' >
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


