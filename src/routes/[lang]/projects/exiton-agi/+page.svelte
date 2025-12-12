<script lang="ts">
    import { page } from "$app/stores";
    import { exitonAgiContent } from "$lib/data/exiton_agi";

    let lang = $derived(($page.params.lang as "en" | "jp") || "en");
    let content = $derived(exitonAgiContent[lang]);
</script>

<svelte:head>
    <title>{content.title} | EXITON Lab</title>
    <meta name="description" content={content.tagline} />
</svelte:head>

<div class="min-h-screen pt-24 pb-16 px-6 relative overflow-hidden">
    <!-- Background Elements -->
    <div
        class="fixed top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(20,10,30,1),rgba(3,7,18,1))] -z-20"
    ></div>
    <div
        class="fixed inset-0 bg-[linear-gradient(rgba(192,132,252,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(192,132,252,0.03)_1px,transparent_1px)] bg-[size:60px_60px] -z-10"
    ></div>

    <main class="max-w-4xl mx-auto space-y-24 animate-fade-in">
        <!-- Hero Section -->
        <section class="text-center space-y-8">
            <div class="inline-block relative">
                <div
                    class="mb-4 text-neon-purple tracking-[0.3em] font-mono text-xs md:text-sm uppercase opacity-80"
                >
                    Final Project
                </div>
                <h1
                    class="text-5xl md:text-7xl font-display font-bold text-white tracking-tight mb-2 text-glow-purple"
                >
                    {content.title}
                </h1>
                <div
                    class="h-1 w-full bg-neon-purple shadow-[0_0_20px_#C084FC]"
                ></div>
            </div>

            <p
                class="text-xl md:text-3xl text-white/90 font-light max-w-4xl mx-auto leading-relaxed"
            >
                {content.tagline}
            </p>

            <div
                class="bg-deep-navy/50 backdrop-blur-md border border-neon-purple/20 p-8 rounded-xl text-left max-w-3xl mx-auto shadow-[0_0_30px_-10px_rgba(192,132,252,0.1)]"
            >
                <p class="text-zinc-300 leading-loose text-lg">
                    {content.intro}
                </p>
            </div>
        </section>

        <!-- Vision Section -->
        <section class="space-y-8">
            <h2
                class="text-3xl font-display font-bold text-white flex items-center gap-4"
            >
                <span class="w-2 h-8 bg-neon-purple rounded-full"></span>
                {content.sections[0].heading.split(":")[0]}
            </h2>
            <div class="grid md:grid-cols-2 gap-6">
                {#each content.sections[0].content as item}
                    <div
                        class="bg-deep-navy/40 border border-white/5 p-6 rounded-lg hover:border-neon-purple/30 transition-all"
                    >
                        <p class="text-zinc-300 leading-relaxed">
                            {@html item.replace(
                                /\*\*(.*?)\*\*/g,
                                '<strong class="text-neon-purple font-bold block mb-2 text-lg">$1</strong>',
                            )}
                        </p>
                    </div>
                {/each}
            </div>
        </section>

        <!-- Architecture Diagram -->
        <section class="space-y-8">
            <h2
                class="text-3xl font-display font-bold text-white flex items-center gap-4"
            >
                <span class="w-2 h-8 bg-neon-cyan rounded-full"></span>
                {content.sections[1].heading.split(":")[0]}
            </h2>

            <div
                class="bg-black/40 border border-neon-purple/20 rounded-xl p-4 md:p-8 flex justify-center relative overflow-hidden"
            >
                <div
                    class="absolute inset-0 bg-gradient-to-tr from-neon-purple/5 to-neon-cyan/5 -z-10"
                ></div>
                <img
                    src="/images/exiton_agi_architecture.png"
                    alt="EXITON AGI Architecture Diagram"
                    class="w-full max-w-3xl h-auto object-contain rounded-lg shadow-lg border border-white/5"
                />
            </div>

            <div class="space-y-6 mt-8">
                {#each content.sections[1].content as item}
                    <div class="flex gap-4">
                        <div
                            class="hidden md:block w-px h-full bg-gradient-to-b from-neon-purple to-transparent opacity-30"
                        ></div>
                        <p class="text-zinc-300 leading-relaxed max-w-3xl">
                            {@html item
                                .replace(
                                    /\*\*(.*?)\*\*/g,
                                    '<strong class="text-white font-medium">$1</strong>',
                                )
                                .replace(/\n/g, "<br/>")}
                        </p>
                    </div>
                {/each}
            </div>
        </section>

        <!-- Dynamic Sections (Questions, Relation, Roadmap, Safety) -->
        <div class="space-y-20">
            {#each content.sections.slice(2) as section}
                <section class="space-y-6">
                    <h2
                        class="text-2xl md:text-3xl font-display font-bold text-white flex items-center gap-4 border-b border-white/10 pb-4"
                    >
                        {section.heading}
                    </h2>
                    <div class="bg-deep-navy/20 p-2 md:p-6 rounded-xl">
                        <ul class="space-y-4">
                            {#each section.content as para}
                                <li
                                    class="text-zinc-300 leading-relaxed pl-4 border-l-2 border-neon-purple/30 hover:border-neon-purple transition-colors"
                                >
                                    {@html para
                                        .replace(
                                            /\*\*(.*?)\*\*/g,
                                            '<strong class="text-neon-cyan font-medium">$1</strong>',
                                        )
                                        .replace(/\n/g, "<br/>")}
                                </li>
                            {/each}
                        </ul>
                    </div>
                </section>
            {/each}
        </div>

        <!-- Status / Get Involved -->
        <section class="text-center pt-8 pb-16">
            <div
                class="bg-gradient-to-r from-deep-navy via-neon-purple/10 to-deep-navy p-10 rounded-3xl border border-neon-purple/30 shadow-[0_0_50px_-20px_rgba(192,132,252,0.2)]"
            >
                <h2 class="text-3xl font-bold text-white mb-4">
                    {content.status.heading}
                </h2>
                <p class="text-zinc-300 mb-8 max-w-2xl mx-auto">
                    {content.status.text}
                </p>
                <div class="flex flex-wrap justify-center gap-4">
                    {#each content.status.links as link}
                        <a
                            href={link.url}
                            class="px-8 py-3 bg-white/5 hover:bg-neon-purple/20 text-white border border-white/10 hover:border-neon-purple rounded-full transition-all hover:scale-105"
                        >
                            {link.text}
                        </a>
                    {/each}
                </div>
            </div>
        </section>
    </main>
</div>

<style>
    .text-glow-purple {
        text-shadow: 0 0 30px rgba(192, 132, 252, 0.4);
    }
</style>
