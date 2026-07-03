<script setup>
import { motion } from "motion-v";

defineProps({
  section: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <section id="experience" class="py-20 lg:py-32 bg-gray-50">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        :initial="{ opacity: 0, y: 30 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.6 }"
        class="text-center mb-16"
      >
        <span class="text-orange-500 text-lg sm:text-xl font-medium">
          {{ section.kicker }}
        </span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
          {{ section.title }}
        </h2>
        <p class="text-gray-600 text-lg max-w-3xl mx-auto">
          {{ section.description }}
        </p>
      </motion.div>

      <div class="relative max-w-6xl mx-auto">
        <div class="absolute left-1/2 w-1 h-full bg-gray-200 transform -translate-x-1/2"></div>

        <div class="space-y-12">
          <motion.div
            v-for="(item, index) in section.items"
            :key="`${item.company}-${index}`"
            :initial="index % 2 === 0 ? { opacity: 0, x: -100 } : { opacity: 0, x: 100 }"
            :whileInView="{ opacity: 1, x: 0 }"
            :viewport="{ once: true }"
            :transition="{ duration: 0.6, delay: index * 0.1 }"
            class="relative"
          >
            <div
              class="absolute top-6 left-1/2 w-6 h-6 bg-orange-500 rounded-full transform -translate-x-1/2 z-10"
            ></div>

            <div
              :class="[
                'relative p-6 rounded-xl shadow-md bg-white',
                index % 2 === 0
                  ? 'ml-0 md:mr-[50%] md:pr-16'
                  : 'ml-0 md:ml-[50%] md:pl-16',
              ]"
            >
              <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <h3 class="text-xl font-bold text-gray-900">{{ item.company }}</h3>
                <span class="text-orange-500 font-medium">{{ item.duration }}</span>
              </div>
              <div class="flex flex-inline items-center mb-2 gap-4">
                <h4 class="text-lg font-semibold text-gray-800 mb-3">{{ item.position }}</h4>
                <div class="text-sm text-gray-500 mb-2">
                  <span class="font-semibold">{{ item.location }}</span>
                </div>
              </div>
              <ul class="space-y-2 text-gray-600">
                <li
                  v-for="(responsibility, responsibilityIndex) in item.responsibilities"
                  :key="responsibilityIndex"
                  class="flex items-start"
                >
                  <span class="text-orange-500 mr-2 mt-1">•</span>
                  <span>{{ responsibility }}</span>
                </li>
              </ul>

              <div v-if="item.contact" class="mt-4 text-sm text-gray-500">
                <p>{{ item.contact }}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media (min-width: 768px) {
  .md\\:mr-\\[50\\%\\] {
    margin-right: 50%;
  }
  .md\\:ml-\\[50\\%\\] {
    margin-left: 50%;
  }
  .md\\:pr-16 {
    padding-right: 4rem;
  }
  .md\\:pl-16 {
    padding-left: 4rem;
  }
}
</style>
