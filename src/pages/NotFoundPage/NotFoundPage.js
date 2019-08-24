import React, { Component } from 'react'
import './NotFoundPage.css'

export default class NotFoundPage extends Component {
   
    render() {
        return (
            <section className='NotFoundPage'>
                <h1 className='Status-code'>404</h1>
                <h2>Sorry your page couldn't be found.</h2>
                <h2>Please go back to the previous page and try again.</h2>
            </section>
        )
    }
}