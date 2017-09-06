import React, { Component } from 'react';
import { connect }  from 'react-redux'
// import { Link, Route, withRouter } from 'react-router-dom'
// import { createPost } from '../../actions/postActions.js';

class NewPost extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    const submitPost = {
      id: Date.now(),
      timestamp: Date.now(),
      title: e.target.title.value,
      body: e.target.body.value,
      author: e.target.author.value,
      category: e.target.category.value,
    }
    // this.props.createPost(submitPost, () => this.props.history.push('/') )
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="create-post-form">
        <h1>Create New Post</h1>
        <ul className="form-style-1">
          <li>
            <label>Title <span className="required">*</span></label>
            <input type="text" name="title" className="field-long" />
          </li>
          <li>
            <label>Name <span className="required">*</span></label>
            <input type="text" name="author" className="field-long" />
          </li>
          <li>
            <label>Category</label>
            <select name="category" className="field-select">
            {this.props.categories && this.props.categories.map((category) => (
              <option key={category.name} value={category.name}>{category.name}</option>
            ))}
            </select>
          </li>
          <li>
            <label>Your Post here <span className="required">*</span></label>
            <textarea name="body" id="field5" className="field-long field-textarea"></textarea>
          </li>
          <button>Submit Post</button>
        </ul>
      </form>
    )
  }
}

function mapStateToProps({ posts, categories }) {
  console.log("state", this.state)
  return {
    posts: posts,
    categories: categories
  }
}

export default connect(mapStateToProps, {})(NewPost)
