import React, { Component } from 'react'
import Promise from 'promise'
 
export const AppContext = React.createContext()

class AppProvider extends Component {
    
    state = {
        congress1: [],
        congress1Address: [],
        congress2: [],
        congress2Address: [],
        senator1: [],
        senator1Address: [],
        senator2: [],
        senator2Address: [],
        governor: [],
        governorAddress: [],
        isSubmitted: false,
        error: null,
     }

    // componentDidUpdate(prevProps, prevState) {
    //     if (prevState.state !== this.state) {
    //         history.push({
    //             pathname: '/guest',
    //             state: { state: 'state'}
    //         });
    //     }
    // }
 
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
    
    handleSearch = (address, city, stateCode)  => {
        const API_KEY = process.env.REACT_APP_CIVIC_API_KEY;
        const url1 = `https://www.googleapis.com/civicinfo/v2/representatives?address=${address} ${city}, ${stateCode}&includeOffices=true&roles=legislatorLowerBody&key=${API_KEY}`;
            fetch(url1)
                .then(this.checkStatus)
                .then(this.parseJSON) 
                .then(this.validateAddressFields)
                .then(data => {
                    this.setState({
                        isSubmitted: true,
                        congress1: data.officials[0],
                        congress2: data.officials[1],
                    })
                })
                .catch(error => console.log('There was a problem!', error))
        
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
                .catch(error => console.log('There was a problem!', error))
    
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
                .catch(error => console.log('There was a problem!', error))
    }

    render() {
        
        return (
            <AppContext.Provider 
                value={{ 
                    state: {
                        ...this.state
                    },
                    actions: {
                        handleSearch: this.handleSearch
                    },
                }}>   
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

export default AppProvider