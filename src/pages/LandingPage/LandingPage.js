import React, { Component } from 'react'
import SearchBox from '../../components/SearchBox/SearchBox'
import './LandingPage.css'
import hero from '../../images/hero.jpg'

class LandingPage extends Component {
    state = {reps: {} }

    componentDidMount() {
        this.handleSearch(' ')
    }

    handleSearch = () => {
        const url = `https://www.googleapis.com/civicinfo/v2/representatives?address=${this.state.address} ${this.state.city}, ${this.state.stateCode}&includeOffices=true&roles=legislatorLowerBody&key=`
        
        console.log('url', url)
        fetch(url)
        .then(results => results.json())
        .then(resultsJson => console.log(resultsJson))
    }

    render() {
        return (
            <div>
                <img src={hero} alt="Statue of Liberty" className="Background-photo" />
                <section className="Welcome_message">
                    <h1 className="Welcome-text">KNOW</h1>
                    <h1 className="Welcome-text">YOUR</h1>
                    <h1 className="Welcome-text">GOV.</h1>
                </section>
                <section className="LandingPage_search">
                    <h1 className="Welcome-question">Who Are Your Reps?</h1>
                    <SearchBox handleSearch={this.handleSearch}/>
                </section>
                <section className="LandingPage_info">
                    <p className="App-info-text">
                        KnowYourGov is a way to stay informed about your government and who represents you in congress.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet risus feugiat in ante metus dictum at.
                    </p> 
                </section>
            </div>
        )
    }
}



export default LandingPage