<script lang="ts">
    import { page } from "$app/stores";
    import { principlesContent } from "$lib/data/sections";

    let lang = $derived(($page.params.lang as "en" | "jp") || "en");
    let content = $derived(principlesContent[lang]);
</script>

<svelte:head>
    <title>{content.title} | EXITON Lab</title>
</svelte:head>

<div class="min-h-screen pt-24 pb-16 px-6 relative overflow-hidden">
    <!-- Background Elements -->
    <div
        class="fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,33,60,1),rgba(3,7,18,1))] -z-20"
    ></div>
    <div
        class="fixed inset-0 bg-[linear-gradient(rgba(35,243,219,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(35,243,219,0.02)_1px,transparent_1px)] bg-[size:50px_50px] -z-10"
    ></div>

    <main class="max-w-6xl mx-auto space-y-24 animate-fade-in relative z-10">
        <!-- Header & Intro -->
        <section class="text-center space-y-8 max-w-4xl mx-auto">
            <h1
                class="text-4xl md:text-5xl font-display font-bold text-white tracking-wide mb-4 neon-text"
            >
                {content.title}
            </h1>
            <div
                class="h-1 w-24 bg-neon-cyan mx-auto rounded-full shadow-[0_0_15px_#23F3DB]"
            ></div>

            <p class="text-lg md:text-xl text-zinc-300 leading-relaxed">
                {content.intro}
            </p>
        </section>

        <!-- Principles Loop -->
        <div class="space-y-32">
            {#each content.sections as section, i}
                <article
                    class="flex flex-col md:flex-row items-center gap-12 {i %
                        2 ===
                    1
                        ? 'md:flex-row-reverse'
                        : ''}"
                >
                    <!-- Text Side -->
                    <div class="flex-1 space-y-6">
                        <h2
                            class="text-2xl md:text-3xl font-display font-bold text-white border-l-4 border-neon-cyan pl-6"
                        >
                            {section.heading}
                        </h2>

                        <div class="space-y-4 pl-2">
                            {#each section.content as para}
                                <div
                                    class="bg-deep-navy/40 border border-white/5 p-4 rounded-lg hover:border-neon-cyan/20 transition-all"
                                >
                                    <p class="text-zinc-300 leading-relaxed">
                                        {@html para.replace(
                                            /\*\*(.*?)\*\*/g,
                                            '<strong class="text-neon-cyan font-bold block mb-1 text-lg">$1</strong>',
                                        )}
                                    </p>
                                </div>
                            {/each}
                        </div>
                    </div>

                    <!-- Image Side -->
                    <div class="flex-1 w-full flex justify-center">
                        <div class="relative group">
                            <div
                                class="absolute inset-0 bg-neon-cyan/20 blur-2xl rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                            ></div>
                            <img
                                src={section.image}
                                alt={section.heading}
                                class="relative w-full max-w-lg rounded-xl shadow-2xl border border-white/10 group-hover:scale-[1.02] transition-transform duration-500"
                            />
                        </div>
                    </div>
                </article>
            {/each}
        </div>

        <!-- Closing Statement -->
        <section class="text-center pt-16 pb-8">
            <div
                class="max-w-3xl mx-auto bg-deep-navy/80 backdrop-blur-md border border-neon-cyan/30 p-10 rounded-2xl shadow-[0_0_40px_-10px_rgba(35,243,219,0.15)]"
            >
                <p class="text-xl md:text-2xl font-light text-white italic">
                    "{content.closing}"
                </p>
            </div>
        </section>
    </main>
</div>
