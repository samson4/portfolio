import { computed, onMounted, onUnmounted, ref } from "vue";

const MIN_OPACITY = 0.28;
const VIEWPORT_MIDPOINT = 0.5;

export function useScrollReveal(baseOpacity = 1) {
  const targetRef = ref<HTMLElement | null>(null);
  const revealProgress = ref(0);
  let ticking = false;

  function updateProgress() {
    ticking = false;

    if (typeof window === "undefined") return;

    const el = targetRef.value;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const start = window.innerHeight;
    const end = window.innerHeight * VIEWPORT_MIDPOINT;
    const distance = Math.max(start - end, 1);
    const traveled = start - rect.top;

    revealProgress.value = Math.min(Math.max(traveled / distance, 0), 1);
  }

  function onScroll() {
    if (ticking || typeof window === "undefined") return;

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

  const revealStyle = computed(() => {
    const opacity = MIN_OPACITY + (baseOpacity - MIN_OPACITY) * revealProgress.value;

    return {
      opacity: String(opacity),
      transition: "opacity 0.1s linear",
    };
  });

  return {
    targetRef,
    revealProgress,
    revealStyle,
  };
}
