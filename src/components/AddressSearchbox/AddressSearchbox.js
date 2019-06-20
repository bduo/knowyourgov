import React, { Component } from 'react'
import './AddressSearchbox.css'

class AddressSearchbox extends Component {
    state = {
        address: '',
        city: '',
        stateCode: '',
        reps: {}
    }

    // componentDidMount() {
    //     fetch('https://www.googleapis.com/civicinfo/v2/representatives?')

    // }

    handleChange = (event) => {
        const{ name, value } = event.target
        this.setState({
            [name]: value
        })
        // const url = `https://www.googleapis.com/civicinfo/v2/representatives?address=${this.state.address} ${this.state.city}, ${this.state.stateCode}&includeOffices=true&roles=legislatorLowerBody&key=`
       
        // console.log('url', url)
        fetch('https://www.googleapis.com/civicinfo/v2/representatives?address=2512 SE Madison St Portland, OR&includeOffices=true&roles=legislatorLowerBody&key=')
        .then(results => results.json())
        .then(resultsJson => console.log(resultsJson))
    }  

    // 

    handleSubmit = (event) => {
        event.preventDefault()
        console.log('submitted')
        event.target.address = ''
        event.target.city = ''
        event.target.stateCode = ''
    }
    
    
    
    render() {
        return (
            <form className="Address_search_form" onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        name="address"
                        value={this.state.address}
                        placeholder="Enter your street address" 
                        className="Address_searchbox"
                        onChange={this.handleChange} 
                    />
                    <input 
                        type="text"
                        name="city"
                        value={this.state.city} 
                        placeholder="Enter your city" 
                        className="Address_searchbox" 
                        onChange={this.handleChange}
                    />
                    <input 
                        type="text"
                        name="stateCode"
                        value={this.state.stateCode} 
                        placeholder="Enter abbreviated state" 
                        className="Address_searchbox" 
                        onChange={this.handleChange}
                    />
                    <input type="submit" value="FIND YOUR REPS" className="Address_search_submit" />
                      
            </form>
        )
    }
}



export default AddressSearchbox