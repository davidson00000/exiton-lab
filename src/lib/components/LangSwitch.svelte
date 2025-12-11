<script lang="ts">
    import { page } from "$app/stores";
    import { goto } from "$app/navigation";

    let currentLang = $derived($page.params.lang);

    function switchLang(lang: string) {
        if (lang === currentLang) return;
        const path = $page.url.pathname.replace(`/${currentLang}`, `/${lang}`);
        goto(path);
    }
</script>

<div
    class="flex items-center gap-2 text-xs font-mono border border-white/10 rounded-full px-2 py-1 bg-black/50 glass-panel"
>
    <button
        class="hover:text-neon-cyan transition-colors {currentLang === 'en'
            ? 'text-neon-cyan font-bold'
            : 'text-zinc-500'}"
        onclick={() => switchLang("en")}
    >
        EN
    </button>
    <span class="text-zinc-700">|</span>
    <button
        class="hover:text-neon-cyan transition-colors {currentLang === 'jp'
            ? 'text-neon-cyan font-bold'
            : 'text-zinc-500'}"
        onclick={() => switchLang("jp")}
    >
        JP
    </button>
</div>
