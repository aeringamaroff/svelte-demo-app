<script>
    import { page } from '$app/stores'
    import { afterNavigate, beforeNavigate, goto } from '$app/navigation'
    import { onMount } from 'svelte';

    export let data;

    const userId = $page.params.userId
    const expenses = data.expenses;

    function formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-ZA", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
    }

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
</script>

<a href="/users">Back</a>

<h1>Details about user {userId}</h1>

<div style="margin-top: 2%;">
    <button on:click={handleClick}>Add Expense for User</button>
</div>

{#if !expenses}
    <p>Loading...</p>
  {:else if expenses.length === 0}
    <p>No expenses for user</p>
  {:else}
    <h1>{data.title}</h1>
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