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
// export const fetchUser = (id) => async dispatch => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({
//         type: 'FETCH_USER',
//         payload: response.data
//     })
// };

// Switching Arrow function to below Normal keyword function
export const fetchUser = function(id) { 
    return _.memoize(async function(dispatch) {
        const response = await jsonPlaceholder.get(`/users/${id}`);

        dispatch({
            type: 'FETCH_USER',
            payload: response.data
        })
    })
};