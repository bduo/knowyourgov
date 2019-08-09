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
        const { user_name, password, street_address, city, state_code } = event.target
       AuthApiService.postUser({
           user_name: user_name.value,
           password: password.value,
           street_address: street_address.value,
           city: city.value,
           state_code: state_code.value
       })
        .then( () => {
            user_name.value = ''
            password.value = ''
            street_address.value = ''
            city.value = ''
            state_code.value = ''
            this.props.onRegistrationSuccess()
        })
        .catch( response => { 
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
                    <label className='street_address'>Street Address</label>
                        <Input
                        type='text'
                        name='street_address' 
                        required 
                        id='RegisterForm_street_address'>
                        </Input>
                    <label className='city'>City</label>
                        <Input
                        type='text'
                        name='city' 
                        required 
                        id='RegisterForm_city'>
                        </Input>
                    <label className='state_code'>State</label>
                        <Input
                        type='text'
                        name='state_code' 
                        required 
                        id='RegisterForm_state_code'>
                        </Input>       
                    <Button type='submit' className='submitButton'>
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