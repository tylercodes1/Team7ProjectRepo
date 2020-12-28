
const defaultState = {
    status: 'Pending'
    
}
const suggestionReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ACCEPT' :
            return  { status: 'Accept'};
        case 'REJECT' :
            return {status: 'Reject'};
        default :
            return {status: 'Pending'};
    }  
};
export default suggestionReducer;