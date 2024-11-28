<script>
    import { afterNavigate, beforeNavigate } from '$app/navigation'

    // these can be used to show and hide loading spinners

    beforeNavigate((navigation) => {
        console.log({ before: navigation })
    })

    afterNavigate((navigation) => {
        console.log({after: navigation})
    })
</script>

<h2>Welcome to SvelteKit</h2>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<a href="/users">Users</a>

