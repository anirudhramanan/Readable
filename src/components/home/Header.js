import React, {Component} from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="container ">
                    <nav className="navbar">
                        <div id="navMenuDocumentation" className="navbar-menu">
                            <div className="navbar-end">
                                <div className="navbar-item">
                                    <div className="field is-grouped">
                                        <p className="control">

                                            <Link className="button is-primary" to="/new">
                                                <span className="icon"><i className="fa fa-plus"></i></span>
                                                &nbsp; Add Post
                                            </Link>

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}