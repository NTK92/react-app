import { Transaction } from './models';

//actions.ts
export const setIncome = (income: number) => ({
    type: 'SET_INCOME',
    payload: income
});

export const setExpense = (expense: number) => ({
    type: 'SET_EXPENSE',
    payload: expense
});

export const setBalance = (balance: number) => ({
    type: 'SET_BALANCE',
    payload: balance
});

export const setUsername = (username: string) => ({
    type: 'SET_USERNAME',
    payload: username
});

export const addTransaction = (transaction: Transaction) => ({
    type: 'ADD_TRANSACTION',
    payload: transaction
  });