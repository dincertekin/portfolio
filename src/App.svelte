<script lang="ts">
    import { onMount } from "svelte";
    import { translations } from "./data/translations";
    import type { Language } from "./data/types";

    // Component Imports
    import Nav from "./components/Nav.svelte";
    import Hero from "./components/Hero.svelte";
    import RepoCard from "./components/RepoCard.svelte";
    import About from "./components/About.svelte";
    import ContactForm from "./components/ContactForm.svelte";

    import YouTubeImage from "./assets/youtube-image.webp";

    // Global State using Svelte 5 Runes
    let lang = $state<Language>("EN");
    let scrolled = $state(false);

    // Derived state: Updates automatically whenever 'lang' changes
    const t = $derived(translations[lang]);

    onMount(() => {
        const handleScroll = () => {
            scrolled = window.scrollY > 50;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });
</script>

<Nav {t} {scrolled} bind:lang />

<main class="max-w-7xl mx-auto px-6 pt-24 md:pt-32 pb-20">
    <Hero {t} />

    <section id="work" class="py-20 lg:py-32">
        <div
            class="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6"
        >
            <div>
                <h2
                    class="text-[10px] lg:text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mb-4"
                >
                    {t.ossHeader}
                </h2>
                <h3 class="text-4xl lg:text-5xl font-bold tracking-tight">
                    {t.work}
                </h3>
            </div>
            <p class="text-gray-400 text-sm max-w-xs">
                {t.workSub}
            </p>
        </div>

        <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
            {#each t.repos as repo}
                <RepoCard {repo} />
            {/each}
        </div>
    </section>

    <section class="py-20 lg:py-32 border-t border-black/5">
        <div
            class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
            <div class="relative order-2 lg:order-1">
                <div
                    class="rounded-[2.5rem] lg:rounded-[3rem] aspect-video bg-zinc-900 flex items-center justify-center relative overflow-hidden group"
                >
                    <div
                        style="background-image: url({YouTubeImage})"
                        class="absolute inset-0 bg-cover opacity-20 group-hover:scale-105 transition-all duration-1000"
                    ></div>
                    <div
                        class="z-10 w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-red-600 flex items-center justify-center text-white shadow-xl transition-transform group-hover:scale-110"
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="currentColor"><path d="M8 5v14l11-7z" /></svg
                        >
                    </div>
                </div>
                <div
                    class="absolute -bottom-4 -right-2 md:right-10 bg-white shadow-2xl rounded-2xl lg:rounded-3xl p-4 lg:p-6 border border-black/5"
                >
                    <div class="flex gap-4 lg:gap-8">
                        <div>
                            <p
                                class="text-[9px] uppercase tracking-widest font-bold text-gray-400 mb-1"
                            >
                                {t.stats[0]}
                            </p>
                            <p
                                class="text-2xl lg:text-3xl font-black tracking-tight"
                            >
                                5K+
                            </p>
                        </div>
                        <div class="w-px h-8 lg:h-10 bg-black/5"></div>
                        <div>
                            <p
                                class="text-[9px] uppercase tracking-widest font-bold text-gray-400 mb-1"
                            >
                                {t.stats[1]}
                            </p>
                            <p
                                class="text-2xl lg:text-3xl font-black tracking-tight"
                            >
                                300K+
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="order-1 lg:order-2">
                <h2
                    class="text-[10px] lg:text-sm font-bold uppercase tracking-[0.2em] text-blue-600 mb-6"
                >
                    {t.contentLabel}
                </h2>
                <h3 class="text-3xl lg:text-4xl font-bold mb-6">{t.content}</h3>
                <p
                    class="text-lg lg:text-xl text-gray-500 leading-relaxed mb-8"
                >
                    {t.contentSub}
                </p>
                <div class="flex flex-wrap gap-2 lg:gap-3">
                    {#each ["Linux", "Cybersecurity", "Python", "Teaching"] as skill}
                        <span
                            class="px-4 py-2 rounded-full bg-gray-50 text-[10px] font-bold uppercase tracking-wider border border-black/5"
                            >{skill}</span
                        >
                    {/each}
                </div>
            </div>
        </div>
    </section>

    <About {t} />

    <ContactForm {t} />
</main>

<footer class="py-12 border-t border-black/5 bg-[#f5f5f7] text-[#6e6e73]">
    <div class="max-w-7xl mx-auto px-6">
        <div
            class="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 text-[11px] lg:text-[12px]"
        >
            <div class="flex flex-col gap-4">
                <div class="flex gap-6 font-medium">
                    <a
                        href="https://github.com/dincertekin"
                        class="hover:underline hover:text-black transition-colors"
                        >GitHub</a
                    >
                    <a
                        href="https://youtube.com/@dincertekin"
                        class="hover:underline hover:text-black transition-colors"
                        >YouTube</a
                    >
                    <a
                        href="https://linkedin.com/in/dincertekin"
                        class="hover:underline hover:text-black transition-colors"
                        >LinkedIn</a
                    >
                </div>
                <p>{t.footer}</p>
            </div>

            <div
                class="flex items-center gap-3 bg-black/5 p-1 rounded-full font-bold"
            >
                <button
                    onclick={() => (lang = "EN")}
                    class="px-4 py-1.5 rounded-full transition-all {lang ===
                    'EN'
                        ? 'bg-white text-black shadow-sm'
                        : 'opacity-40 hover:opacity-100'}"
                >
                    English
                </button>
                <div class="w-px h-3 bg-black/10"></div>
                <button
                    onclick={() => (lang = "TR")}
                    class="px-4 py-1.5 rounded-full transition-all {lang ===
                    'TR'
                        ? 'bg-white text-black shadow-sm'
                        : 'opacity-40 hover:opacity-100'}"
                >
                    Türkçe
                </button>
            </div>
        </div>
    </div>
</footer>

<style>
    /* Global styles remain here to ensure consistent base rendering */
    :global(html) {
        scroll-behavior: smooth;
        background-color: #ffffff;
        color: #1d1d1f;
        -webkit-font-smoothing: antialiased;
        font-family:
            -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif;
    }
</style>
