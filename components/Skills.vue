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
  <section id="approach" class="border-t border-ink-900/10 bg-paper-200/60 py-20 lg:py-32">
    <div ref="targetRef" class="mx-auto max-w-6xl px-6" :style="revealStyle">
      <div class="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p class="idx text-copper-600">03.1 — {{ section.kicker }}</p>
          <h2 class="mt-4 font-display text-3xl leading-tight text-ink-900 sm:text-4xl">
            {{ section.title }}
          </h2>
          <p class="mt-4 text-lg text-ink-500">{{ section.description }}</p>

          <div class="mt-10 flex items-baseline gap-3">
            <span class="font-display text-6xl text-ink-900">{{ section.experienceValue }}</span>
            <span class="idx text-ink-500">{{ section.experienceLabel }}</span>
          </div>
        </div>

        <!-- Horizontal meters with oversized numerals on the left, unlike the compact bars in the skills table -->
        <div class="space-y-8">
          <div v-for="skill in section.items" :key="skill.name" class="grid grid-cols-[3.5rem_1fr] items-center gap-5 sm:grid-cols-[4.5rem_1fr]">
            <span class="font-display text-3xl leading-none text-ink-900 sm:text-4xl">{{ skill.percentage }}</span>
            <div>
              <div class="flex items-center gap-2 text-ink-900">
                <Icon :name="skill.icon" class="h-4 w-4" />
                <span class="font-medium">{{ skill.name }}</span>
              </div>
              <div class="mt-2 h-px w-full bg-ink-900/10">
                <div class="h-px" :style="{ width: `${skill.percentage}%`, backgroundColor: skill.color, height: '2px' }" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
