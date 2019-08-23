import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import './LoginPage.css'
import UserApiService from '../../services/user-api-service'
import UserService from '../../services/user-service'
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

    static contextType = AppContext;
    
    handleLoginSuccess = (userId) => {
        const { location, history } = this.props
        const destination = (location.state || {}).from || `/dashboard/${userId}`
        history.push(destination)
        
        // window.location.reload()
        UserApiService.getUser(userId)
        .then(user => UserService.setUserObj(user))
        .then(user => Object.assign({}, ...Object.keys(user).map(res => ({street_address: user.street_address, city: user.city, state_code: user.state_code})))
        
        
        )
        
        
        // .then( (addRes) = {
        //     let addRes = this.context.actions.handleSearch(UserService.getUserAddress(address))

        // })
        
        // .then( address => {
        //     this.setState({address: address.street_address})
        //     this.setState({city: address.city})
        //     this.setState({stateCode: address.state_code})})
        
        //     history.push('/dashboard/:user_id')
        // .then(/* setState */)
       
            
    }
        
        /* Search for the reps using the user address handleSearch(getUserAddress())*/
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

