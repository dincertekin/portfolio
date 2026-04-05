<script lang="ts">
    import { slide } from "svelte/transition";
    import type { Translation, Language } from "../data/types";

    let {
        t,
        scrolled,
        lang = $bindable(),
    }: {
        t: Translation;
        scrolled: boolean;
        lang: Language;
    } = $props();

    let mobileMenuOpen = $state(false);
</script>

<nav
    class="fixed top-0 w-full z-50 transition-all duration-500 py-4 {scrolled ||
    mobileMenuOpen
        ? 'backdrop-saturate-180 backdrop-blur-2xl bg-white/90 border-b border-black/5'
        : ''}"
>
    <div class="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <span class="font-bold tracking-tighter text-xl">Dinçer Tekin</span>

        <div class="flex items-center gap-4 lg:gap-8 text-[13px] font-medium">
            <div class="hidden lg:flex space-x-8 opacity-60">
                <a href="#work" class="hover:opacity-100">{t.nav[0]}</a>
                <a href="#about" class="hover:opacity-100">{t.nav[1]}</a>
                <a href="#contact" class="hover:opacity-100">{t.nav[2]}</a>
            </div>

            <a
                href="/cv.pdf"
                class="bg-black text-white px-5 py-2 rounded-full hover:bg-zinc-800 transition-all flex items-center gap-2"
            >
                {t.cv}
                <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path
                        d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                    /><polyline points="7 10 12 15 17 10" /><line
                        x1="12"
                        y1="15"
                        x2="12"
                        y2="3"
                    />
                </svg>
            </a>

            <button
                title="Mobile Menu"
                class="lg:hidden p-2"
                onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
            >
                <div
                    class="w-6 h-0.5 bg-black mb-1.5 transition-all {mobileMenuOpen
                        ? 'rotate-45 translate-y-2'
                        : ''}"
                ></div>
                <div
                    class="w-6 h-0.5 bg-black mb-1.5 transition-all {mobileMenuOpen
                        ? 'opacity-0'
                        : ''}"
                ></div>
                <div
                    class="w-6 h-0.5 bg-black transition-all {mobileMenuOpen
                        ? '-rotate-45 -translate-y-2'
                        : ''}"
                ></div>
            </button>
        </div>
    </div>

    {#if mobileMenuOpen}
        <div
            in:slide
            out:slide
            class="lg:hidden bg-white border-b border-black/5 px-6 py-8 flex flex-col gap-6 text-lg font-bold"
        >
            <a href="#work" onclick={() => (mobileMenuOpen = false)}
                >{t.nav[0]}</a
            >
            <a href="#about" onclick={() => (mobileMenuOpen = false)}
                >{t.nav[1]}</a
            >
            <a href="#contact" onclick={() => (mobileMenuOpen = false)}
                >{t.nav[2]}</a
            >
        </div>
    {/if}
</nav>
