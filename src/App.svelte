<script lang="ts">
    import { onMount } from "svelte";
    import { lang } from "./stores/lang.svelte";
    import Navbar from "./components/Navbar.svelte";
    import Hero from "./components/Hero.svelte";
    import About from "./components/About.svelte";
    import Projects from "./components/Projects.svelte";
    import Videos from "./components/Videos.svelte";
    import Skills from "./components/Skills.svelte";
    import ContactForm from "./components/ContactForm.svelte";
    import Footer from "./components/Footer.svelte";

    $effect(() => {
        document.documentElement.lang = lang.current === "EN" ? "en" : "tr";
        localStorage.setItem("portfolio-lang", lang.current);
    });

    onMount(() => {
        // Scroll reveal for all sections (excludes hero which reveals itself)
        const targets = document.querySelectorAll(
            ".reveal-init:not(#heroText):not(#heroTerminal), .reveal-group",
        );
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 },
        );

        targets.forEach((t) => observer.observe(t));
    });
</script>

<!-- SVG sprite sheet: icons referenced via <use href="#icon-..."> across all components -->
<svg style="display:none" aria-hidden="true">
    <symbol id="icon-github" viewBox="0 0 24 24" fill="currentColor">
        <path
            d="M12 0a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.23c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.6-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 0z"
        />
    </symbol>
    <symbol
        id="icon-external"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
    >
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <path d="M15 3h6v6" />
        <path d="M10 14L21 3" />
    </symbol>
    <symbol id="icon-play" viewBox="0 0 24 24">
        <path d="M8 5v14l11-7z" />
    </symbol>
    <symbol id="icon-linkedin" viewBox="0 0 24 24" fill="currentColor">
        <path
            d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45z"
        />
    </symbol>
    <symbol id="icon-youtube" viewBox="0 0 24 24" fill="currentColor">
        <path
            d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.5V8.5l6.3 3.5-6.3 3.5z"
        />
    </symbol>
    <symbol id="icon-x" viewBox="0 0 24 24" fill="currentColor">
        <path
            d="M18.9 2H22l-7 8 7.5 10h-5.9l-4.6-6-5.3 6H2.5l7.5-8.5L2.7 2h6l4.1 5.5L18.9 2zm-2 16h1.7L7.2 4H5.4L16.9 18z"
        />
    </symbol>
</svg>

<Navbar />
<Hero />
<About />
<Projects />
<Videos />
<Skills />
<ContactForm />
<Footer />
