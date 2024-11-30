<script>
	import { page } from "$app/stores";
    import Header from "$lib/header.svelte";
    // import Footer from "$lib/footer.svelte";
</script>

<svelte:head>
    <title>{$page.data.title || 'Svelte Demo'} </title>
</svelte:head>

<Header />

<slot />

