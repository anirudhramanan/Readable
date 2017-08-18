import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="container ">
                    <nav className="navbar ">
                        <div className="navbar-brand">
                            <Link className="navbar-item" to="/">
                                <h2>Readable: Your Personal Feed</h2>
                            </Link>
                        </div>
                        <div className="navbar-end">
                            <div className="navbar-item">
                                <Link className="button is-primary" to="/new">
                                    New Post
                                </Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}
