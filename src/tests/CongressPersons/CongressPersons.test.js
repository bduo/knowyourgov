import React from 'react';
import CongressPersons from '../../components/CongressPersons/CongressPersons';
import ReactDOM from 'react-dom'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CongressPersons/>, div);
    ReactDOM.unmountComponentAtNode(div);
});