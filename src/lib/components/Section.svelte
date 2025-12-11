<script lang="ts">
  export let title: string = "";
  export let content: string = "";
  export let id: string = "";
</script>

<section {id} class="py-16 md:py-24 animate-fade-in relative">
  <!-- Section Decorator -->
  <div
    class="absolute left-0 top-20 h-10 w-1 bg-neon-cyan/20 rounded-r shadow-[0_0_10px_#23F3DB40]"
  ></div>

  <h2
    class="text-2xl md:text-3xl font-display font-medium text-white mb-10 pl-6 border-b border-neon-cyan/30 inline-block pb-2 tracking-wide neon-text"
  >
    {title}
  </h2>
  <div
    class="prose prose-invert prose-p:text-zinc-400 prose-p:leading-relaxed prose-headings:text-white prose-headings:font-display prose-a:text-neon-cyan prose-strong:text-zinc-200 max-w-3xl pl-6 border-l border-white/5"
  >
    {@html content}
  </div>
</section>
