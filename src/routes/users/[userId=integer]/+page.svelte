<script>
	import { page } from '$app/stores';
	import { afterNavigate, beforeNavigate, goto, invalidate } from '$app/navigation';

	export let data;

	const userId = $page.params.userId;
	const expenses = data.expenses;
	const Component = data.Component;
	const title = 'User Details';

	const addExpense = () => {
		goto(`./${userId}/expenses/${userId}`);
	};

	const refresh = () => {
		invalidate(`/api?user_id=${userId}`);
	};

	// these can be used to show and hide loading spinners
	beforeNavigate((navigation) => {
		console.log({ before: navigation });
	});
	afterNavigate((navigation) => {
		console.log({ after: navigation });
	});
</script>

<a href="/users" class="link link-accent">Back</a>

<h1>Details about user {userId}</h1>

<div style="margin-top: 2%;">
	<button class="btn btn-success" on:click={addExpense}> Add Expense </button>
</div>

<div style="margin-top: 2%;">
	<button class="btn btn-warning" on:click={refresh}>Refresh</button>
</div>

{#if !expenses}
	<p>Loading...</p>
{:else if expenses.length === 0}
	<p>No expenses for user</p>
{:else}
	<ul>
		{#each expenses as expense}
			<Component {expense} />
		{/each}
	</ul>
{/if}
