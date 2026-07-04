<script setup>
import { onMounted, onUnmounted, ref } from "vue";

defineProps({
  hero: {
    type: Object,
    required: true,
  },
});

const ventures = [
  { label: "Orbit", color: "#B5622A" },
  { label: "InfluencerMkt", color: "#1F6F63" },
  { label: "LuminaAI", color: "#2B2D24" },
  { label: "WorldCup1vs1", color: "#9C9E93" },
];

// Scroll-driven reveal: hero text starts faded (low-opacity ink) and
// solidifies to full ink-900 black as the section scrolls up out of view.
const heroSection = ref(null);
const revealProgress = ref(0); // 0 = faded, 1 = full color
let ticking = false;

const MIN_ALPHA = 0.28;

function updateProgress() {
  ticking = false;
  const el = heroSection.value;
  if (!el) return;

  const rect = el.getBoundingClientRect();
  // Fully revealed once we've scrolled ~60% of the hero's height.
  const distance = rect.height * 0.6 || 1;
  const scrolled = Math.min(Math.max(-rect.top, 0), distance);
  revealProgress.value = scrolled / distance;
}

function onScroll() {
  if (ticking) return;
  ticking = true;
  window.requestAnimationFrame(updateProgress);
}

onMounted(() => {
  updateProgress();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
  window.removeEventListener("resize", onScroll);
});

function revealStyle(baseAlpha = 1) {
  const alpha = MIN_ALPHA + (baseAlpha - MIN_ALPHA) * revealProgress.value;
  return { color: `rgba(20, 21, 15, ${alpha})`, transition: "color 0.1s linear" };
}
</script>

<template>
  <section id="home" ref="heroSection" class="relative overflow-hidden pt-32 pb-20 lg:pt-44 lg:pb-32">
    <div class="mx-auto max-w-4xl px-6 text-center">
      <div class="flex flex-col items-center">
        <p class="idx text-copper-600">00 — {{ hero.greeting }}</p>

        <h1
          class="mt-6 font-display text-[2.6rem] font-medium leading-[1.05] sm:text-6xl lg:text-7xl"
          :style="revealStyle(1)"
        >
          {{ hero.name }}
        </h1>

        <p class="mt-6 text-xl sm:text-2xl" :style="revealStyle(0.85)">
          {{ hero.rolePrefix }}
          <span class="font-display italic text-copper-600">{{ hero.roleHighlight }}</span>
        </p>

        <p class="mt-6 max-w-2xl text-base leading-relaxed sm:text-lg" :style="revealStyle(0.6)">
          {{ hero.summary }}
        </p>

        <div class="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          <a
            :href="hero.primaryCta.href"
            class="idx border-b-2 border-ink-900 pb-1 text-ink-900 transition-colors hover:border-copper-500 hover:text-copper-600"
          >
            {{ hero.primaryCta.label }} →
          </a>

          <div class="flex items-center gap-3">
            <a
              v-for="social in hero.socials"
              :key="social.label"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              class="flex h-10 w-10 items-center justify-center rounded-full border border-ink-900/15 text-ink-700 transition-colors hover:border-copper-500 hover:text-copper-600"
              :aria-label="social.label"
            >
              <Icon :name="social.icon" size="18" />
            </a>
          </div>
        </div>

        <a
          :href="hero.resume.href"
          target="_blank"
          :download="hero.resume.download || true"
          class="idx mt-10 flex items-center gap-3 border border-ink-900/15 px-5 py-3 text-ink-900 transition-colors hover:border-copper-500 hover:text-copper-600"
        >
          {{ hero.resume.label }}
          <span aria-hidden="true">↓</span>
        </a>

        <!-- Status line: what's actively being built, dev-log style -->
        <div class="idx mt-14 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-ink-900/10 pt-6 text-ink-500">
          <span class="text-ink-300">Currently building —</span>
          <span v-for="v in ventures" :key="v.label" class="flex items-center gap-2">
            <span class="h-1.5 w-1.5 rounded-full" :style="{ backgroundColor: v.color }" />
            {{ v.label }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
