<script lang="ts">
    import { scale } from "svelte/transition";
    import type { Translation } from "../data/types";

    let { t }: { t: Translation } = $props();
    let formStatus = $state<"idle" | "sending" | "success" | "error">("idle");

    // Web3Forms Access Key
    const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

    async function handleSubmit(event: SubmitEvent) {
        event.preventDefault();
        const form = event.currentTarget as HTMLFormElement;
        formStatus = "sending";

        const formData = new FormData(form);
        formData.append("access_key", ACCESS_KEY);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });
            const data = await response.json();

            if (data.success) {
                formStatus = "success";
                form.reset();
                // Reset status after 5 seconds to allow for new messages
                setTimeout(() => (formStatus = "idle"), 5000);
            } else {
                formStatus = "error";
            }
        } catch {
            formStatus = "error";
        }
    }
</script>

<section id="contact" class="py-20 lg:py-32 border-t border-black/5">
    <div class="max-w-2xl mx-auto">
        <h2 class="text-3xl lg:text-4xl font-bold text-center mb-12">
            {t.form.title}
        </h2>

        {#if formStatus === "success"}
            <div
                in:scale
                class="p-8 rounded-4xl text-center font-bold bg-green-50 text-green-700 border border-green-100"
            >
                {t.form.thanks}
            </div>
        {:else}
            <form onsubmit={handleSubmit} class="space-y-4 lg:space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                    <input
                        type="text"
                        name="name"
                        placeholder={t.form.name}
                        required
                        autocomplete="name"
                        class="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-black outline-none transition-all placeholder:text-gray-400"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder={t.form.email}
                        required
                        autocomplete="email"
                        class="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-black outline-none transition-all placeholder:text-gray-400"
                    />
                </div>

                <textarea
                    name="message"
                    rows="5"
                    placeholder={t.form.message}
                    required
                    class="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-black outline-none transition-all placeholder:text-gray-400 resize-none"
                ></textarea>

                <div class="h-captcha" data-captcha="true"></div>

                {#if formStatus === "error"}
                    <p class="text-red-500 text-sm font-medium text-center">
                        Something went wrong. Please try again later.
                    </p>
                {/if}

                <button
                    type="submit"
                    disabled={formStatus === "sending"}
                    class="w-full bg-black text-white font-bold py-5 rounded-2xl hover:bg-zinc-800 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                    {formStatus === "sending" ? t.form.sending : t.form.send}
                </button>
            </form>
        {/if}
    </div>
</section>
