import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configStore();

store.dispatch(addExpense({ description: 'Water bill', amount: 2000, createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Gas bill', amount: 1000, createdAt: 1500 }));
store.dispatch(addExpense({ description: 'Rent', amount: 100000, createdAt: 500 }));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));