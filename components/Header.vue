<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { motion } from "motion-v";
import { Menu, X } from "lucide-vue-next";

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);
const activeSection = ref("home");

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

onMounted(() => {
  const sections = navItems
    .map((item) => document.querySelector(item.href))
    .filter(Boolean);

  const handleScroll = () => {
    isScrolled.value = window.scrollY > 32;

    let currentSection = "home";
    sections.forEach((section) => {
      if (section.offsetTop - 140 <= window.scrollY) {
        currentSection = section.id;
      }
    });

    activeSection.value = currentSection;
  };

  handleScroll();
  window.addEventListener("scroll", handleScroll, { passive: true });
  onUnmounted(() => window.removeEventListener("scroll", handleScroll));
});
</script>

<template>
  <motion.header
    initial="{ y: -80, opacity: 0 }"
    animate="{ y: 0, opacity: 1 }"
    class="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6"
  >
    <div
      class="mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 transition-all duration-300 sm:px-6"
      :class="
        isScrolled
          ? 'border-white/70 bg-white/82 shadow-[0_18px_45px_rgba(15,23,42,0.12)] backdrop-blur-xl'
          : 'border-white/45 bg-white/62 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur-lg'
      "
    >
      <motion.a
        href="#home"
        initial="{ opacity: 0 }"
        animate="{ opacity: 1 }"
        transition="{ delay: 0.15 }"
        class="text-2xl font-bold tracking-tight text-orange-500"
      >
        Samson
      </motion.a>

      <nav class="hidden items-center gap-2 md:flex">
        <motion.a
          v-for="(item, index) in navItems"
          :key="item.href"
          :href="item.href"
          initial="{ opacity: 0, y: -16 }"
          animate="{ opacity: 1, y: 0 }"
          :transition="{ delay: 0.08 * index }"
          class="rounded-full px-4 py-2 text-sm font-medium transition-all duration-200"
          :class="
            activeSection === item.href.slice(1)
              ? 'bg-white/90 text-orange-600 shadow-sm'
              : 'text-gray-700 hover:bg-white/65 hover:text-orange-500'
          "
        >
          {{ item.label }}
        </motion.a>
      </nav>

      <div class="hidden md:block">
        <motion.a
          initial="{ opacity: 0, scale: 0.92 }"
          animate="{ opacity: 1, scale: 1 }"
          transition="{ delay: 0.35 }"
          href="mailto:samsonkebede4@gmail.com"
          class="inline-flex items-center rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_25px_rgba(249,115,22,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-600"
        >
          Contact Me
        </motion.a>
      </div>

      <button
        class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/60 bg-white/55 text-gray-700 backdrop-blur md:hidden"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        :aria-expanded="isMobileMenuOpen"
        aria-label="Toggle navigation menu"
      >
        <X v-if="isMobileMenuOpen" size="20" />
        <Menu v-else size="20" />
      </button>
    </div>

    <motion.nav
      v-if="isMobileMenuOpen"
      initial="{ opacity: 0, y: -10 }"
      animate="{ opacity: 1, y: 0 }"
      exit="{ opacity: 0, y: -10 }"
      class="mx-auto mt-3 max-w-7xl rounded-[1.75rem] border border-white/70 bg-white/80 p-4 shadow-[0_24px_60px_rgba(15,23,42,0.14)] backdrop-blur-xl md:hidden"
    >
      <div class="space-y-2">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="block rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-200"
          :class="
            activeSection === item.href.slice(1)
              ? 'bg-orange-500 text-white'
              : 'text-gray-700 hover:bg-white/75 hover:text-orange-500'
          "
          @click="isMobileMenuOpen = false"
        >
          {{ item.label }}
        </a>
      </div>

      <a
        href="mailto:samsonkebede4@gmail.com"
        class="mt-4 inline-flex w-full items-center justify-center rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_25px_rgba(249,115,22,0.28)] transition-colors duration-200 hover:bg-orange-600"
        @click="isMobileMenuOpen = false"
      >
        Contact Me
      </a>
    </motion.nav>
  </motion.header>
</template>
