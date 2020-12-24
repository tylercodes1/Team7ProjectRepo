const suggestionReducer = (state = { isAccept: false}, action) => {
    switch (action.type) {
        case 'ACCEPT' :
            return { isAccept: true};
        case 'REJECT' :
            return {isAccept: false};
        default :
            return state;
    }  
};
export default suggestionReducer;