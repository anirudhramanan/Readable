import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Index from '../src/components/index.js';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import './bulma.min.css';
import './bulma.main.js';

ReactDOM.render(
    <Provider>
        <BrowserRouter><Index/></BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
