<script lang="ts">
    import { onMount } from "svelte";
    import { lang } from "../stores/lang.svelte";
    import { translations } from "../data/translations";

    const t = $derived(translations[lang.current].hero);

    // Re-run terminal animation whenever language changes
    let terminalKey = $derived(lang.current);

    onMount(() => {
        // Reveal hero elements immediately on load
        requestAnimationFrame(() => {
            document.getElementById("heroText")?.classList.add("is-visible");
            setTimeout(
                () =>
                    document
                        .getElementById("heroTerminal")
                        ?.classList.add("is-visible"),
                150,
            );
        });
    });

    function runTerminal(node: HTMLElement, lines: typeof t.terminal) {
        const reduceMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;

        function renderLines(lineIndex: number, charIndex: number) {
            let html = "";
            for (let i = 0; i < lineIndex; i++) {
                const { type, text } = lines[i];
                html +=
                    type === "cmd"
                        ? `<div class="line"><span class="prompt">$</span> ${text}</div>`
                        : `<div class="line"><span class="out">${text}</span></div>`;
            }
            if (lineIndex < lines.length) {
                const { type, text } = lines[lineIndex];
                const partial = text.slice(0, charIndex);
                html +=
                    type === "cmd"
                        ? `<div class="line"><span class="prompt">$</span> ${partial}<span class="cursor"></span></div>`
                        : `<div class="line"><span class="out">${partial}</span><span class="cursor"></span></div>`;
            }
            node.innerHTML = html;
        }

        if (reduceMotion) {
            renderLines(lines.length, 0);
            return;
        }

        let lineIndex = 0;
        let charIndex = 0;
        let stopped = false;

        function tick() {
            if (stopped || lineIndex >= lines.length) return;
            charIndex++;
            renderLines(lineIndex, charIndex);
            if (charIndex >= lines[lineIndex].text.length) {
                lineIndex++;
                charIndex = 0;
                setTimeout(tick, 400);
            } else {
                setTimeout(tick, 28);
            }
        }
        tick();

        return {
            destroy() {
                stopped = true;
            },
        };
    }
</script>

<section class="hero">
    <div class="wrap">
        <div class="hero-text reveal-init" id="heroText">
            <span class="eyebrow">{t.eyebrow}</span>
            <h1>
                {t.h1.part1}<span class="highlight">{t.h1.highlight}</span>{t.h1
                    .part2}
            </h1>
            <p>{t.paragraph}</p>
            <div class="hero-actions">
                <a href="#projects" class="btn-primary">{t.btnProjects}</a>
                <a href="#contact" class="btn-secondary">{t.btnContact}</a>
            </div>
        </div>

        <div class="terminal reveal-init" id="heroTerminal">
            <div class="terminal-bar">
                <span class="dot red"></span>
                <span class="dot yellow"></span>
                <span class="dot green"></span>
                <span class="terminal-title">dincer@dincertekin.com — zsh</span>
            </div>
            {#key terminalKey}
                <div class="terminal-body" use:runTerminal={t.terminal}></div>
            {/key}
        </div>
    </div>
</section>
