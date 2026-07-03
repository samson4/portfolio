<script setup>
import { ref } from "vue";
import { motion, useInView } from "motion-v";

defineProps({
  section: {
    type: Object,
    required: true,
  },
});

const technicalSkillsSection = ref(null);
const isInView = useInView(technicalSkillsSection, {
  once: true,
  margin: "-100px",
});
const hoveredCard = ref(null);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      type: "spring",
      stiffness: 100,
    },
  },
};

const techVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      delay: index * 0.1,
      ease: "easeOut",
    },
  }),
};

const progressVariants = {
  hidden: { width: 0 },
  visible: (level) => ({
    width: `${level}%`,
    transition: {
      duration: 1.5,
      ease: "easeOut",
      delay: 0.5,
    },
  }),
};

const Card = defineComponent({
  props: {
    className: {
      type: String,
      default: "",
    },
  },
  setup(props, { slots }) {
    return () => h("div", { class: `${props.className}` }, slots.default());
  },
});

const CardContent = defineComponent({
  props: {
    className: {
      type: String,
      default: "",
    },
  },
  setup(props, { slots }) {
    return () => h("div", { class: `p-8 ${props.className}` }, slots.default());
  },
});

const Badge = defineComponent({
  props: {
    variant: {
      type: String,
      default: "default",
    },
    className: {
      type: String,
      default: "",
    },
  },
  setup(props, { slots }) {
    let classes = `inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors`;
    if (props.variant === "secondary") {
      classes += " border-transparent bg-secondary text-secondary-foreground";
    } else {
      classes += " border-input bg-background text-foreground";
    }
    return () =>
      h("div", { class: classes + " " + props.className }, slots.default());
  },
});

import { defineComponent, h } from "vue";
</script>

<template>
  <section
    id="technical-skills"
    class="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white"
    ref="technicalSkillsSection"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="{ opacity: 0, y: 30 }"
        :animate="isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }"
        transition="{ duration: 0.6 }"
        class="text-center mb-16"
      >
        <motion.span
          initial="{ opacity: 0, scale: 0.8 }"
          :animate="isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }"
          transition="{ duration: 0.5, delay: 0.2 }"
          class="inline-block text-orange-500 text-lg sm:text-xl font-medium bg-orange-100 px-4 py-2 rounded-full"
        >
          {{ section.kicker }}
        </motion.span>
        <motion.h2
          initial="{ opacity: 0, y: 20 }"
          :animate="isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }"
          transition="{ duration: 0.6, delay: 0.3 }"
          class="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mt-6 mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent"
        >
          {{ section.title }}
        </motion.h2>
        <motion.p
          initial="{ opacity: 0, y: 20 }"
          :animate="isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }"
          transition="{ duration: 0.6, delay: 0.4 }"
          class="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed"
        >
          {{ section.description }}
        </motion.p>
      </motion.div>

      <motion.div
        :variants="containerVariants"
        initial="hidden"
        :animate="isInView ? 'visible' : 'hidden'"
        class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
      >
        <motion.div
          v-for="(category, categoryIndex) in section.categories"
          :key="category.id"
          :variants="cardVariants"
          class="group"
        >
          <Card
            :class="`h-full bg-gradient-to-br ${category.bgGradient} border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden`"
          >
            <CardContent class="p-8">
              <div class="flex items-center gap-4 mb-6">
                <motion.div
                  :animate="
                    hoveredCard === category.id
                      ? { scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }
                      : {}
                  "
                  transition="{ duration: 0.6 }"
                  class="text-5xl"
                >
                  <Icon :name="category.icon" />
                </motion.div>
                <div>
                  <h3
                    class="text-2xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-pink-500 group-hover:bg-clip-text transition-all duration-300"
                  >
                    {{ category.title }}
                  </h3>
                  <p class="text-gray-600 text-sm">{{ category.description }}</p>
                </div>
              </div>

              <motion.div
                :class="`h-1 bg-gradient-to-r ${category.color} rounded-full mb-6`"
                initial="{ width: 0 }"
                :animate="isInView ? { width: '100%' } : { width: 0 }"
                :transition="{ duration: 1, delay: 0.5 + categoryIndex * 0.2 }"
              />

              <div class="space-y-4">
                <motion.div
                  v-for="(tech, techIndex) in category.technologies"
                  :key="tech.name"
                  :variants="techVariants"
                  :custom="techIndex"
                  initial="hidden"
                  :animate="isInView ? 'visible' : 'hidden'"
                  class="space-y-2"
                >
                  <div class="flex justify-center items-center">
                    <Icon :name="tech.icon" class="w-8 h-8 text-gray-700" />
                    <span class="font-medium text-gray-800">{{ tech.name }}</span>
                    <Badge variant="secondary" class="text-xs">
                      {{ tech.level }}%
                    </Badge>
                  </div>
                  <div class="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      :variants="progressVariants"
                      :custom="tech.level"
                      initial="hidden"
                      :animate="isInView ? 'visible' : 'hidden'"
                      :class="`h-full rounded-full ${tech.color} shadow-sm`"
                    />
                  </div>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      <motion.div
        initial="{ opacity: 0, y: 50 }"
        :animate="isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }"
        transition="{ duration: 0.6, delay: 0.8 }"
        class="text-center mb-12"
      >
        <h3 class="text-3xl font-bold text-gray-900 mb-4">{{ section.toolsHeading }}</h3>
        <p class="text-gray-600 text-lg">{{ section.toolsDescription }}</p>
      </motion.div>

      <motion.div
        :variants="containerVariants"
        initial="hidden"
        :animate="isInView ? 'visible' : 'hidden'"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
      >
        <motion.div
          v-for="(tool, index) in section.tools"
          :key="tool.name"
          :variants="cardVariants"
          class="group perspective-1000"
        >
          <Card class="h-full bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden">
            <CardContent class="p-6 text-center">
              <motion.div
                animate="{ y: [0, -5, 0] }"
                transition="{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: index * 0.2 }"
                class="text-6xl mb-4"
              >
                <Icon :name="tool.icon" />
              </motion.div>

              <motion.div
                :class="`w-16 h-1 bg-gradient-to-r ${tool.color} mx-auto mb-4 rounded-full`"
                initial="{ width: 0 }"
                :animate="isInView ? { width: 64 } : { width: 0 }"
                :transition="{ duration: 1, delay: 1 + index * 0.1 }"
              />

              <h4
                class="text-xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-pink-500 group-hover:bg-clip-text transition-all duration-300"
              >
                {{ tool.name }}
              </h4>
              <p class="text-gray-600 text-sm">{{ tool.description }}</p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  </section>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");
body {
  font-family: "Inter", sans-serif;
}
.container {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
.card {
  background: white;
  border-radius: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
.card-content {
  padding: 1.5rem;
}
.badge {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
}
.badge-secondary {
  background-color: #f3f4f6;
  color: #4b5563;
}
.badge-default {
  background-color: #e5e7eb;
  color: #1f2937;
}
.motion {
  display: inline-block;
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.motion:hover {
  transform: translateY(-8px);
  opacity: 0.9;
}
</style>
