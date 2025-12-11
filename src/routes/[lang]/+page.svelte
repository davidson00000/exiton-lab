<script lang="ts">
  let { data } = $props();
  // data comes from layout.server.ts (siteContent, lang)
  let { intro, metadata } = $derived(data.siteContent);
  let lang = $derived(data.lang);
</script>

<svelte:head>
  <title>{metadata.title} | {metadata.tagline}</title>
</svelte:head>

<!-- Hero Container with Particle/Grid Background -->
<div
  class="relative flex flex-col items-center justify-center min-h-[90vh] text-center overflow-hidden"
>
  <!-- "Dusty" Floating Particles (CSS Animation) -->
  <div class="absolute inset-0 pointer-events-none opacity-20">
    <div
      class="w-2 h-2 bg-neon-cyan/50 rounded-full absolute top-1/4 left-1/4 animate-[float_8s_ease-in-out_infinite]"
    ></div>
    <div
      class="w-1 h-1 bg-white/40 rounded-full absolute top-3/4 left-2/3 animate-[float_12s_ease-in-out_infinite_reverse]"
    ></div>
    <div
      class="w-1.5 h-1.5 bg-neon-cyan/30 rounded-full absolute top-1/3 left-3/4 animate-[float_6s_ease-in-out_infinite]"
    ></div>
  </div>

  <!-- Main Logo Area -->
  <div class="z-10 animate-fade-in flex flex-col items-center">
    <img
      src="/logo.png"
      alt="EXITON Lab"
      class="w-64 md:w-96 mb-8 drop-shadow-[0_0_15px_rgba(35,243,219,0.2)]"
    />

    <div
      class="font-mono text-neon-cyan text-sm md:text-base tracking-[0.2em] mb-12 animate-pulse opacity-80"
    >
      $ make human.protocols
    </div>

    <!-- Vertical Neon Pillars -->
    <div
      class="h-24 w-px bg-gradient-to-b from-transparent via-neon-cyan/50 to-transparent mb-12"
    ></div>

    <!-- Mission Statement -->
    <div class="max-w-2xl px-6">
      <div
        class="prose prose-invert prose-lg md:prose-xl font-light text-zinc-300"
      >
        {@html intro.content}
      </div>
    </div>
  </div>

  <!-- Abstract Architecture Diagram Placeholder -->
  <div
    class="mt-24 w-full max-w-4xl px-4 opacity-50 hover:opacity-100 transition-opacity duration-700"
  >
    <div
      class="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono text-center"
    >
      <div
        class="p-4 border border-neon-cyan/20 bg-deep-navy/80 rounded backdrop-blur"
      >
        <span class="text-neon-cyan block mb-2">[ LAYER 1 ]</span>
        ContextOS
      </div>
      <div
        class="p-4 border border-neon-cyan/20 bg-deep-navy/80 rounded backdrop-blur"
      >
        <span class="text-neon-cyan block mb-2">[ LAYER 2 ]</span>
        ReasonEngine
      </div>
      <div
        class="p-4 border border-neon-cyan/20 bg-deep-navy/80 rounded backdrop-blur"
      >
        <span class="text-neon-cyan block mb-2">[ LAYER 3 ]</span>
        StateCompiler
      </div>
      <div
        class="p-4 border border-neon-cyan/20 bg-deep-navy/80 rounded backdrop-blur"
      >
        <span class="text-neon-cyan block mb-2">[ LAYER 4 ]</span>
        LogicShield
      </div>
    </div>
  </div>
</div>
