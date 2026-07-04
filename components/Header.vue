<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { Menu, X } from "lucide-vue-next";

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);
const activeSection = ref("home");

const navItems = [
  { href: "#home", label: "Home", idx: "00" },
  { href: "#about", label: "About", idx: "01" },
  { href: "#experience", label: "Experience", idx: "02" },
  { href: "#technical-skills", label: "Skills", idx: "03" },
  { href: "#work", label: "Work", idx: "04" },
  { href: "#contact", label: "Contact", idx: "05" },
];

onMounted(() => {
  const sections = navItems
    .map((item) => document.querySelector(item.href))
    .filter(Boolean);

  const handleScroll = () => {
    isScrolled.value = window.scrollY > 24;

    let currentSection = "home";
    sections.forEach((section) => {
      if (section.offsetTop - 160 <= window.scrollY) {
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
  <header
    class="fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300"
    :class="isScrolled ? 'border-ink-900/10 bg-paper-50/95 backdrop-blur' : 'border-transparent bg-transparent'"
  >
    <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      <a href="#home" class="idx flex items-baseline gap-2 text-ink-900">
        <span class="font-display text-lg font-semibold normal-case tracking-normal">Samson Kebede</span>
        <span class="hidden text-ink-300 sm:inline">/ dev</span>
      </a>

      <nav class="hidden items-center gap-1 md:flex">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="group flex items-baseline gap-2 px-3 py-2 text-sm font-medium text-ink-700 transition-colors"
          :class="activeSection === item.href.slice(1) ? 'text-copper-600' : 'hover:text-copper-500'"
        >
          <span class="idx text-[10px] text-ink-300 group-hover:text-copper-500">{{ item.idx }}</span>
          {{ item.label }}
        </a>
      </nav>

      <div class="hidden md:block">
        <a
          href="mailto:samsonkebede4@gmail.com"
          class="idx border-b border-copper-500 pb-0.5 text-ink-900 transition-colors hover:text-copper-600"
        >
          Say hello →
        </a>
      </div>

      <button
        class="flex h-10 w-10 items-center justify-center text-ink-900 md:hidden"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        :aria-expanded="isMobileMenuOpen"
        aria-label="Toggle navigation menu"
      >
        <X v-if="isMobileMenuOpen" size="22" />
        <Menu v-else size="22" />
      </button>
    </div>

    <nav
      v-if="isMobileMenuOpen"
      class="border-t border-ink-900/10 bg-paper-50 px-6 py-6 md:hidden"
    >
      <a
        v-for="item in navItems"
        :key="item.href"
        :href="item.href"
        class="flex items-baseline gap-3 border-b border-ink-900/10 py-4 font-display text-2xl text-ink-900"
        @click="isMobileMenuOpen = false"
      >
        <span class="idx text-ink-300">{{ item.idx }}</span>
        {{ item.label }}
      </a>
      <a
        href="mailto:samsonkebede4@gmail.com"
        class="idx mt-6 inline-block text-copper-600"
        @click="isMobileMenuOpen = false"
      >
        Say hello →
      </a>
    </nav>
  </header>
</template>
