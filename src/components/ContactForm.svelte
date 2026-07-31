<script lang="ts">
  import { lang } from '../stores/lang.svelte';
  import { translations } from '../data/translations';

  const t = $derived(translations[lang.current].contact);

  let formStatus = $state<'idle' | 'sending' | 'success' | 'error'>('idle');

  const WEB3FORMS_KEY = 'a3a10d25-85f6-418b-aa5e-45731357594c';

  async function handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    formStatus = 'sending';

    const formData = new FormData(form);
    formData.append('access_key', WEB3FORMS_KEY);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        formStatus = 'success';
        form.reset();
        setTimeout(() => (formStatus = 'idle'), 5000);
      } else {
        formStatus = 'error';
      }
    } catch {
      formStatus = 'error';
    }
  }
</script>

<section id="contact">
  <div class="wrap contact-grid reveal-group">
    <div class="contact-text">
      <span class="eyebrow">{t.eyebrow}</span>
      <h2>{t.heading}</h2>
      <p>{t.description}</p>
      <div class="social-row">
        <a href="https://github.com/dincertekin" class="icon-link" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
          <svg class="icon" viewBox="0 0 24 24"><use href="#icon-github"/></svg>
        </a>
        <a href="https://linkedin.com/in/dincertekin" class="icon-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
          <svg class="icon" viewBox="0 0 24 24"><use href="#icon-linkedin"/></svg>
        </a>
        <a href="https://youtube.com/@dincertekin" class="icon-link" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
          <svg class="icon" viewBox="0 0 24 24"><use href="#icon-youtube"/></svg>
        </a>
      </div>
    </div>

    <form class="contact-form" onsubmit={handleSubmit}>
      <div class="form-field">
        <label for="name">{t.labelName}</label>
        <input type="text" id="name" name="name" placeholder={t.placeholderName} required />
      </div>
      <div class="form-field">
        <label for="email">{t.labelEmail}</label>
        <input type="email" id="email" name="email" placeholder={t.placeholderEmail} required />
      </div>
      <div class="form-field">
        <label for="message">{t.labelMessage}</label>
        <textarea id="message" name="message" rows={4} placeholder={t.placeholderMessage} required></textarea>
      </div>
      <div class="h-captcha" data-captcha="true"></div>
      {#if formStatus === 'success'}
        <p class="form-feedback success">{t.success}</p>
      {:else if formStatus === 'error'}
        <p class="form-feedback error">{t.error}</p>
      {/if}
      <button type="submit" class="form-submit" disabled={formStatus === 'sending'}>
        {formStatus === 'sending' ? t.sending : t.submit}
      </button>
    </form>
  </div>
</section>
