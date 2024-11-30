export const load = async ({ fetch, params }) => {
	const { userId } = params;
	const title = 'Expenses';

	return {
		title,
		userId
	};
};
