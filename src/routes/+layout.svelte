<script lang="ts">
	import "../app.css";
	import favicon from "$lib/assets/favicon.svg";
	import Navbar from "$lib/components/Navbar.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import HeroBackground from "$lib/components/HeroBackground.svelte";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="min-h-screen flex flex-col relative bg-deep-navy text-steel-gray">
	<Navbar />
	<HeroBackground />
	<main class="flex-1 w-full relative z-10">
		{@render children()}
	</main>
	<Footer />
</div>
