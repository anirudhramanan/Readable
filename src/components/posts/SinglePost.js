import React, { Component } from 'react';
import { connect } from 'react-redux'
// import FaCaretUp from 'react-icons/lib/fa/caret-up'
// import FaCaretDown from 'react-icons/lib/fa/caret-down'
import { Link } from 'react-router-dom'
// import { fetchCommentsById } from '../actions/comment_actions'
import { fetchPosts, downVote, upVote } from '../../actions/postActions.js'

class PostItem extends Component {

    componentDidMount() {
        // fetchCommentsById(this.props.post.id)
    }

    render() {
        const { post, comments, upVote, downVote, fetchPosts } = this.props

        return (
            <div>
                {post && (
                    <div className="post">
                        <div className="post-votes">
                            {/* <FaCaretUp size={30} className="caret-up" onClick={() => {
                                upVote(post.id)
                                fetchPosts()
                            }} />
                            <p>{post.voteScore}</p>
                            <FaCaretDown size={30} className="caret-down" onClick={() => {
                                downVote(post.id)
                                fetchPosts()
                            }} /> */}
                        </div>
                        <div className="post-description">
                            <Link to={`/${post.category}/${post.id}`}>
                                <div className="post-title"><h3>{post.title}</h3></div>
                            </Link>
                            <div className="post-body"><p>{post.body}</p></div>
                        </div>
                        <div className="post-detail">
                            <div className="post-category"><p>Category: {post.category}</p></div>
                            <div className="post-author"><p>{post.author} at {post.timestamp}</p></div>
                            <div className="post-comment"><p>Number of Comments: {comments && comments ? comments.length : 0}</p></div>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

function mapStateToProps({ comments }, { post }) {
    return {
        comments: comments[post.id]
    }
}

export default connect(mapStateToProps, {
    fetchPosts,
    downVote,
    upVote,
    // fetchCommentsById
})(PostItem)
