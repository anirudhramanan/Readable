import React, {Component} from 'react';
import Header from './Header.js';

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="readable-body-wrapper">
                </div>
            </div>
        )
    }
}
