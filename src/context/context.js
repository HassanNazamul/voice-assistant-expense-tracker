import React, { createContext, useReducer } from 'react';
import contextReducer from './contextReducer';

// Define action types
const ADD_TRANSACTION = 'ADD_TRANSACTION';
const DELETE_TRANSACTION = 'DELETE_TRANSACTION';

const initialState = [];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(contextReducer, initialState);
  // Action creators
  const addTransaction = (transaction) => {
    dispatch({ type: ADD_TRANSACTION, payload: transaction });
  };

  const deleteTransaction = (id) => {
    dispatch({ type: DELETE_TRANSACTION, payload: id });
  };

  console.log(state);


  return (
    <ExpenseTrackerContext.Provider value={{
      transactionsList: state,
      addTransaction,
      deleteTransaction
    }}>
      {children}
    </ExpenseTrackerContext.Provider>
  );
};