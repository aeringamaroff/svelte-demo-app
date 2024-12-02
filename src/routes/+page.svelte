<script>
    import { afterNavigate, beforeNavigate, goto } from '$app/navigation'


    const viewUsers = () => {
        goto('/users')
    }

    // these can be used to show and hide loading spinners

    beforeNavigate((navigation) => {
        console.log({ before: navigation })
    })

    afterNavigate((navigation) => {
        console.log({after: navigation})
    })
</script>

<div class="max-w-md">
<h1 class="text-5xl font-bold">Demo Expense Tracking App</h1>
<p class="py-6">
    Expenses can be viewed, added and removed from a list of users
</p>
<button class="btn btn-primary" on:click={viewUsers}>Users</button>
</div>