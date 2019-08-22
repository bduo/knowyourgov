import React, { Component } from 'react'
import CongressPersons from '../../components/CongressPersons/CongressPersons'
import Senators from '../../components/Senators/Senators'
import Governor from '../../components/Governor/Governor'
import { AppContext } from '../../components/AppProvider/AppProvider'
import Footer from '../../components/Footer/Footer'
import './Dashboard.css'
// import UserApiService from '../../services/user-api-service';

export default class Dashboard extends Component {

    // state = {
    //     repLower: {},
    //     repHigher: {},
    //     governor: {},
    //  } 

    // data = null;

    // constructor() {
    //     super ()
    //     const user = JSON.parse(localStorage.getItem('user'));
    //     if (user) {
    //         UserApiService.getReps(user.street_address, user.city, user.state_code)
    //             .then((res) => {
    //                 const reps = [];
    //                 res.forEach((data, idx) => {
    //                     data.then((rep) => {
    //                         if (idx === 0) {
    //                             this.setState({
    //                                 repLower: rep
    //                             })
    //                         }
    //                         if (idx === 1) {
    //                             this.setState({
    //                                 repHigher: rep
    //                             })
    //                         }
    //                         if (idx === 2) {
    //                             this.setState({
    //                                 governor: rep
    //                             })
    //                             this.data = this.parseData(this.state);
    //                         }
    //                     })
    //                 })
    //             })
    //     }
    // }

    // parseData(data) {
    //     let parsedData = {congress1: [],
    //     congress2: [],
    //     senator1: [],
    //     senator2: [],
    //     governor: [],}
    //     return parsedData
    // }

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
                    <Footer />
                </>
                )}
            </AppContext.Consumer>
        )
    }
}
