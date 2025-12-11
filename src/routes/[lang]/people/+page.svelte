<script lang="ts">
    import { page } from "$app/stores";
    import ContentPage from "$lib/components/ContentPage.svelte";

    // The layout.server.ts load function provides the 'siteContent'
    // But strictly speaking, the +page.svelte receives `data`
    let { data } = $props();

    // We need to determine WHICH section this is.
    // We can infer it from the URL segment that matched this route.
    // The route is src/routes/[lang]/[section]
    // So the pathname looks like /en/about

    let sectionId = $derived($page.url.pathname.split("/")[2]);
</script>

<ContentPage id={sectionId} siteContent={data.siteContent} />
