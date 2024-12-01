<script lang="ts">
    import { page } from '$app/stores'
    import type { Expense } from '$lib/interface'

    const userId = $page.params.userId;

    const addExpense = async (event: any) => {
		
        const formData = new FormData(event.target);

        let dto: Expense = {
            user_id: userId,
            amount: Number(formData.get('amount')),
            title: formData.get('title').toString(),
            description: formData.get('description').toString(),
            date: formData.get('date').toString()
        }

		const response = await fetch('/api', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(dto)
		});

		const insertResult = await response.json();

		return insertResult;
	};
</script>

<a href="/users/{userId}">Back</a>

<h1>Add An Expense</h1>

<h2>adding an expense for user {userId}</h2>

<form on:submit|preventDefault={addExpense}>
    <input type="text" name="title" placeholder="Title" required>
    <input type="number" name="amount" placeholder="Amount in Rands" required>
    <input type="text" name="description" placeholder="Description" required>
    <input type="date" name="date" placeholder="Date" required>
    <button type="submit">Submit</button>
</form>
