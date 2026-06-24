<script lang="ts">
    import { lang } from "../stores/lang.svelte";
    import { translations } from "../data/translations";

    const t = $derived(translations[lang.current].footer);
</script>

<footer>
    <div class="wrap">
        <div class="footer-left">
            <p>{t.built}</p>
        </div>
        <div class="lang-switcher">
            <button
                class:active={lang.current === "EN"}
                onclick={() => (lang.current = "EN")}>English</button
            >
            <span class="sep">·</span>
            <button
                class:active={lang.current === "TR"}
                onclick={() => (lang.current = "TR")}>Türkçe</button
            >
        </div>
    </div>
</footer>
