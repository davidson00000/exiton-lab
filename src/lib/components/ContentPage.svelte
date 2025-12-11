<script lang="ts">
  import Section from './Section.svelte';
  
  // In Svelte 5, use props interface
  interface Props {
    id: string;
    siteContent: any;
  }
  
  let { id, siteContent }: Props = $props();

  let section = $derived(siteContent.sections.find((s: any) => s.id === id));
</script>

<svelte:head>
  <title>{section ? section.title : 'Page'} | EXITON Lab</title>
</svelte:head>

{#if section}
  <Section title={section.title} content={section.content} {id} />
{:else}
  <div class="py-20 text-center">
    <h2 class="text-2xl text-zinc-500">Section "{id}" not found.</h2>
    <p class="text-zinc-600">Please check the markdown content source.</p>
  </div>
{/if}
