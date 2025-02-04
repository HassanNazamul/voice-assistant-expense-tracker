import React, { useReducer, createContext } from "react";
import contextReducer from './contextReducer'

const initialState = [];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {

    //contextReducer is a single function that define how the stae will change
    //function will be define in other file
    //here transaction is state
    const [transaction, dispatch] = useReducer(contextReducer, initialState)

    //Action creator
    //so it take id to identify and delete the transaction  
    const deleteTransaction = (id) => {

        //now to dispacth the action...here action is a plain object

        //this curly bracket is action in dispatch and this action object is made of up two things
        // 1. type  2.payload
        dispatch({ type: 'DELETE_TRANSACTION', payload: id })
    }

    //since id is not here becasuse id is generated after creation
    //we have to pass complete transaction
    const addtransaction = (transaction) => {

        dispatch({ type: 'ADD_TRANSACTION', payload: transaction })
    }

    // we have to pass this transaction method to all over application

    return (
        //since key and value has same name we pass value directly
        <ExpenseTrackerContext.Provider value={{ deleteTransaction, addtransaction }}>
            {children}
        </ExpenseTrackerContext.Provider>
    );
}