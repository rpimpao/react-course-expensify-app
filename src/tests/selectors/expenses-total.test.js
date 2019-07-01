import expenses from '../fixtures/expenses.js';
import selectExpensesTotal from '../../selectors/expenses-total';

test("Should return 0 if no expenses", () => {
  const result = selectExpensesTotal([]);
  expect(result).toBe(0);
});

test("Should correctly add up a single expense", () => {
  const result = selectExpensesTotal([expenses[0]]);
  expect(result).toBe(expenses[0].amount);
});

test("Should correctly add up multiple expenses", () => {
  const result = selectExpensesTotal(expenses);
  expect(result).toBe(114195);
});