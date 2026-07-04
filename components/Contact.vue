<script setup>
import { computed, ref } from "vue";

defineProps({
  section: {
    type: Object,
    required: true,
  },
});

const form = ref({
  firstName: "",
  lastName: "",
  email: "",
  subject: "",
  message: "",
});

const mailtoHref = computed(() => {
  const fullName = [form.value.firstName, form.value.lastName].filter(Boolean).join(" ");
  const subject = encodeURIComponent(form.value.subject || "Project Discussion");
  const body = encodeURIComponent(
    [
      `Name: ${fullName || "Not provided"}`,
      `Email: ${form.value.email || "Not provided"}`,
      "",
      form.value.message || "",
    ].join("\n")
  );

  return `mailto:samsonkebede4@gmail.com?subject=${subject}&body=${body}`;
});

const handleSubmit = () => {
  if (typeof window !== "undefined") {
    window.location.href = mailtoHref.value;
  }
};
</script>

<template>
  <section id="contact" class="border-t border-ink-900/10 bg-ink-900 py-20 text-paper-100 lg:py-32">
    <div class="mx-auto max-w-6xl px-6">
      <div class="grid gap-16 lg:grid-cols-[0.8fr_1fr]">
        <div>
          <p class="idx text-copper-300">05 — {{ section.kicker }}</p>
          <h2 class="mt-4 font-display text-3xl leading-tight text-paper-50 sm:text-4xl">
            {{ section.title }}
          </h2>
          <p class="mt-4 text-lg text-ink-100/70">{{ section.description }}</p>

          <ul class="mt-10 space-y-5">
            <li v-for="(info, index) in section.info" :key="index">
              <a
                :href="info.href"
                target="_blank"
                rel="noopener noreferrer"
                class="group flex items-center gap-4 border-b border-white/10 pb-4 transition-colors hover:border-copper-300"
              >
                <Icon :name="info.icon" class="h-5 w-5 text-copper-300" />
                <span>
                  <span class="idx block text-ink-100/60">{{ info.title }}</span>
                  <span class="text-paper-50 group-hover:text-copper-300">{{ info.value }}</span>
                </span>
              </a>
            </li>
          </ul>

          <div class="mt-10 flex items-center gap-3">
            <span class="h-2 w-2 rounded-full bg-signal-500" />
            <div>
              <p class="font-display text-lg text-paper-50">{{ section.availabilityTitle }}</p>
              <p class="text-sm text-ink-100/60">{{ section.availabilityDescription }}</p>
            </div>
          </div>
        </div>

        <form class="space-y-6" @submit.prevent="handleSubmit">
          <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label class="idx mb-2 block text-ink-100/60">{{ section.form.firstNameLabel }}</label>
              <input
                v-model="form.firstName"
                type="text"
                :placeholder="section.form.firstNamePlaceholder"
                class="w-full border-b border-white/20 bg-transparent py-2 text-paper-50 placeholder:text-ink-100/30 focus:border-copper-300 focus:outline-none"
              />
            </div>
            <div>
              <label class="idx mb-2 block text-ink-100/60">{{ section.form.lastNameLabel }}</label>
              <input
                v-model="form.lastName"
                type="text"
                :placeholder="section.form.lastNamePlaceholder"
                class="w-full border-b border-white/20 bg-transparent py-2 text-paper-50 placeholder:text-ink-100/30 focus:border-copper-300 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label class="idx mb-2 block text-ink-100/60">{{ section.form.emailLabel }}</label>
            <input
              v-model="form.email"
              type="email"
              :placeholder="section.form.emailPlaceholder"
              class="w-full border-b border-white/20 bg-transparent py-2 text-paper-50 placeholder:text-ink-100/30 focus:border-copper-300 focus:outline-none"
            />
          </div>

          <div>
            <label class="idx mb-2 block text-ink-100/60">{{ section.form.subjectLabel }}</label>
            <input
              v-model="form.subject"
              type="text"
              :placeholder="section.form.subjectPlaceholder"
              class="w-full border-b border-white/20 bg-transparent py-2 text-paper-50 placeholder:text-ink-100/30 focus:border-copper-300 focus:outline-none"
            />
          </div>

          <div>
            <label class="idx mb-2 block text-ink-100/60">{{ section.form.messageLabel }}</label>
            <textarea
              v-model="form.message"
              :placeholder="section.form.messagePlaceholder"
              rows="4"
              class="w-full resize-none border-b border-white/20 bg-transparent py-2 text-paper-50 placeholder:text-ink-100/30 focus:border-copper-300 focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            class="idx flex items-center gap-2 border border-copper-300 px-6 py-3 text-copper-300 transition-colors hover:bg-copper-300 hover:text-ink-900"
          >
            <Icon name="lucide:send" size="16" />
            {{ section.form.submitLabel }}
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
