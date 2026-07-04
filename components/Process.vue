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
  <section id="technical-skills" class="border-t border-ink-900/10 py-20 lg:py-32">
    <div ref="targetRef" class="mx-auto max-w-6xl px-6" :style="revealStyle">
      <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p class="idx text-copper-600">03 — {{ section.kicker }}</p>
          <h2 class="mt-4 font-display text-3xl leading-tight text-ink-900 sm:text-4xl">
            {{ section.title }}
          </h2>
        </div>
        <p class="max-w-sm text-ink-500">{{ section.description }}</p>
      </div>

      <!-- Spec-sheet table: rows, not cards. Deliberately different from every other grid on the page. -->
      <div class="mt-14 divide-y divide-ink-900/10 border-y border-ink-900/10">
        <div v-for="category in section.categories" :key="category.id" class="grid gap-6 py-8 sm:grid-cols-[220px_1fr]">
          <div class="flex items-start gap-3">
            <Icon :name="category.icon" class="mt-1 h-6 w-6 text-ink-700" />
            <div>
              <h3 class="font-display text-lg text-ink-900">{{ category.title }}</h3>
              <p class="text-sm text-ink-500">{{ category.description }}</p>
            </div>
          </div>

          <div class="space-y-3">
            <div v-for="tech in category.technologies" :key="tech.name" class="flex items-center gap-4">
              <span class="w-40 flex-shrink-0 truncate text-sm font-medium text-ink-700 sm:w-48">{{ tech.name }}</span>
              <div class="h-1.5 flex-1 rounded-full bg-ink-900/8">
                <div
                  class="h-full rounded-full"
                  :style="{ width: `${tech.level}%`, backgroundColor: category.color || '#B5622A' }"
                />
              </div>
              <span class="idx w-10 flex-shrink-0 text-right text-ink-300">{{ tech.level }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Tools: inline chip row, intentionally lighter-weight than the table above -->
      <div class="mt-16">
        <h3 class="font-display text-xl text-ink-900">{{ section.toolsHeading }}</h3>
        <p class="mt-2 text-ink-500">{{ section.toolsDescription }}</p>

        <div class="mt-6 flex flex-wrap gap-3">
          <div
            v-for="tool in section.tools"
            :key="tool.name"
            class="flex items-center gap-2 border border-ink-900/15 px-4 py-2 text-sm text-ink-700 transition-colors hover:border-copper-500 hover:text-copper-600"
          >
            <Icon :name="tool.icon" class="h-5 w-5" />
            {{ tool.name }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
