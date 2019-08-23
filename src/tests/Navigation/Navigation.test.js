import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import ReactDOM from 'react-dom'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Navigation/>, div);
    ReactDOM.unmountComponentAtNode(div);
});