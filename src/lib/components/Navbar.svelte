<script lang="ts">
  import { page } from "$app/stores";
  import LangSwitch from "./LangSwitch.svelte";

  let lang = $derived($page.params.lang || "en");

  const links = $derived([
    { href: `/${lang}/about`, label: "About" },
    { href: `/${lang}/research`, label: "Research" },
    { href: `/${lang}/projects`, label: "Projects" },
    { href: `/${lang}/principles`, label: "Principles" },
    { href: `/${lang}/people`, label: "People" },
    { href: `/${lang}/notes`, label: "Notes" },
    { href: `/${lang}/contact`, label: "Contact" },
  ]);
</script>

<nav
  class="sticky top-0 z-50 w-full backdrop-blur-md bg-deep-navy/90 border-b border-neon-cyan/20"
>
  <div class="container flex h-16 items-center justify-between">
    <a href={`/${lang}`} class="flex items-center gap-3 group">
      <img
        src="/logo.png"
        alt="EXITON Lab"
        class="h-8 w-auto opacity-90 group-hover:opacity-100 transition-opacity"
      />
    </a>

    <div class="hidden md:flex gap-6 items-center">
      {#each links as link}
        <a
          href={link.href}
          class="text-xs tracking-widest uppercase font-medium transition-all hover:text-neon-cyan hover:tracking-[0.12em] {$page.url.pathname.startsWith(
            link.href,
          )
            ? 'text-neon-cyan shadow-[0_4px_10px_-4px_#23F3DB]'
            : 'text-zinc-400'}"
        >
          {link.label}
        </a>
      {/each}
      <div class="h-4 w-px bg-white/10 mx-2"></div>
      <LangSwitch />
    </div>

    <!-- Mobile Menu Button (Simple implementation) -->
    <div class="md:hidden flex items-center gap-4">
      <LangSwitch />
      <!-- TODO: Add mobile menu toggle -->
    </div>
  </div>
</nav>
