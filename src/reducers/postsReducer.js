// Set default state to empty array. So, that initially when the state is undefined. 
// It will be set to empty array.
export default (state = [], action) => {
    switch(action.type) {
        case 'FETCH_POSTS':
            return action.payload;
        default:
            return state;
    }
};