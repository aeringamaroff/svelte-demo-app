import Expense from './expense.svelte';

export const load = async ({ fetch, params }) => {
	const { userId } = params;

	console.log('user details params', params);

	const title = 'Expenses';
	const response = await fetch(`/api?user_id=${userId}`, { method: 'GET' });
	const expenses = await response.json();

	return {
		title,
		expenses,
		Component: Expense
	};
};
