import React, { Component } from 'react'
import SearchBox from '../../components/SearchBox/SearchBox'
import './LandingPage.css'
import hero from '../../images/hero.jpg'
import Promise from 'promise'
import Footer from '../../components/Footer/Footer'

class LandingPage extends Component {
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
     }

    componentDidMount() {
        this.handleSearch(' ')
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

    handleSearch = (address, city, stateCode ) => {
        const urls = [`https://www.googleapis.com/civicinfo/v2/representatives?address=${address} ${city}, ${stateCode}&includeOffices=true&roles=legislatorLowerBody&key=`,
        `https://www.googleapis.com/civicinfo/v2/representatives?address=${address} ${city}, ${stateCode}&includeOffices=true&roles=legislatorUpperBody&key=`,`https://www.googleapis.com/civicinfo/v2/representatives?address=${address} ${city}, ${stateCode}&includeOffices=true&roles=headOfGovernment&key=`]
        
        Promise.all(urls.map(url =>
            fetch(url)
            .then(response => response.json()) 
            .catch(error => console.log('There was a problem!', error))               
        ))
            .then(data => {
                this.setState({
                    congress1: data[0].officials[0],
                    congress1Address: data[0].officials[0].address[1],
                    congress2: data[0].officials[1],
                    congress2Address: data[0].officials[0].address[0],
                    senator1: data[1].officials[0],
                    senator1Address: data[0].officials[0].address[0],
                    senator2: data[1].officials[1],
                    senator2Address: data[0].officials[0].address[0],
                    governor: data[2].officials[1],
                    governorAddress: data[0].officials[0].address[0],
            })
          })
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
                    <h2 className="Welcome-question">Who Are Your Reps?</h2>
                    <SearchBox handleSearch={this.handleSearch}/>
                </section>
                <section className="LandingPage_info">
                    <p className="App-info-text">
                        KnowYourGov is a way to stay informed about your government and who represents you in congress.
                    </p> 
                </section>
                <section className="CongressPersons-section">
                    <div className="Congress1">
                        <p>{this.state.congress1.name}</p>
                        <img src={this.state.congress1.photoUrl} alt={this.state.congress1.name}/>
                        <p>{this.state.congress1.party}</p>
                        <a href="#">{this.state.congress1.phones}</a>
                        <a href="#">{this.state.congress1.urls}</a>
                        <address>
                            <li>{this.state.congress1Address.line1}</li>
                            <li>{this.state.congress1Address.line2}</li>
                            <li>{this.state.congress1Address.city}</li>
                            <li>{this.state.congress1Address.state}</li>
                            <li>{this.state.congress1Address.zip}</li>
                        </address>
                    </div>
                    <div className="Congress2">
                        <p>{this.state.congress2.name}</p>
                        <p>{this.state.congress2.party}</p>
                        <a href="#">{this.state.congress2.phones}</a>
                        <a href="#">{this.state.congress2.urls}</a>
                        {/* <img src='{this.state.congress2.photoUrl}' height="100" width="100"/> */}
                        {/* <address>{this.state.congress2.address.map(list => (<li key={list}>{list}</li>))}</address> */}
                    </div>
                </section>
                <section className="Senators-section">
                    <div className="Senator1">
                        <p>{this.state.senator1.name}</p>
                        <p>{this.state.senator1.party}</p>
                        <a href="#">{this.state.senator1.phones}</a>
                        <a href="#">{this.state.senator1.urls}</a>
                    </div>
                    <div className="Senator2">
                        <p>{this.state.senator2.name}</p>
                        <p>{this.state.senator2.party}</p>
                        <a href="#">{this.state.senator2.phones}</a>
                        <a href="#">{this.state.senator2.urls}</a>
                    </div>
                </section>
                <section className="Governor-section">
                    <div className="Governor">
                        <p>{this.state.governor.name}</p>
                        <p>{this.state.governor.party}</p>
                        <a href="#">{this.state.governor.phones}</a>
                        <a href="#">{this.state.governor.urls}</a>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}

export default LandingPage