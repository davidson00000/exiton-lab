<script lang="ts">
    import { page } from "$app/stores";
    import { xMeshContent } from "$lib/data/x_mesh";

    // Assuming we might have a markdown renderer or we just render text arrays.
    // For now, I will render text arrays simply.

    let lang = $derived(($page.params.lang as "en" | "jp") || "en");
    let content = $derived(xMeshContent[lang]);
</script>

<svelte:head>
    <title>{content.title} | EXITON Lab</title>
    <meta name="description" content={content.subtitle} />
</svelte:head>

<div class="min-h-screen pt-24 pb-16 px-6 relative overflow-hidden">
    <!-- Background Elements -->
    <div
        class="fixed top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(16,33,60,1),rgba(3,7,18,1))] -z-20"
    ></div>
    <div
        class="fixed inset-0 bg-[linear-gradient(rgba(35,243,219,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(35,243,219,0.03)_1px,transparent_1px)] bg-[size:50px_50px] -z-10"
    ></div>

    <main class="max-w-4xl mx-auto space-y-20 animate-fade-in">
        <!-- Hero Section -->
        <section class="text-center space-y-8">
            <div class="inline-block relative">
                <h1
                    class="text-4xl md:text-6xl font-display font-bold text-white tracking-tight mb-2 neon-text"
                >
                    {content.title}
                </h1>
                <div
                    class="h-1 w-full bg-neon-cyan shadow-[0_0_20px_#23F3DB]"
                ></div>
            </div>

            <p
                class="text-xl md:text-2xl text-neon-cyan/90 font-light max-w-3xl mx-auto leading-relaxed"
            >
                {content.subtitle}
            </p>

            <div
                class="bg-deep-navy/50 backdrop-blur-md border border-white/10 p-6 rounded-lg text-left max-w-3xl mx-auto"
            >
                <p class="text-zinc-300 leading-loose">
                    {content.overview}
                </p>
            </div>
        </section>

        <!-- Architecture Diagram -->
        <section class="space-y-6">
            <h2
                class="text-2xl font-display font-bold text-white border-l-4 border-neon-cyan pl-4"
            >
                Architecture
            </h2>
            <div
                class="bg-black/40 border border-neon-cyan/20 rounded-xl p-4 md:p-8 flex justify-center"
            >
                <img
                    src="/images/x_mesh_architecture.png"
                    alt="X-Mesh Architecture Diagram"
                    class="w-full max-w-2xl h-auto object-contain rounded-lg shadow-lg border border-white/5"
                />
            </div>
        </section>

        <!-- Dynamic Sections -->
        <div class="grid gap-12">
            {#each content.sections as section}
                {#if section.heading !== "Architecture"}
                    <!-- Skip Architecture as it is handled separately above -->
                    <article class="space-y-4">
                        <h2
                            class="text-2xl font-display font-bold text-white border-l-4 border-neon-cyan pl-4"
                        >
                            {section.heading}
                        </h2>
                        <div
                            class="bg-deep-navy/30 border border-white/5 rounded-xl p-6 md:p-8 hover:border-neon-cyan/20 transition-colors"
                        >
                            <ul class="space-y-4">
                                {#each section.content as para}
                                    <li
                                        class="text-zinc-300 leading-relaxed pl-4 border-l border-white/10"
                                    >
                                        {@html para.replace(
                                            /\*\*(.*?)\*\*/g,
                                            '<strong class="text-neon-cyan font-medium">$1</strong>',
                                        )}
                                    </li>
                                {/each}
                            </ul>
                        </div>
                    </article>
                {/if}
            {/each}
        </div>

        <!-- Download / GitHub -->
        <section class="text-center pt-8">
            <div
                class="bg-gradient-to-r from-deep-navy via-neon-cyan/10 to-deep-navy p-8 rounded-2xl border border-neon-cyan/20"
            >
                <h2 class="text-2xl font-bold text-white mb-4">
                    {content.download.heading}
                </h2>
                <p class="text-zinc-400 mb-6">{content.download.text}</p>
                <a
                    href={content.download.url}
                    target="_blank"
                    rel="noreferrer"
                    class="inline-flex items-center gap-2 px-8 py-3 bg-neon-cyan/10 hover:bg-neon-cyan/20 text-neon-cyan border border-neon-cyan rounded-full transition-all hover:scale-105 hover:shadow-[0_0_20px_-5px_#23F3DB]"
                >
                    <img
                        src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                        class="w-5 h-5 invert"
                        alt="GitHub"
                    />
                    {content.download.linkText}
                </a>
            </div>
        </section>
    </main>
</div>
