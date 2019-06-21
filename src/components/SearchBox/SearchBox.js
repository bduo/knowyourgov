import React, { Component } from 'react'
import './SearchBox.css'

class SearchBox extends Component {
    state = {
        address: '',
        city: '',
        stateCode: '',
    }

    handleChange = (event) => {
        const{ name, value } = event.target
        this.setState({
            [name]: value
        })
        console.log(name, value)
    }
 
    handleSubmit = (event) => {
        event.preventDefault()
        console.log('submitted')
        this.props.handleSearch(this.state.address)
        this.props.handleSearch(this.state.city)
        this.props.handleSearch(this.state.stateCode)
        this.setState({address: ''})
        this.setState({city: ''})
        this.setState({stateCode: ''})
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
                        placeholder="Enter abbreviated state" 
                        className="Address_searchbox" 
                        onChange={this.handleChange}
                    />
                    <input type="submit" value="FIND YOUR REPS" className="Address_search_submit" />
            </form>
        )
        }
    }

export default SearchBox