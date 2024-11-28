<script>
    import { page } from '$app/stores'
    import { afterNavigate, beforeNavigate, goto } from '$app/navigation'
    import { onMount } from 'svelte';

    // these can be used to show and hide loading spinners

    beforeNavigate((navigation) => {
        console.log({ before: navigation })
    })

    afterNavigate((navigation) => {
        console.log({after: navigation})
    })
    
    const handleClick = () => {
        console.log('Adding Expense')
        goto(`./${userId}/expenses/${userId}`)
    }

    const userId = $page.params.userId

    console.log('USER ID', userId);
    
    let expenses = [];
    let error = null;

    onMount(async () => {
        try {
            const res = await fetch(`/demo-api?user_id=${userId}`);

            if (res.ok) {
                expenses = await res.json();
            } else {
                error = 'Failed to fetch data from the server.';
            }
        } catch (err) {
            error = 'An error occurred: ' + err.message;
        }
    });

    function formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-ZA", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
    }
</script>

<a href="/users">Back</a>

<h1>Details about user {userId}</h1>

<div style="margin-top: 2%;">
    <button on:click={handleClick}>Add Expense for User</button>
</div>

{#if error}
    <p class="error">{error}</p>
{:else if !expenses}
    <p>Loading...</p>
  {:else if expenses.length === 0}
    <p>No expenses for user</p>
  {:else}
    <h1>Expenses</h1>
    <ul>
      {#each expenses as expense}
        <li>
            <p>
                <strong>
                    {formatDate(expense.date)}
                </strong>
            </p>
            <p>
                {expense.title}: <strong>R{expense.amount}</strong>
            </p>
            <p>{expense.description}</p>
        </li>
      {/each}
    </ul>
  {/if}