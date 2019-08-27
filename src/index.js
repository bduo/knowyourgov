import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom'
import AppProvider from './components/AppProvider/AppProvider';
import AppRouter from './components/AppRouter/AppRouter';
import history from './history'
import './index.css';
import 'core-js/fn/number/is-nan'; 
import 'core-js/es7/'; 
import 'core-js/es6/'; 
import 'raf/polyfill';

ReactDOM.render(
    <Router history={history}>
        <AppProvider>
            <AppRouter />
        </AppProvider>
    </Router>,
    document.getElementById('root')
);