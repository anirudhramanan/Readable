import types from './actionTypes';
import NetworkAPI from '../helpers/NetworkAPI';
import store from '../store';

export const fetchPosts = () => dispatch => {
    dispatch({ type: types.ALL_POST_FETCH_STARTED });
    NetworkAPI.fetchPosts()
        .then(res => {
            dispatch({
                type: types.ALL_POST_FETCHED,
                data: res
            });
        })
        .catch(() => dispatch({ type: types.ALL_POST_FETCH_FAILED }));
};

export const downVote = postId => dispatch => {
    NetworkAPI.upvote(postId, 0)
        .then(res => {
            dispatch({ type: types.POST_DOWNVOTE, data: res });
        });
};

export const upVote = postId => dispatch => {
    NetworkAPI.upvote(postId, 1)
        .then(res => {
            dispatch({ type: types.POST_UPVOTE, data: res });
        });
};

export const deletePost = postId => dispatch => {
    NetworkAPI.deletePostById(postId)
        .then(() => {
            dispatch({ type: types.DELETE_POST, data: postId });
        });
};
