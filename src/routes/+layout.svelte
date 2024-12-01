<script>
	import { page } from "$app/stores";
    import Header from "$lib/header.svelte";
    import '../app.css';
</script>

<svelte:head>
    <title>{$page.data.title || 'Svelte Demo'} </title>
</svelte:head>

<Header />

<slot />

