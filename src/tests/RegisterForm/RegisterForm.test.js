import React from 'react';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import ReactDOM from 'react-dom'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RegisterForm/>, div);
    ReactDOM.unmountComponentAtNode(div);
});