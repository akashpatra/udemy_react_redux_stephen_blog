import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

// Function which returns a Function
export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');
    
    dispatch ({
        type: 'FETCH_POSTS',
        payload: response.data
    });
};

// Function which returns a Function
// export const fetchUser = function(id) { 
//     return async function(dispatch) {
//         const response = await jsonPlaceholder.get(`/users/${id}`);

//         dispatch({
//             type: 'FETCH_USER',
//             payload: response.data
//         })
//     }
// };

// Above one using Arrow Functions
// export const fetchUser = (id) => async dispatch => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({
//         type: 'FETCH_USER',
//         payload: response.data
//     })
// };

// Above one with _.memoize
// export const fetchUser = id => dispatch => _fetchUser(id, dispatch);
// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({
//         type: 'FETCH_USER',
//         payload: response.data
//     })
// });

// Alternate Overfetching
export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({
        type: 'FETCH_USER',
        payload: response.data
    })
};

