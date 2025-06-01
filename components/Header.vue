<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { motion } from "motion-v";
import { Menu, X } from "lucide-vue-next";
//import button from 'primevue/button'; // Assuming you'll use PrimeVue or a similar Vue UI library

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 50;
  };
  window.addEventListener("scroll", handleScroll);
  onUnmounted(() => window.removeEventListener("scroll", handleScroll));
});

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];
</script>

<template>
  <motion.header
    initial="{ y: -100 }"
    animate="{ y: 0 }"
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="{
      'bg-white/90 backdrop-blur-md shadow-lg': isScrolled,
      'bg-transparent': !isScrolled,
    }"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 lg:h-20">
        <motion.div
          initial="{ opacity: 0 }"
          animate="{ opacity: 1 }"
          transition="{ delay: 0.2 }"
          class="text-2xl font-bold text-orange-500"
        >
          Samson
        </motion.div>

        <nav class="hidden md:flex items-center space-x-8">
          <motion.a
            v-for="(item, index) in navItems"
            :key="item.href"
            :href="item.href"
            initial="{ opacity: 0, y: -20 }"
            animate="{ opacity: 1, y: 0 }"
            :transition="{ delay: 0.1 * index }"
            class="text-gray-700 hover:text-orange-500 transition-colors duration-200 font-medium"
          >
            {{ item.label }}
          </motion.a>
          <motion.div
            initial="{ opacity: 0, scale: 0.8 }"
            animate="{ opacity: 1, scale: 1 }"
            transition="{ delay: 0.6 }"
          >
            <a
              tag="a"
              href="mailto:samsonkebede4@gmail.com?subject=Hello&amp;body=Dear%20friend"
              class="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6"
            >
              Contact Me
            </a>
          </motion.div>
        </nav>

        <button
          class="md:hidden p-2"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
        >
          <X v-if="isMobileMenuOpen" size="24" />
          <Menu v-else size="24" />
        </button>
      </div>

      <motion.nav
        v-if="isMobileMenuOpen"
        initial="{ opacity: 0, height: 0 }"
        animate="{ opacity: 1, height: 'auto' }"
        exit="{ opacity: 0, height: 0 }"
        class="md:hidden bg-white border-t border-gray-200"
      >
        <div class="py-4 space-y-4">
          <a
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            class="block px-4 py-2 text-gray-700 hover:text-orange-500 transition-colors"
            @click="isMobileMenuOpen = false"
          >
            {{ item.label }}
          </a>
          <div class="px-4">
            <button
              tag="a"
              href="mailto:samsonkebede4@gmail.com"
              class="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full"
            >
              Contact Me
            </button>
          </div>
        </div>
      </motion.nav>
    </div>
  </motion.header>
</template>

<style scoped>
/* You might need to import or define Tailwind CSS classes here */
.container {
  max-width: 1280px; /* Example container width */
  margin-left: auto;
  margin-right: auto;
}
</style>
