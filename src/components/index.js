import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { fetchPosts } from '../actions/postActions';
import { getAllCategories } from '../actions/categoryActions';
import HomePage from '../components/homepage/HomePage.js'
import NewPost from '../components/posts/NewPost.js'

class Index extends Component {

    static propTypes = {
        posts: PropTypes.array,
        categories: PropTypes.array,
        fetchPosts: PropTypes.func.isRequired,
        getAllCategories: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getAllCategories();
        this.props.fetchPosts();
    }

    render() {
        return (
            <div className="app">
                {/* <Navbar history={this.props.history} categories={this.props.categories} /> */}
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/new" component={NewPost} />
                        <Route path="/:categories" component={HomePage} />
                        {/* <Route path="/post/:postId/edit" component={Edit} /> */}
                        {/* <Route path="/:category/:postId" component={Post} /> */}
                        {/* <Route path="/:category" component={Category} /> */}
                    </Switch>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts,
        categories: state.categories
    };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        fetchPosts,
        getAllCategories
    }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));
