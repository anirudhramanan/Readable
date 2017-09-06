import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SinglePost from '../posts/SinglePost.js'
import { connect }  from 'react-redux'
import { fetchPosts } from '../../actions/postActions.js'

class HomePage extends Component {
  static propTypes = {
    posts: PropTypes.array
  }

  componentDidMount() {
    this.props.fetchPosts()
  }

  render() {
    const {posts} = this.props

    return (!posts)
    ? <div>Loading...</div>
    : (
      <div>
        {posts.map(post => (
          <SinglePost key={post.id} post={post}/>
        ))}
      </div>
    )
  }
}

function mapStateToProps({ posts }, {match}) {
  const category = match.params.category
  return {
    posts: category ? posts.filter(post => post.category === category) : posts
  }
}

export default connect(mapStateToProps, { fetchPosts })(HomePage)
