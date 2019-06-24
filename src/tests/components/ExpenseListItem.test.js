import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses.js';
import ExpenseListItem from '../../components/ExpenseListItem';

test('Should render ExpenseListItem correctly', () => {
  const expense = expenses[0];
  const wrapper = shallow(<ExpenseListItem key={expense.id} {...expense} />);
  expect(wrapper).toMatchSnapshot();
});