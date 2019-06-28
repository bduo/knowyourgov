import React from 'react'
import CongressPersons from '../../components/CongressPersons/CongressPersons'
import Senators from '../../components/Senators/Senators'
import Governor from '../../components/Governor/Governor'
import { AppContext } from '../../components/AppProvider/AppProvider'
import './GuestPage.css'

function GuestPage() {
    return (
        <AppContext.Consumer>
            {value => (
            <div>    
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
            )}
            
        </AppContext.Consumer>
    )
}

export default GuestPage 