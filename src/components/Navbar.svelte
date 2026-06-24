<script lang="ts">
    import { lang } from "../stores/lang.svelte";
    import { translations } from "../data/translations";

    let navOpen = $state(false);
    const t = $derived(translations[lang.current].nav);
</script>

<nav class="navbar" class:is-open={navOpen}>
    <div class="wrap">
        <a href="/" class="nav-logo">Dinçer Tekin</a>
        <ul class="nav-links">
            <li><a href="#about">{t.about}</a></li>
            <li><a href="#projects">{t.projects}</a></li>
            <li><a href="#videos">{t.videos}</a></li>
            <li><a href="#skills">{t.skills}</a></li>
            <li><a href="#contact">{t.contact}</a></li>
        </ul>
        <a href="#contact" class="nav-cta">{t.cta}</a>
        <button
            class="nav-toggle"
            aria-label="Toggle menu"
            aria-expanded={navOpen}
            aria-controls="navMobile"
            onclick={() => (navOpen = !navOpen)}
        >
            <span></span><span></span><span></span>
        </button>
    </div>
    <div class="nav-mobile" id="navMobile">
        <a href="#about" onclick={() => (navOpen = false)}>{t.about}</a>
        <a href="#projects" onclick={() => (navOpen = false)}>{t.projects}</a>
        <a href="#videos" onclick={() => (navOpen = false)}>{t.videos}</a>
        <a href="#skills" onclick={() => (navOpen = false)}>{t.skills}</a>
        <a href="#contact" onclick={() => (navOpen = false)}>{t.contact}</a>
        <a href="#contact" class="nav-cta" onclick={() => (navOpen = false)}
            >{t.cta}</a
        >
    </div>
</nav>
