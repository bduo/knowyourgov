import React from 'react';
import AppProvider from '../../components/AppProvider/AppProvider';
import ReactDOM from 'react-dom'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AppProvider/>, div);
    ReactDOM.unmountComponentAtNode(div);
});