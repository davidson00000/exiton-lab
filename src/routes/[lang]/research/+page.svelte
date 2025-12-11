<script lang="ts">
    import { page } from "$app/stores";
    import { researchContent } from "$lib/data/sections";

    let lang = $derived(($page.params.lang as "en" | "jp") || "en");
    let content = $derived(researchContent[lang]);
</script>

<svelte:head>
    <title>{content.title} | EXITON Lab</title>
</svelte:head>

<section
    class="max-w-4xl mx-auto px-6 py-16 md:py-24 space-y-16 animate-fade-in relative z-10"
>
    <div class="relative">
        <div
            class="absolute -left-6 top-0 h-full w-1 bg-gradient-to-b from-neon-cyan/50 to-transparent opacity-50"
        ></div>
        <h1
            class="text-3xl md:text-5xl font-display font-bold tracking-wide text-white mb-6 pl-4 neon-text"
        >
            {content.title}
        </h1>
    </div>

    <div class="grid gap-12">
        {#each content.sections as section}
            <article
                class="group relative bg-deep-navy/40 backdrop-blur-sm border border-white/5 p-6 md:p-8 rounded-lg hover:border-neon-cyan/30 transition-all duration-300"
            >
                <div
                    class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-cyan/0 via-neon-cyan/20 to-neon-cyan/0 opacity-0 group-hover:opacity-100 transition-opacity"
                ></div>

                <h2
                    class="text-xl md:text-2xl font-display font-semibold text-neon-cyan mb-4 tracking-tight"
                >
                    {section.heading}
                </h2>
                <p
                    class="text-sm md:text-base leading-relaxed text-zinc-300 font-light"
                >
                    {section.body}
                </p>
            </article>
        {/each}
    </div>
</section>
