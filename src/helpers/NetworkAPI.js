const API = 'http://localhost:5001';
let token = localStorage.token
if (!token)
    token = localStorage.token = Math.random().toString(36).substr(-8)

const HEADERS = {
    'Accept': 'application/json',
    'Authorization': token
};

export const fetchCategories = () =>
    fetch(`${API}/categories`, {HEADERS})
        .then(res => res.json())
        .then(data => data.categories);

export const fetchPosts = () =>
    fetch(`${API}/posts`, {HEADERS})
        .then(res => res.json());

export const fetchComments = (postId) =>
    fetch(`${API}/posts/${postId}/comments`, {HEADERS})
        .then(res => res.json());

export const fetchPost = (postId) =>
    fetch(`${API}/posts/${postId}`, {HEADERS})
        .then(res => res.json())

export const upvote = (postId, value) => {
    let option = '';
    option = (value === 1) ? 'upVote' : 'downVote';

    fetch(`${API}/posts/${postId}`, {
        method: 'POST',
        headers: {
            ...HEADERS,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({option})
    }).then(res => res.json())
}

export const addPost = (formValues) => {

    const body = {
        id: formValues.id,
        title: formValues.title,
        category: formValues.category,
        author: formValues.username,
        body: formValues.message,
        timestamp: formValues.timestamp,
        voteScore: 1,
        deleted: false
    }

    return fetch(`${API}/posts/`, {
        method: 'POST',
        headers: {
            ...HEADERS,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })

}

export const deletePostById = (postId) =>
    fetch(`${API}/posts/${postId}`, {
        method: 'DELETE',
        headers: HEADERS
    })
