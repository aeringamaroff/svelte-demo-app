<script>
    import { page } from '$app/stores'
    import { enhance } from '$app/forms';

    const userId = $page.params.userId;

    const addExpense = async (event) => {
		
        const formData = new FormData(event.target);

        console.log('form data', formData);

        let dto = {
            user_id: userId,
            amount: formData.get('amount'),
            title: formData.get('title'),
            description: formData.get('description'),
            date: formData.get('date')
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

    let result = null;
</script>

<a href="/users/{userId}">Back</a>

<h1>Add An Expense</h1>

<h2>adding an expense for user {userId}</h2>

<form on:submit|preventDefault={addExpense}>
    <input type="text" name="title" placeholder="Title">
    <input type="number" name="amount" placeholder="Amount in Rands">
    <input type="text" name="description" placeholder="Description">
    <input type="date" name="date" placeholder="Date">
    <button type="submit">Submit</button>
</form>
