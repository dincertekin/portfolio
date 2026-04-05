<script lang="ts">
    import { fade } from "svelte/transition";
    import type { Translation } from "../data/types";

    import HeroBg from "../assets/hero-bg.webp";

    let { t }: { t: Translation } = $props();
    let emailCopied = $state(false);

    const copyEmail = (): void => {
        navigator.clipboard.writeText("dincertekinbusiness@gmail.com");
        emailCopied = true;
        setTimeout(() => (emailCopied = false), 2000);
    };
</script>

<section
    class="min-h-[70vh] lg:min-h-[80vh] grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
>
    <div in:fade={{ duration: 1000 }}>
        <h1
            class="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-8"
        >
            {t.hero[0]} <br />
            <span class="text-gray-300">{t.hero[1]}</span>
        </h1>
        <p
            class="text-lg md:text-2xl text-gray-500 max-w-xl leading-relaxed mb-10"
        >
            {t.sub}
        </p>
        <button
            onclick={copyEmail}
            class="text-sm font-bold text-black border-b-2 border-black pb-1 hover:text-blue-600 hover:border-blue-600 transition-all cursor-pointer"
        >
            {emailCopied ? t.success : t.copy}
        </button>
    </div>

    <div
        class="rounded-[2.5rem] overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 block h-64 lg:h-125"
    >
        <img src={HeroBg} alt="Code" class="w-full h-full object-cover" />
    </div>
</section>
