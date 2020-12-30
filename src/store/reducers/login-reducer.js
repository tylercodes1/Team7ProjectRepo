// reducer descripes how does the state transfer from current state to next state.
// logged in, log out.
// When action is been called, reducer will check action type and modifly the store.

const loginReducer = (state = false, action) => {
    switch (action.type) {
        case 'SIGN_IN' :
            return !state;
    }
    return state;  
};
export default loginReducer;