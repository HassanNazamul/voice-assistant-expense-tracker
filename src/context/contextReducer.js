//reducer is a function that take two param, one old state and another an action 
//action mean how we want to change the state 
// and return new state


//here action be like add or delete according to that it will change the state
//here we add logic


//imaginary transaction array
// const transactio = [{id: 1}]
// so this will be come as state

const contextReducer = (state, action) => {

    let transaction;

    switch (action.type) {
        case 'DELETE_TRANSACTION':

            //it will pick up only the matchinh id and store in variable
            //rest will be added as a new array excluding the id
            transaction = state.filter((t) => t.id !== action.payload);
            return transaction;
        case 'ADD_TRANSACTION':

            transaction = [action.payload, ...state]
            return transaction;
        default:
            return state;
    }
}

export default contextReducer;