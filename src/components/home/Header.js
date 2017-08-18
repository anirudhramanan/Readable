import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <Link className="button is-primary" to="/new">
                    <span className="icon"><i className="fa fa-plus"></i></span>
                    Add Post
                </Link>
            </div>
        )
    }
}