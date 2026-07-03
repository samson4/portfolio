<script setup>
import { motion, useInView } from "motion-v";
import { ref } from "vue";

defineProps({
  section: {
    type: Object,
    required: true,
  },
});

const aboutRef = ref(null);
const isInView = useInView(aboutRef, { once: true, margin: "-100px" });

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
</script>

<template>
  <section id="about" class="py-20 lg:py-32 bg-gray-50" ref="aboutRef">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        :variants="containerVariants"
        :initial="'hidden'"
        :animate="isInView ? 'visible' : 'hidden'"
        class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
      >
        <motion.div :variants="itemVariants" class="order-2 lg:order-1">
          <div class="relative">
            <video
              v-if="section.media.type === 'video'"
              :src="section.media.src"
              loop
              autoplay
              muted
              :alt="section.media.alt"
              class="rounded-2xl object-cover w-full h-[400px] sm:h-[500px] lg:h-[600px]"
            >
              <source :src="section.media.src" type="video/mp4" />
            </video>
            <img
              v-else
              :src="section.media.src"
              :alt="section.media.alt"
              class="rounded-2xl object-cover w-full h-[400px] sm:h-[500px] lg:h-[600px]"
            />
            <motion.div
              :animate="{ y: [0, -20, 0] }"
              :transition="{ duration: 3, repeat: Infinity, ease: 'easeInOut' }"
              class="absolute -top-4 -right-4 w-20 h-20 bg-orange-500 rounded-full opacity-20"
            />
            <motion.div
              :animate="{ y: [0, 20, 0] }"
              :transition="{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }"
              class="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500 rounded-full opacity-20"
            />
          </div>
        </motion.div>

        <motion.div :variants="itemVariants" class="order-1 lg:order-2">
          <motion.span
            :variants="itemVariants"
            class="text-orange-500 text-lg sm:text-xl font-medium"
          >
            {{ section.kicker }}
          </motion.span>
          <motion.h2
            :variants="itemVariants"
            class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6 leading-tight"
          >
            {{ section.title }}
          </motion.h2>
          <motion.div
            :variants="itemVariants"
            class="space-y-6 text-gray-600 text-lg"
          >
            <p v-for="(paragraph, index) in section.paragraphs" :key="index">
              {{ paragraph.prefix }}
              <template v-if="paragraph.linkLabel && paragraph.linkHref">
                <strong>
                  <a :href="paragraph.linkHref">{{ paragraph.linkLabel }}</a>
                </strong>
              </template>
              <template v-if="paragraph.suffix">
                {{ ` ${paragraph.suffix}` }}
              </template>
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  </section>
</template>
