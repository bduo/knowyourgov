import React, { Component } from 'react'
import SearchBox from '../../components/SearchBox/SearchBox'
import './HomePage.css'
import Footer from '../../components/Footer/Footer'
import { AppContext } from '../../components/AppProvider/AppProvider'

// Landing page for the app
class HomePage extends Component {

    static contextType = AppContext;

    render() {
        return (
            <AppContext.Consumer>
                {value => (         
                    <div>
                        <section className="Welcome_message">
                            <h1 className="Welcome-text">KNOW</h1>
                            <h1 className="Welcome-text">YOUR</h1>
                            <h1 className="Welcome-text">GOV.</h1>
                        </section>
                        <section className="LandingPage_search">
                            <h2 className="Welcome-question">Who Are Your Reps?</h2>
                            <SearchBox handleSearch={value.actions.handleSearch} />
                        </section>
                        <section className="LandingPage_info">
                            <p className="App-info-text">
                                KnowYourGov is a way to stay informed about your government<br></br>and to learn who represents you in congress and at the state level.
                            </p>
                            <h3 className="Demo-title">DEMO ACCOUNT</h3>
                            <p className="Demo-text">
                               Username: Demo<br></br>
                               Password: Querty!#3 
                            </p> 
                        </section>
                        <Footer />
                    </div>
                )} 
            </AppContext.Consumer>  
        )
    }
}


export default HomePage