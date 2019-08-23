import React, { Component } from 'react'
import CongressPersons from '../../components/CongressPersons/CongressPersons'
import Senators from '../../components/Senators/Senators'
import Governor from '../../components/Governor/Governor'
import { AppContext } from '../../components/AppProvider/AppProvider'
import FooterLoggedIn from '../../components/Footer/FooterLoggedIn'
import './Dashboard.css'

export default class Dashboard extends Component {

    render() {
        return (
            <AppContext.Consumer>
                {value => (
                    <>
                        <div>
                            <h1 className="Guest-title">YOUR REPS</h1>    
                            <section className="Guest-section">
                                <div className="Guest-column-2">
                                    {value.state.isSubmitted && <CongressPersons /> }
                                </div>
                                <div className="Guest-column-2">
                                    {value.state.isSubmitted && <Senators /> }
                                </div>
                                <div className="Guest-column-2">
                                    {value.state.isSubmitted && <Governor /> }
                                </div>
                            </section> 
                        </div>
                        <FooterLoggedIn/>
                    </>
                )}
            </AppContext.Consumer>
        )
    }
}
