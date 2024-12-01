import Expense from './expense.svelte';

export const load = async ({ fetch, params }) => {
	const { userId } = params;

	const title = 'Expenses';
	const response = await fetch(`/api?user_id=${userId}`, { method: 'GET' });
	const expenses = await response.json();

	return {
		title,
		expenses,
		Component: Expense
	};
};
