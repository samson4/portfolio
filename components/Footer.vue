<template>
  <footer class="bg-gray-900 text-white py-12">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <!-- Brand -->
        <div>
          <h3 class="text-2xl font-bold text-orange-500 mb-4">Samson Kebede</h3>
          <p class="text-gray-400 leading-relaxed">
            Software Developer & System Administrator passionate about creating
            innovative solutions and sharing knowledge with the community.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
          <ul class="space-y-2">
            <li
              v-for="link in [
                'Home',
                'About',
                'Skills',
                'Portfolio',
                'Services',
                'Contact',
              ]"
              :key="link"
            >
              <a
                :href="`#${link.toLowerCase()}`"
                class="text-gray-400 hover:text-orange-500 transition-colors duration-200"
              >
                {{ link }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact & Social -->
        <div>
          <h4 class="text-lg font-semibold mb-4">Connect With Me</h4>
          <p class="text-gray-400 mb-4">samsonkebede4@gmail.com</p>
          <div class="flex gap-4">
            <motion.a
              v-for="social in socialLinks"
              :key="social.label"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              :whileHover="{ scale: 1.1, y: -2 }"
              :whileTap="{ scale: 0.95 }"
              class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-200"
              :aria-label="social.label"
            >
              <component :is="social.icon" :size="18" />
            </motion.a>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-gray-800 pt-8">
        <div
          class="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p class="text-gray-400 text-center md:text-left">
            © {{ new Date().getFullYear() }} Samson Kebede. All rights reserved.
          </p>
          <div class="flex items-center gap-6 text-sm text-gray-400">
            <a href="#" class="hover:text-orange-500 transition-colors">
              Terms & Conditions
            </a>
            <a href="#" class="hover:text-orange-500 transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
        <div class="flex items-center justify-center mt-4 text-gray-400">
          <span>Made with</span>
          <motion.div
            :animate="{
              scale: [1, 1.2, 1],
            }"
            :transition="{
              duration: 1,
              repeat: Infinity,
              ease: 'easeInOut',
            }"
            class="mx-2"
          >
            <Heart :size="16" class="text-red-500 fill-current" />
          </motion.div>
          <span>and lots of coffee</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { motion } from "motion-v";
import { Facebook, Twitter, Linkedin, Github, Heart } from "lucide-vue-next";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com/KebedeSamson", label: "Twitter" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/samson-kebede-123270206/",
    label: "LinkedIn",
  },
  { icon: Github, href: "https://github.com/samson4", label: "GitHub" },
];
</script>
