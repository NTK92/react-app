import { Transaction } from './models';

// reducers.ts
const initialState = {
    income: parseFloat(localStorage.getItem('income') || '0'),
    expense: parseFloat(localStorage.getItem('expense') || '0'),
    balance: parseFloat(localStorage.getItem('balance') || '0'),
    username: localStorage.getItem('username') || '',
    transactions: JSON.parse(localStorage.getItem('transactions') || '[]')
  };
  
const financeReducer = (state = initialState, action: any) => {
switch (action.type) {
    case 'ADD_TRANSACTION':
      let newTransaction: Transaction = action.payload;
      let updatedTransactions = [...state.transactions, newTransaction];
      localStorage.setItem('transactions', JSON.stringify(updatedTransactions));
      
      if (newTransaction.type === 'expense') {
        localStorage.setItem('expense', (state.expense + newTransaction.amount).toString());
        localStorage.setItem('balance', (state.balance - newTransaction.amount).toString());
        return {
          ...state,
          expense: state.expense + newTransaction.amount,
          
          balance: state.balance - newTransaction.amount,
          transactions: updatedTransactions
        };
      } else if (newTransaction.type === 'income') {
        localStorage.setItem('income', (state.income + newTransaction.amount).toString());
        localStorage.setItem('balance', (state.balance + newTransaction.amount).toString());
        return {
          ...state,
          income: state.income + newTransaction.amount,
          balance: state.balance + newTransaction.amount,
          transactions: updatedTransactions
        };
      }
      return state;
    case 'SET_INCOME':
        const newIncome = action.payload;
        localStorage.setItem('transactions', JSON.stringify([...state.transactions, newIncome]));
        return { ...state, 
            income: state.income + newIncome.amount, 
            balance: state.balance + newIncome.amount, 
            transactions: [...state.transactions, newIncome] };
    case 'SET_EXPENSE':
        const newExpense = action.payload;
        localStorage.setItem('transactions', JSON.stringify([...state.transactions, newExpense]));
        return { ...state, 
            expense: state.expense + newExpense.amount, 
            balance: state.balance - newExpense.amount, 
            transactions: [...state.transactions, newExpense] };
    case 'SET_BALANCE':
        localStorage.setItem('balance', action.payload.toString());
        return { ...state, balance: action.payload };
    case 'SET_USERNAME':
        localStorage.setItem('username', action.payload.toString());    
        return { ...state, username: action.payload };
    default:
        return state;
}
};

export default financeReducer;