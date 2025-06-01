<script setup>
import { motion, useInView } from "motion-v";
import { ref } from "vue";
import { Code, Server, Users } from "lucide-vue-next";

const skillsSection = ref(null);
const isInView = useInView(skillsSection, { once: true, margin: "-100px" });

const skills = [
  {
    name: "Web Development",
    percentage: 95,
    color: "bg-orange-500",
    icon: Code,
  },
  {
    name: "Networking and Security",
    percentage: 80,
    color: "bg-green-500",
    icon: Server,
  },
  {
    name: "Mentorship & Education",
    percentage: 75,
    color: "bg-purple-500",
    icon: Users,
  },
];

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
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const progressVariants = {
  hidden: { width: 0 },
  visible: (percentage) => ({
    width: `${percentage}%`,
    transition: { duration: 1.5, ease: "easeOut", delay: 0.5 },
  }),
};

const rotatingBorderStyle1 = ref({
  animation: "rotateBorder 30s linear infinite",
});

const rotatingBorderStyle2 = ref({
  animation: "rotateBorder 20s linear infinite",
});

const pulsingIconStyle = ref({
  animation: "pulseScale 2s ease-in-out infinite",
});
</script>

<template>
  <section id="skills" class="py-20 lg:py-32" ref="skillsSection">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        :variants="containerVariants"
        initial="hidden"
        :animate="isInView ? 'visible' : 'hidden'"
        class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
      >
        <motion.div :variants="itemVariants">
          <span class="text-orange-500 text-lg sm:text-xl font-medium"
            >Building and Transforming</span
          >
          <h2
            class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6 leading-tight"
          >
            I Continually Enhance My Knowledge to Stay at the Forefront of
            Innovation
          </h2>
          <p class="text-gray-600 text-lg mb-8">
            Embracing an ever-evolving landscape, I consistently refine my
            skills to stay abreast of the latest advancements in software
            development, Networking and cloud solutions.
          </p>

          <div class="space-y-8">
            <motion.div
              v-for="skill in skills"
              :key="skill.name"
              :variants="itemVariants"
              class="space-y-3"
            >
              <div class="flex items-center gap-3">
                <component :is="skill.icon" class="w-6 h-6 text-gray-700" />
                <span class="font-semibold text-xl text-gray-900">{{
                  skill.name
                }}</span>
                <span class="ml-auto text-gray-600 font-medium"
                  >{{ skill.percentage }}%</span
                >
              </div>
              <div class="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  :variants="progressVariants"
                  :custom="skill.percentage"
                  initial="hidden"
                  :animate="isInView ? 'visible' : 'hidden'"
                  :class="`h-full rounded-full ${skill.color}`"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div :variants="itemVariants" class="flex justify-center">
          <div class="relative">
            <motion.div
              :animate="{
                rotate: [0, 360],
              }"
              :transition="{
                duration: 30,
                repeat: Infinity,
                ease: 'linear',
              }"
              class="w-80 h-80 sm:w-96 sm:h-96 rounded-full border-4 border-dashed border-orange-200"
            />
            <motion.div
              :animate="{
                rotate: [360, 0],
              }"
              :transition="{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }"
              class="absolute inset-8 rounded-full border-4 border-dashed border-purple-200"
            />
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="text-center">
                <motion.div
                  :animate="{
                    scale: [1, 1.1, 1],
                  }"
                  :transition="{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }"
                  class="w-32 h-32 bg-gradient-to-r from-orange-400 to-purple-500 rounded-full flex items-center justify-center mb-4"
                >
                  <Code class="w-16 h-16 text-white" />
                </motion.div>
                <h3 class="text-2xl font-bold text-gray-900">3+ Years</h3>
                <p class="text-gray-600">Experience</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
</template>

<style scoped>
@keyframes rotateBorder {
  to {
    transform: rotate(360deg);
  }
}

@keyframes pulseScale {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}
</style>
