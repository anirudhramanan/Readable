
// Reducer is pure function
// Return one and the same result if the same arguments are passed in
// Depend solely on the arguments passed into them
// Do not produce side effects
// import sortBy from 'sort-by'
import * as types from '../actions/actionTypes.js';

function postsReducer(state=[], action) {
  const { posts, post, postId, updatedPost, sortKey } = action
  switch(action.type) {
    case types.ALL_POST_FETCHED:
      return posts
    // case GET_CATEGORY_POSTS:
    //   return posts.filter(post => !(post.deleted))
    // case CREATE_POST:
    //   return state.concat([post])
    // case UPDATE_POST:
    //   return state.map(post => {
    //     if(post.id === postId) {
    //       post = updatedPost
    //     }
    //     return post
    //   })
    // case DELETE_POST:
    //   return state.filter(post => post.id !== postId)
    // case VOTE_POST:
    //   return state.map(post => {
    //     if (post.id === action.postId) {
    //       if (action.option === "upVote") {
    //         post.voteScore += 1
    //       }
    //       if (action.option === "downVote") {
    //         post.voteScore -= 1
    //       }
    //     }
    //     return post
    //   })
    // case SORT_POST:
    //   return [].concat(state.sort(sortBy("-"+sortKey)))
    default:
      return state
  }
}

export default postsReducer
