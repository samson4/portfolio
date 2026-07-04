<script setup>
import { Twitter, Linkedin, Github } from "lucide-vue-next";

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com/KebedeSamson", label: "Twitter" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/samson-kebede-123270206/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/samson4", label: "GitHub" },
];
</script>

<template>
  <footer class="bg-ink-900 py-8 text-ink-100/60">
    <div class="mx-auto flex max-w-6xl flex-col items-center gap-4 border-t border-white/10 px-6 pt-8 sm:flex-row sm:justify-between">
      <p class="idx">© {{ new Date().getFullYear() }} Samson Kebede — Addis Ababa, Ethiopia</p>

      <div class="flex items-center gap-4">
        <a
          v-for="social in socialLinks"
          :key="social.label"
          :href="social.href"
          target="_blank"
          rel="noopener noreferrer"
          class="transition-colors hover:text-copper-300"
          :aria-label="social.label"
        >
          <component :is="social.icon" :size="16" />
        </a>
      </div>
    </div>
  </footer>
</template>
