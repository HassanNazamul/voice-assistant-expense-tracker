//reducer is a function that take two param, one old state and another an action 
//action mean how we want to change the state 
// and return new state


//here action be like add or delete according to that it will change the state
//here we add logic


//imaginary transaction array
// const transactio = [{id: 1}]
// so this will be come as state

const contextReducer = (state, action) => {
    let transactions;

    switch (action.type) {
        case 'DELETE_TRANSACTION':
            // It will pick up only the matching id and store in variable
            // Rest will be added as a new array excluding the id
            transactions = state.filter((t) => t.id !== action.payload);
            return transactions;
        case 'ADD_TRANSACTION':
            transactions = [action.payload, ...state];
            return transactions;
        default:
            return state;
    }
}

export default contextReducer;