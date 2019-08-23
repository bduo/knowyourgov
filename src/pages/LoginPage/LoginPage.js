import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import './LoginPage.css'
import UserApiService from '../../services/user-api-service'
import { AppContext } from '../../components/AppProvider/AppProvider';


export default class LoginPage extends Component {
    static defaultProps = {
        location: {},
        history: {
          push: () => {},
        },
    }

    state = {
        address: '',
        city: '',
        stateCode: '',
    }

    componentDidMount() {
        const getUserObj = localStorage.getItem('street_address, city, state_code') === 'true';
        const user = getUserObj ? localStorage.getItem('user'): '';
        this.setState({ 
            address: user.street_address, 
            city: user.city,
            state_code: user.state_code,
        })
    }

   

    static contextType = AppContext;
    
    handleLoginSuccess = (userId) => {
        const { location, history } = this.props
        const destination = (location.state || {}).from || `/dashboard/${userId}`
        history.push(destination)
        
        window.location.reload()
        UserApiService.getUser(userId)
        .then(user => {JSON.parse(localStorage.setItem('user', JSON.stringify(user)))})
        .then(this.componentDidMount)
        this.context.actions.handleSearch(
            this.state.address, 
            this.state.city, 
            this.state.stateCode
        )
            this.setState({address: ''})
            this.setState({city: ''})
            this.setState({stateCode: ''})
            history.push('/dashboard/:user_id')
    }
        
        // on loginSuccess go to civicinfo with Users address information
        // Routine that gets Rep's information currently does the history push
        // have to refactor the guest push from App Provider to the searchbox
    

    render() {
        return (
            <section className="Login-page">
                <h1 className="page-title">Login</h1>
                <LoginForm onLoginSuccess={this.handleLoginSuccess}/>
            </section>
        )
    }
}

