<script setup>
const { targetRef, revealStyle } = useScrollReveal();

defineProps({
  section: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <section id="experience" class="border-t border-ink-900/10 bg-ink-900 py-20 text-paper-100 lg:py-32">
    <div ref="targetRef" class="mx-auto max-w-6xl px-6" :style="revealStyle">
      <p class="idx text-copper-300">02 — {{ section.kicker }}</p>
      <h2 class="mt-4 max-w-2xl font-display text-3xl leading-tight sm:text-4xl">
        {{ section.title }}
      </h2>
      <p class="mt-4 max-w-2xl text-lg text-ink-100/70">{{ section.description }}</p>

      <!-- Left-rail changelog: distinct from the alternating center-line timeline pattern -->
      <div class="mt-16 space-y-0 border-l border-white/15 pl-8 sm:pl-10">
        <div
          v-for="(item, index) in section.items"
          :key="`${item.company}-${index}`"
          class="relative pb-14 last:pb-0"
        >
          <span class="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-copper-500 sm:-left-[calc(2.5rem+5px)]" />

          <div class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 class="font-display text-xl text-paper-50">{{ item.company }}</h3>
            <span class="idx text-ink-100/60">{{ item.duration }}</span>
          </div>
          <p class="mt-1 text-copper-300">{{ item.position }} · {{ item.location }}</p>

          <ul class="mt-4 space-y-2 text-ink-100/75">
            <li v-for="(responsibility, rIndex) in item.responsibilities" :key="rIndex" class="flex gap-3">
              <span class="idx mt-1 text-ink-100/30">—</span>
              <span>{{ responsibility }}</span>
            </li>
          </ul>

          <p v-if="item.contact" class="mt-4 text-sm text-ink-100/60">{{ item.contact }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
