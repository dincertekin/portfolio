<script lang="ts">
    import type { Repo } from "../data/types";

    let { repo }: { repo: Repo } = $props();
</script>

<a
    href={repo.url}
    target="_blank"
    rel="noopener noreferrer"
    class="rounded-[2.5rem] p-8 lg:p-10 flex flex-col justify-between min-h-80 lg:min-h-95 transition-all duration-500 border border-black/5 lg:hover:-translate-y-2 lg:hover:shadow-2xl lg:hover:shadow-black/5 {repo.color}"
>
    <div>
        {#if repo.stars}
            <span
                class="text-[9px] font-black uppercase tracking-tighter bg-white/80 px-2 py-1 rounded shadow-sm"
            >
                ★ {repo.stars}
            </span>
        {/if}

        <h4 class="text-2xl lg:text-3xl font-bold mt-6 mb-4">
            {repo.name}
        </h4>

        <p class="text-gray-500 text-sm lg:text-base leading-relaxed">
            {repo.desc}
        </p>
    </div>

    <div class="flex flex-wrap gap-2 mt-6">
        {#each repo.tags as tag}
            <span
                class="text-[9px] lg:text-[10px] font-bold border border-black/5 bg-white/50 px-3 py-1 rounded-full uppercase"
            >
                {tag}
            </span>
        {/each}
    </div>
</a>
