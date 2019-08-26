import React, { Component } from 'react'
import Promise from 'promise'
import UserApiService from '../../services/user-api-service'
import history from '../../history'
 
export const AppContext = React.createContext()

class AppProvider extends Component {
    
    state = {
        congress1: [],
        congress2: [],
        senator1: [],
        senator2: [],
        governor: [],
        isSubmitted: false,
        error: null,
        user: {},
        isLoggedIn: false,
    }

    checkStatus = (response) => {
        if (response.ok) {
          return Promise.resolve(response);
        } else {
          return Promise.reject(new Error(response.statusText));
        }
    }
    
    parseJSON = (response) => {
        return response.json();
    }

    // Gets user info from database, extracts the address and feeds it to the fetch calls in handleSearch() 
    handleLoginSuccess = (userId) => {
        UserApiService.getUser(userId)
        .then(user => this.setState({
            user
        }, () => {
            this.onUserLoad()
        }));
        history.push('/dashboard/:user_id')
    }
    
    onUserLoad = () => {
        this.handleSearch(this.state.user.street_address, this.state.user.city, this.state.user.state_code)
    }

    handleSearch = (address, city, stateCode)  => {
        const API_KEY = process.env.REACT_APP_CIVIC_API_KEY;
        const url1 = `https://www.googleapis.com/civicinfo/v2/representatives?address=${address} ${city}, ${stateCode}&includeOffices=true&roles=legislatorLowerBody&key=${API_KEY}`;
            fetch(url1)
                .then(this.checkStatus)
                .then(this.parseJSON) 
                .then(data => {
                    this.setState({
                        isSubmitted: true,
                        congress1: data.officials[0],
                        congress2: data.officials[1],
                    })
                })
                .catch(error => console.error('Error:', error))
        
        const url2 = `https://www.googleapis.com/civicinfo/v2/representatives?address=${address} ${city}, ${stateCode}&includeOffices=true&roles=legislatorUpperBody&key=${API_KEY}`;
            fetch(url2)
                .then(this.checkStatus)
                .then(this.parseJSON) 
                .then(data => {
                    this.setState({
                        isSubmitted: true,
                        senator1: data.officials[0],
                        senator2: data.officials[1],
                    })
                })
                .catch(error => console.error('Error:', error))
    
        const url3 = `https://www.googleapis.com/civicinfo/v2/representatives?address=${address} ${city}, ${stateCode}&includeOffices=true&roles=headOfGovernment&key=${API_KEY}`;
            fetch(url3)
                .then(this.checkStatus)
                .then(this.parseJSON) 
                .then(data => {
                    this.setState({
                        isSubmitted: true,
                        governor: data.officials[1],
                    })
                })
                .catch(error => console.error('Error:', error))
    }

    render() {
        
        return (
            <AppContext.Provider 
                value={{ 
                    state: {
                        ...this.state
                    },
                    actions: {
                        handleSearch: this.handleSearch,
                        handleLoginSuccess: this.handleLoginSuccess
                    },
                }}>   
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

export default AppProvider