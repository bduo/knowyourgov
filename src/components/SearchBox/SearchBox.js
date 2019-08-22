import React, { Component } from 'react'
import './SearchBox.css'
import { AppContext } from '../AppProvider/AppProvider';
import history from '../../history'

class SearchBox extends Component {
    
    state = {
        address: '',
        city: '',
        stateCode: '',
    }

    static contextType = AppContext;

    handleChange = (event) => {
        const{ name, value } = event.target
        this.setState({
            [name]: value
        })
    }
 
    handleSubmit = (event) => {
        event.preventDefault()
        this.context.actions.handleSearch(
            this.state.address, 
            this.state.city, 
            this.state.stateCode
        )
            this.setState({address: ''})
            this.setState({city: ''})
            this.setState({stateCode: ''})
            history.push('/guest')
    }
    
    render() {
        return (
            <form id="Address_search_form" onSubmit={this.handleSubmit}>
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
                        placeholder="Enter your state" 
                        className="Address_searchbox" 
                        onChange={this.handleChange}
                    />
                    <input type="submit" value="Find Your Reps" className="Address_search_submit" />
            </form>
        )
        }
    }

export default SearchBox