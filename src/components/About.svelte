<script lang="ts">
  import { lang } from '../stores/lang.svelte';
  import { translations } from '../data/translations';

  const t = $derived(translations[lang.current].about);
</script>

<section id="about">
  <div class="wrap">
    <div class="section-head reveal-init">
      <span class="eyebrow">{t.eyebrow}</span>
      <h2>{t.heading}</h2>
    </div>
    <div class="about-grid reveal-group">
      <div class="about-text">
        <p>{@html t.p1}</p>
        <p>{@html t.p2}</p>
        <p>{@html t.p3}</p>
      </div>
      <div class="focus-list">
        <div class="focus-item">
          <span class="tag">{t.systems.tag}</span>
          <div class="body">
            <h4>{t.systems.title}</h4>
            <p>{t.systems.desc}</p>
          </div>
        </div>
        <div class="focus-item">
          <span class="tag">{t.product.tag}</span>
          <div class="body">
            <h4>{t.product.title}</h4>
            <p>{t.product.desc}</p>
          </div>
        </div>
        <div class="focus-item">
          <span class="tag">{t.security.tag}</span>
          <div class="body">
            <h4>{t.security.title}</h4>
            <p>{t.security.desc}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
