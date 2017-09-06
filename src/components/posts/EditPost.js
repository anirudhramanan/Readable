import _ from 'lodash'
import React, { Component } from 'react';
import { connect }  from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchAllPosts, updatePost } from '../../actions/postActions.js';
import { fetchCommentsById } from '../actions/comment_actions'

class EditPost extends Component {
  componentDidMount() {
    this.props.fetchAllPosts()
    this.props.fetchCommentsById(this.props.match.params.postId)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const postId = this.props.post.id
    const title = e.target.title.value
    const body = e.target.body.value

    this.props.updatePost(postId, title, body,
      () => this.props.history.push('/') )
  }

  render() {
    const { post, comments } = this.props

    if(!post && !comments) {
      return <div><h1>Loading..</h1></div>
    }
    if(!post) {
      return <div><h1>Post not found</h1></div>
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="create-post-form">
          <h1>Edit Your Post</h1>
          <ul className="form-style-1">
            <li>
              <label>Title <span className="required">*</span></label>
              <input defaultValue={post.title} type="text" name="title" className="field-long" />
            </li>

            <li>
              <label>Your Post here <span className="required">*</span></label>
              <textarea defaultValue={post.body} name="body" id="field5" className="field-long field-textarea"></textarea>
            </li>
            <button>Update Post</button>
          </ul>
        </form>
        <Link to={`/post/${post.id}`}>
          <button>Cancel</button>
        </Link>
      </div>
    )
  }
}

function mapStateToProps({ posts, comments }, {match}) {
  console.log("state", this.state)
  return {
    post: _.find(posts, {id: match.params.postId }),
    comments: comments[match.params.postId]
  }
}

// https://stackoverflow.com/questions/42123261/programmatically-navigate-using-react-router-v4
export default connect(mapStateToProps, {
                fetchAllPosts, updatePost, fetchCommentsById })(EditPost)

