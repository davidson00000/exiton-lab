<script lang="ts">
    import { page } from "$app/stores";
    import { projectsContent } from "$lib/data/sections";

    let lang = $derived(($page.params.lang as "en" | "jp") || "en");
    let content = $derived(projectsContent[lang]);
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

    <div class="grid gap-8">
        {#each content.sections as section}
            <article
                class="group relative overflow-hidden bg-deep-navy/60 backdrop-blur-md border border-neon-cyan/10 p-8 rounded-xl hover:border-neon-cyan/40 transition-all duration-500"
            >
                <div
                    class="absolute -right-10 -top-10 w-32 h-32 bg-neon-cyan/10 rounded-full blur-3xl group-hover:bg-neon-cyan/20 transition-all duration-500"
                ></div>

                <div class="relative z-10">
                    <div
                        class="text-xs font-mono text-neon-cyan/70 mb-2 tracking-widest uppercase"
                    >
                        Project_ID: {section.id}
                    </div>
                    <h2
                        class="text-2xl md:text-3xl font-display font-bold text-white mb-4"
                    >
                        {section.heading}
                    </h2>
                    <p
                        class="text-base md:text-lg leading-relaxed text-zinc-400 font-light"
                    >
                        {section.body}
                    </p>
                </div>
            </article>
        {/each}
    </div>
</section>
