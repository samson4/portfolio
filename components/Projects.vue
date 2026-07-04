<script setup>
defineProps({
  section: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <section id="about" class="border-t border-ink-900/10 py-20 lg:py-32">
    <div class="mx-auto max-w-6xl px-6">
      <div class="grid gap-14 lg:grid-cols-[0.6fr_1fr]">
        <!-- Sidebar: venture index, distinct from every other section's layout -->
        <div class="lg:sticky lg:top-32 lg:self-start">
          <p class="idx text-copper-600">01 — {{ section.kicker }}</p>
          <h2 class="mt-4 font-display text-3xl leading-tight text-ink-900 sm:text-4xl">
            {{ section.title }}
          </h2>

          <ul v-if="section.ventures" class="mt-10 space-y-6">
            <li
              v-for="(venture, i) in section.ventures"
              :key="venture.name"
              class="border-l-2 border-ink-900/10 pl-4"
            >
              <p class="idx text-ink-300">{{ String(i + 1).padStart(2, '0') }}</p>
              <p class="mt-1 font-display text-lg text-ink-900">{{ venture.name }}</p>
              <p class="text-sm text-ink-500">{{ venture.role }}</p>
              <p class="mt-1 text-sm leading-relaxed text-ink-500">{{ venture.note }}</p>
            </li>
          </ul>
        </div>

        <!-- Main column: pull quote + narrative, no card, no image grid -->
        <div>
          <blockquote
            v-if="section.pullQuote"
            class="font-display text-2xl italic leading-snug text-ink-900 sm:text-3xl"
          >
            “{{ section.pullQuote }}”
          </blockquote>

          <div class="mt-10 space-y-6 text-lg leading-relaxed text-ink-700">
            <p v-for="(paragraph, index) in section.paragraphs" :key="index">
              {{ paragraph.prefix }}
              <template v-if="paragraph.linkLabel && paragraph.linkHref">
                <a
                  :href="paragraph.linkHref"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="border-b border-copper-500 font-medium text-ink-900 hover:text-copper-600"
                >{{ paragraph.linkLabel }}</a>
              </template>
              <template v-if="paragraph.suffix">{{ ` ${paragraph.suffix}` }}</template>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
