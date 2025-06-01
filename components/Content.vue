<script setup>
import { motion } from "motion-v";
import { Facebook, Twitter, Linkedin, Github } from "lucide-vue-next";
import { ref } from "vue";

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

// Assuming you have a local Button component or will use a basic <button> element
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
import { defineComponent, h } from "vue";

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
            <span
              class="text-orange-500 text-xl sm:text-2xl lg:text-3xl font-medium"
              >Hello, I'm</span
            >
          </motion.div>

          <motion.h1
            :variants="itemVariants"
            class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6"
          >
            Samson Kebede
          </motion.h1>

          <motion.p
            :variants="itemVariants"
            class="text-xl sm:text-2xl lg:text-3xl text-gray-700 mb-6"
          >
            Experienced
            <span class="text-orange-500 font-semibold"
              >Software Developer</span
            >
          </motion.p>

          <motion.p
            :variants="itemVariants"
            class="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl"
          >
            As a seasoned web developer and system administrator, I have
            dedicated years mastering my craft in software development and IT
            operations. With a particular passion for building scalable and
            reliable web applications.
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
              <a href="#about">About Me</a>
            </Button>

            <div class="flex items-center gap-4">
              <motion.a
                href="#"
                while-hover="{ scale: 1.1 }"
                while-tap="{ scale: 0.95 }"
                class="p-3 bg-gray-100 hover:bg-orange-500 hover:text-white rounded-full transition-colors duration-200"
              >
                <Facebook size="20" />
              </motion.a>
              <motion.a
                href="https://twitter.com/KebedeSamson"
                target="_blank"
                rel="noopener noreferrer"
                while-hover="{ scale: 1.1 }"
                while-tap="{ scale: 0.95 }"
                class="p-3 bg-gray-100 hover:bg-orange-500 hover:text-white rounded-full transition-colors duration-200"
              >
                <Twitter size="20" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/samson-kebede-123270206/"
                target="_blank"
                rel="noopener noreferrer"
                while-hover="{ scale: 1.1 }"
                while-tap="{ scale: 0.95 }"
                class="p-3 bg-gray-100 hover:bg-orange-500 hover:text-white rounded-full transition-colors duration-200"
              >
                <Linkedin size="20" />
              </motion.a>
              <motion.a
                href="https://github.com/samson4"
                target="_blank"
                rel="noopener noreferrer"
                while-hover="{ scale: 1.1 }"
                while-tap="{ scale: 0.95 }"
                class="p-3 bg-gray-100 hover:bg-orange-500 hover:text-white rounded-full transition-colors duration-200"
              >
                <Github size="20" />
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
              src="https://res.cloudinary.com/dpj8cuqfq/image/upload/v1689081074/mhzcubtmxkq3cjingnpu.jpg"
              alt="Samson Kebede"
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
/* Define the rotation animation */
@keyframes rotateGradient {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
