<script>
    import { page } from '$app/stores'
    import { afterNavigate, beforeNavigate, goto, invalidate, preloadData } from '$app/navigation'
    import { onMount } from 'svelte';

    export let data;

    const userId = $page.params.userId
    const expenses = data.expenses;
    const Component = data.Component;
    const title = 'User Details';

    const addExpense = () => {
        goto(`./${userId}/expenses/${userId}`)
    }

    const refresh = () => {
        invalidate('./api')
    }

    // these can be used to show and hide loading spinners
    beforeNavigate((navigation) => {
        console.log({ before: navigation })
    })
    afterNavigate((navigation) => {
        console.log({ after: navigation })
    })

    
</script>

<a href="/users">Back</a>

<h1>Details about user {userId}</h1>

<div style="margin-top: 2%;">
    <button 
    on:focus={async () => {
        await preloadData(`./${userId}/expenses/${userId}`)
    }} 
    on:mouseover={async () => {
        await preloadData(`./${userId}/expenses/${userId}`)
    }} 
    on:click={addExpense}>
        Add Expense for User
    </button>
</div>

<div style="margin-top: 2%;">
    <button on:click={refresh}>Refresh</button>
</div>

{#if !expenses}
    <p>Loading...</p>
  {:else if expenses.length === 0}
    <p>No expenses for user</p>
  {:else}
  <h1>{data.title}</h1>
    <ul>
        {#each expenses as expense}
            <Component {expense}/>
        {/each}
    </ul>
{/if}