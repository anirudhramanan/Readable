import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import HomePage from './home/HomePage.js';

export default class Index extends Component {
    render() {
        return (
            <div>
                <Route path='/' exact render={() => (
                    <HomePage/>
                )}/>
            </div>
        );
    }
}
