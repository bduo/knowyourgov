import React from 'react';
import SearchBox from '../../components/SearchBox/SearchBox';
import ReactDOM from 'react-dom'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchBox/>, div);
    ReactDOM.unmountComponentAtNode(div);
});