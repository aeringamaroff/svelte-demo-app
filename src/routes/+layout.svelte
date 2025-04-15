<script>
	import { page } from '$app/stores';
	import Footer from '$lib/footer.svelte';
	import Header from '$lib/header.svelte';
	import '../app.css';
</script>

<svelte:head>
	<title>{$page.data.title || 'Svelte Demo'}</title>
</svelte:head>

<Header />

<slot />

<Footer />
