import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('Should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('Should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('Should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[1], expenses[2]]);
});

// Should add an expense
test('Should add an expense', () => {
  const expense = {
    id: '4',
    description: 'New Expense',
    note: '',
    amount: 15000,
    createdAt: 15000
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

// Should edit an expense
test('Should edit an expense', () => {
  const amount = 122300;
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      amount
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].amount).toBe(amount);
});

// Should not edit expense if expense not found
test('Should not edit an expense if expense not found', () => {
  const amount = 15000;
  const action = {
    type: 'EDIT_EXPENSE',
    id: -1,
    updates: {
      amount
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});