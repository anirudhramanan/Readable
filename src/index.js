import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Index from '../src/components/index.js';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
    <Provider>
        <BrowserRouter><Index/></BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
