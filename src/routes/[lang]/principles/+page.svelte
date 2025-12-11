<script lang="ts">
    import { page } from "$app/stores";
    import { principlesContent } from "$lib/data/sections";

    let lang = $derived(($page.params.lang as "en" | "jp") || "en");
    let content = $derived(principlesContent[lang]);
</script>

<svelte:head>
    <title>{content.title} | EXITON Lab</title>
</svelte:head>

<section
    class="max-w-3xl mx-auto px-6 py-16 md:py-24 space-y-12 animate-fade-in relative z-10"
>
    <div class="text-center mb-16">
        <h1
            class="text-3xl md:text-4xl font-display font-bold tracking-wide text-white mb-4 neon-text"
        >
            {content.title}
        </h1>
        <div
            class="h-1 w-24 bg-neon-cyan mx-auto rounded-full shadow-[0_0_15px_#23F3DB]"
        ></div>
    </div>

    <div class="space-y-10">
        {#each content.sections as section}
            <article
                class="flex flex-col md:flex-row gap-6 md:gap-10 border-b border-white/5 pb-10 last:border-0 last:pb-0"
            >
                <div class="md:w-1/3">
                    <h2
                        class="text-lg md:text-xl font-display font-bold text-neon-cyan"
                    >
                        {section.heading}
                    </h2>
                    <div class="mt-2 h-0.5 w-10 bg-white/20"></div>
                </div>
                <div class="md:w-2/3">
                    <p
                        class="text-sm md:text-base leading-relaxed text-zinc-300"
                    >
                        {section.body}
                    </p>
                </div>
            </article>
        {/each}
    </div>
</section>
