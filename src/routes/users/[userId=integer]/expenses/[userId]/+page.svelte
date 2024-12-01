<script>
    import { page } from '$app/stores'
    import { goto } from '$app/navigation'
    import { z } from "zod";
	import Expense from '../../expense.svelte';

    const userId = $page.params.userId;

    const addExpense = async (event) => {
		
        const formData = new FormData(event.target);

        let dto = {
            user_id: userId,
            amount: Number(formData.get('amount')),
            title: formData.get('title'),
            description: formData.get('description'),
            date: formData.get('date')
        }

        // invalidation with zod

        const Expense = z.object({
            user_id: z.string(),
            amount: z.number(),
            title: z.string(),
            description: z.string(),
            date: z.string()
        });

        Expense.parse(dto)

		const response = await fetch('/api', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(dto)
		});

		const insertResult = await response.json();

        goto(`/users/${userId}`)
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
