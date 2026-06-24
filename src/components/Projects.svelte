<script lang="ts">
  import { lang } from '../stores/lang.svelte';
  import { translations } from '../data/translations';
  import { PROJECTS } from '../data/content';

  const t = $derived(translations[lang.current].projects);
</script>

<section id="projects" class="bg-alt">
  <div class="wrap">
    <div class="section-head reveal-init">
      <span class="eyebrow">{t.eyebrow}</span>
      <h2>{t.heading}</h2>
      <p>{t.subtext}</p>
    </div>
    <div class="project-grid reveal-group">
      {#each PROJECTS as p, i}
        <div class="project-card">
          <div class="project-top">
            <h3>{t.items[i].title}</h3>
            <div class="project-links">
              <a href={p.repoUrl} class="icon-link" aria-label="View source on GitHub" target="_blank" rel="noopener noreferrer">
                <svg class="icon" viewBox="0 0 24 24"><use href="#icon-github"/></svg>
              </a>
              {#if p.demoUrl}
                <a href={p.demoUrl} class="icon-link" aria-label="View live demo" target="_blank" rel="noopener noreferrer">
                  <svg class="icon" viewBox="0 0 24 24"><use href="#icon-external"/></svg>
                </a>
              {/if}
            </div>
          </div>
          <p>{t.items[i].description}</p>
          <div class="tag-row">
            {#each p.tags as tag}
              <span class="tech-tag">{tag}</span>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
