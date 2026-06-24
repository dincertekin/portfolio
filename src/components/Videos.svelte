<script lang="ts">
  import { lang } from '../stores/lang.svelte';
  import { translations } from '../data/translations';
  import { VIDEOS } from '../data/content';

  const t = $derived(translations[lang.current].videos);
</script>

<section id="videos">
  <div class="wrap">
    <div class="section-head reveal-init">
      <span class="eyebrow">{t.eyebrow}</span>
      <h2>{t.heading}</h2>
      <p>{t.subtext}</p>
    </div>
    <div class="video-grid reveal-group">
      {#each VIDEOS as v, i}
        <a href={v.url} class="video-card" target="_blank" rel="noopener noreferrer">
          <div class="video-thumb">
            <div class="play-btn">
              <svg viewBox="0 0 24 24"><use href="#icon-play"/></svg>
            </div>
          </div>
          <h4>{t.items[i].title}</h4>
          <span>{t.items[i].meta}</span>
        </a>
      {/each}
    </div>
  </div>
</section>
