<script lang="ts">
  import { onMount } from 'svelte';
  import { lang } from '../stores/lang.svelte';
  import { translations } from '../data/translations';
  import { SKILL_GROUPS } from '../data/content';

  const t = $derived(translations[lang.current].skills);

  function iconMarkup(icon: string): string {
    if (icon.startsWith('ic:')) {
      const slug = icon.slice(3);
      return `<img class="skill-icon" src="https://cdn.simpleicons.org/${slug}" alt="" loading="lazy" onerror="this.style.visibility='hidden'">`;
    }
    const path = icon.slice(4);
    return `<svg class="skill-icon-svg" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="${path}"/></svg>`;
  }

  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const fill = el.querySelector('.progress-fill') as HTMLElement | null;
          if (fill) fill.style.width = (el.dataset.percent ?? '0') + '%';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    document.querySelectorAll('.skill-item').forEach(item => observer.observe(item));
  });
</script>

<section id="skills" class="bg-alt">
  <div class="wrap">
    <div class="section-head reveal-init">
      <span class="eyebrow">{t.eyebrow}</span>
      <h2>{t.heading}</h2>
    </div>
    <div class="skills-grid reveal-group">
      {#each SKILL_GROUPS as group, i}
        <div class="skill-group">
          <h4>{t.groups[i]}</h4>
          <div class="skill-items">
            {#each group.items as item}
              <div class="skill-item" data-percent={item.percent}>
                <div class="skill-item-head">
                  <div class="skill-item-left">
                    {@html iconMarkup(item.icon)}
                    <span class="skill-name">{item.name}</span>
                  </div>
                  <span class="skill-percent">{item.percent}%</span>
                </div>
                <div class="progress-track"><div class="progress-fill"></div></div>
              </div>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
