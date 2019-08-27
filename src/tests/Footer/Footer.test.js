import React from 'react'
import Footer from '../../components/Footer/Footer'
import FooterLoggedIn from '../../components/Footer/FooterLoggedIn'
import ReactDOM from 'react-dom';

describe('Footer Components', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Footer/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<FooterLoggedIn/>, div);
        ReactDOM.unmountComponentAtNode(div);
    })
});

