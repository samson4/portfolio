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
  <section id="work" class="border-t border-ink-900/10 py-20 lg:py-32">
    <div ref="targetRef" class="mx-auto max-w-6xl px-6" :style="revealStyle">
      <p class="idx text-copper-600">04 — {{ section.kicker }}</p>
      <h2 class="mt-4 max-w-2xl font-display text-3xl leading-tight text-ink-900 sm:text-4xl">
        {{ section.title }}
      </h2>
      <p class="mt-4 max-w-3xl text-lg text-ink-500">{{ section.description }}</p>

      <div class="mt-14 divide-y divide-ink-900/10 border-t border-ink-900/10">
        <article
          v-for="project in section.items"
          :key="project.id"
          class="grid gap-6 py-10 sm:grid-cols-[100px_1fr] lg:grid-cols-[120px_1fr_220px]"
        >
          <div class="flex items-start gap-3 sm:block">
            <span class="font-display text-4xl text-ink-900/15 sm:text-5xl">{{ String(project.id + 1).padStart(2, '0') }}</span>
            <span class="text-3xl sm:hidden" aria-hidden="true">{{ project.icon }}</span>
          </div>

          <div>
            <div class="flex flex-wrap items-baseline gap-3">
              <h3 class="font-display text-2xl text-ink-900">{{ project.title }}</h3>
              <span v-if="project.tagline" class="text-ink-500">{{ project.tagline }}</span>
            </div>

            <p class="mt-3 max-w-2xl leading-relaxed text-ink-700">{{ project.description }}</p>

            <div class="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-ink-500">
              <span v-for="tech in project.technologies" :key="`${project.id}-${tech.name}`" class="flex items-center gap-1.5">
                <Icon :name="tech.icon" class="h-4 w-4" />
                {{ tech.name }}
              </span>
            </div>
          </div>

          <div class="flex flex-row gap-6 sm:col-start-2 lg:col-start-3 lg:flex-col lg:items-end lg:gap-3 lg:text-right">
            <span v-if="project.status" class="idx text-signal-500">{{ project.status }}</span>
            <span v-if="project.year" class="idx text-ink-300">{{ project.year }}</span>
            <a
              v-if="project.liveUrl"
              :href="project.liveUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="idx border-b border-copper-500 text-ink-900 hover:text-copper-600"
            >
              Live →
            </a>
            <a
              v-if="project.githubUrl"
              :href="project.githubUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="idx border-b border-ink-900/30 text-ink-700 hover:border-copper-500 hover:text-copper-600"
            >
              Source →
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
