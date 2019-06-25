import React, { Component } from 'react'
import SearchBox from '../../components/SearchBox/SearchBox'
import './LandingPage.css'
import hero from '../../images/hero.jpg'
import Footer from '../../components/Footer/Footer'
import { AppContext } from '../../components/AppProvider/AppProvider'
import CongressPersons from '../../components/CongressPersons/CongressPersons'
import Senators from '../../components/Senators/Senators'
import Governor from '../../components/Governor/Governor'

class LandingPage extends Component {
    
    render() {
        return (
            <AppContext.Consumer>
                {value => (   
            <div>
                <img src={hero} alt="Statue of Liberty" className="Background-photo" />
                <section className="Welcome_message">
                    <h1 className="Welcome-text">KNOW</h1>
                    <h1 className="Welcome-text">YOUR</h1>
                    <h1 className="Welcome-text">GOV.</h1>
                </section>
                <section className="LandingPage_search">
                    <h2 className="Welcome-question">Who Are Your Reps?</h2>
                    <SearchBox handleSearch={value.actions.handleSearch} redirectSearch={value.actions.redirectSearch} />
                    {/* {value.state.data.length > 0 &&
                        <Redirect to={{
                            pathname: '/guest',
                            state: { data: value.state.data }
                        }}/>
                    } */}
                </section>
                <section className="LandingPage_info">
                    <p className="App-info-text">
                        KnowYourGov is a way to stay informed about your government and who represents you in congress.
                    </p> 
                </section>
                {/* {value.state.isSubmitted && <CongressPersons /> }
                {value.state.isSubmitted && <Senators /> }
                {value.state.isSubmitted && <Governor /> }   */}
                <Footer />
            </div>
            )} 
            </AppContext.Consumer>  
        )
    }
}


export default LandingPage