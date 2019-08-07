import React, { Component } from 'react'
import { Button, Input } from '../../helpers/Helpers'
import AuthApiService from '../../services/auth-api-service'
import './RegisterForm.css'

export default class RegisterForm extends Component {
    static defaultProps = {
       onRegistrationSuccess: () => {}
    }

    state = { error: null }
    
    handleSubmit = event => {
        event.preventDefault()
        const { user_name, password } = event.target
       this.setState({ error: null }) 
       AuthApiService.postUser({
           user_name: user_name.value,
           password: password.value,
       })
        .then( user => {
            user_name.value = ''
            password.value = ''
            this.props.onRegistrationSuccess()
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
                className='Register-form'
                onSubmit={this.handleSubmit}>
                    <label className='Username'>Username</label>
                        <Input
                        name='user_name' 
                        type='text'  
                        required 
                        id='RegisterForm_user_name'>
                        </Input>    
                    <label className='Password'>Password</label>
                        <Input
                        type='password'
                        name='password' 
                        required 
                        id='RegisterForm_password'>
                        </Input>    
                    <Button type='submit'>
                        Register
                    </Button>
                    <div role='alert'>
                        {error && <p className='Error-message'>{error}</p>}
                    </div>    
                </form>
            </section>
        )
    }
}