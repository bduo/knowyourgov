import React, { Component } from 'react'
import { Redirect } from 'react-router'
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
        redirectToGuest: false,
     }

    // componentDidMount() {
    //     this.handleSearch(' ')
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

    handleSearch = (address, city, stateCode, parseJSON) => {
        const urls = [`https://www.googleapis.com/civicinfo/v2/representatives?address=${address} ${city}, ${stateCode}&includeOffices=true&roles=legislatorLowerBody&key=`,
        `https://www.googleapis.com/civicinfo/v2/representatives?address=${address} ${city}, ${stateCode}&includeOffices=true&roles=legislatorUpperBody&key=`,`https://www.googleapis.com/civicinfo/v2/representatives?address=${address} ${city}, ${stateCode}&includeOffices=true&roles=headOfGovernment&key=`]
        
        Promise.all(urls.map(url =>
            fetch(url)
            .then(response => response.json())
            .then(parseJSON) 
            .catch(error => console.log('There was a problem!', error))               
        ))
            .then(data => {
                this.setState({
                    isSubmitted: true,
                    congress1: data[0].officials[0],
                    congress1Address: data[0].officials[0].address[1],
                    congress2: data[0].officials[1],
                    congress2Address: data[0].officials[1].address[0],
                    senator1: data[1].officials[0],
                    senator1Address: data[1].officials[0].address[1],
                    senator2: data[1].officials[1],
                    senator2Address: data[1].officials[1].address[1],
                    governor: data[2].officials[1],
                    governorAddress: data[2].officials[1].address[0],
                    redirectToGuest: true,
            })
          })
          
    }

    
    redirectSearch = () => {
        const redirectToReferrer = this.state.redirectToGuest
        if(redirectToReferrer === true) {
            <Redirect from='/' to='/guest' />
        }
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
                        redirectSearch: this.redirectSearch
                    },
                }}>
                    
                {this.props.children}
            </AppContext.Provider>
        )
    }

}

export default AppProvider