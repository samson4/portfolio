<script setup>
import { motion } from "motion-v";
import { defineComponent, h, ref } from "vue";

defineProps({
  hero: {
    type: Object,
    required: true,
  },
});

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Button = defineComponent({
  props: {
    asChild: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "",
    },
    className: {
      type: String,
      default: "",
    },
  },
  setup(props, { slots }) {
    return () => {
      const tag = props.asChild ? "a" : "button";
      const classes = `rounded-full px-8 py-3 text-lg ${props.className}`;
      return h(tag, { class: classes }, slots.default ? slots.default() : null);
    };
  },
});

const rotatingGradientStyle = ref({
  animation: "rotateGradient 20s linear infinite",
});
</script>

<template>
  <section id="home" class="min-h-screen flex items-center pt-16 lg:pt-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <motion.div
          :variants="containerVariants"
          initial="hidden"
          animate="visible"
          class="order-2 lg:order-1"
        >
          <motion.div :variants="itemVariants" class="mb-4">
            <span class="text-orange-500 text-xl sm:text-2xl lg:text-3xl font-medium">
              {{ hero.greeting }}
            </span>
          </motion.div>

          <motion.h1
            :variants="itemVariants"
            class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6"
          >
            {{ hero.name }}
          </motion.h1>

          <motion.p
            :variants="itemVariants"
            class="text-xl sm:text-2xl lg:text-3xl text-gray-700 mb-6"
          >
            {{ hero.rolePrefix }}
            <span class="text-orange-500 font-semibold">{{ hero.roleHighlight }}</span>
          </motion.p>

          <motion.p
            :variants="itemVariants"
            class="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl"
          >
            {{ hero.summary }}
          </motion.p>

          <motion.div
            :variants="itemVariants"
            class="flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            <Button
              asChild
              size="lg"
              class="bg-orange-500 hover:bg-orange-600 text-white"
            >
              <a :href="hero.primaryCta.href">{{ hero.primaryCta.label }}</a>
            </Button>

            <div class="flex items-center gap-4">
              <motion.a
                v-for="social in hero.socials"
                :key="social.label"
                :href="social.href"
                target="_blank"
                rel="noopener noreferrer"
                while-hover="{ scale: 1.1 }"
                while-tap="{ scale: 0.95 }"
                class="p-3 bg-gray-100 hover:bg-orange-500 hover:text-white rounded-full transition-colors duration-200"
                :aria-label="social.label"
              >
                <Icon :name="social.icon" size="20" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          :variants="imageVariants"
          initial="hidden"
          animate="visible"
          class="order-1 lg:order-2 flex justify-center"
        >
          <div class="relative">
            <motion.div
              :style="rotatingGradientStyle"
              class="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 opacity-20 blur-xl"
            />
            <img
              :src="hero.image.src"
              :alt="hero.image.alt"
              width="500"
              height="500"
              class="relative rounded-2xl object-cover w-80 h-80 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px]"
            />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes rotateGradient {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
