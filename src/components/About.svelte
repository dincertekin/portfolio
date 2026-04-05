<script lang="ts">
    import type { Translation } from "../data/types";

    let { t }: { t: Translation } = $props();
</script>

<section id="about" class="py-20 lg:py-32 border-t border-black/5">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
        <h2 class="text-4xl lg:text-5xl font-bold tracking-tight">
            {t.recruiterTitle}
        </h2>

        <div
            class="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
            {#each t.recruiterKeys as key, i}
                <div class="space-y-2 lg:space-y-4">
                    <h4
                        class="font-bold uppercase text-[9px] lg:text-[10px] tracking-widest text-blue-600"
                    >
                        {key}
                    </h4>
                    <p class="text-gray-500 text-sm lg:text-base">
                        {t.recruiterValues[i]}
                    </p>
                </div>
            {/each}
        </div>
    </div>
</section>
