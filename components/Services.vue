<script setup>
import { motion, useInView } from "motion-v";
import { ref } from "vue";
import { Github } from "lucide-vue-next";
import { defineComponent, h } from "vue";

defineProps({
  section: {
    type: Object,
    required: true,
  },
});

const servicesSection = ref(null);
const isInView = useInView(servicesSection, { once: true, margin: "-100px" });

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

const Card = defineComponent({
  props: {
    className: {
      type: String,
      default: "",
    },
  },
  setup(props, { slots }) {
    return () =>
      h(
        "div",
        {
          class: `bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border-0 rounded-2xl overflow-hidden ${props.className}`,
        },
        slots.default()
      );
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

const Button = defineComponent({
  props: {
    asChild: {
      type: Boolean,
      default: false,
    },
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
    return () => {
      const tag = props.asChild ? "a" : "button";
      let classes = `rounded-full `;
      if (props.variant === "outline") {
        classes +=
          "border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white";
      }
      return h(
        tag,
        { class: classes + " " + props.className },
        slots.default ? slots.default() : null
      );
    };
  },
});
</script>

<template>
  <section id="services" class="py-20 lg:py-32" ref="servicesSection">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="{ opacity: 0, y: 30 }"
        :animate="isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }"
        transition="{ duration: 0.6 }"
        class="text-center mb-16"
      >
        <span class="text-orange-500 text-lg sm:text-xl font-medium">
          {{ section.kicker }}
        </span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
          {{ section.title }}
        </h2>
        <p class="text-gray-600 text-lg max-w-4xl mx-auto">
          {{ section.description }}
        </p>
      </motion.div>

      <motion.div
        :variants="containerVariants"
        initial="hidden"
        :animate="isInView ? 'visible' : 'hidden'"
        class="grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        <motion.div
          v-for="project in section.items"
          :key="project.id"
          :variants="itemVariants"
          class="group"
        >
          <Card class="h-full">
            <CardContent class="p-8">
              <div class="flex items-start gap-6">
                <motion.div while-hover="{ scale: 1.1, rotate: 10 }" class="text-6xl flex-shrink-0">
                  {{ project.icon }}
                </motion.div>
                <div class="flex-1">
                  <h3
                    class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-500 transition-colors duration-200"
                  >
                    {{ project.title }}
                  </h3>
                  <p class="text-gray-600 mb-6 leading-relaxed">
                    {{ project.description }}
                  </p>

                  <div class="inline-flex flex-wrap gap-3 mb-6">
                    <span
                      v-for="tech in project.technologies"
                      :key="`${project.id}-${tech.name}`"
                      class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium inline-flex items-center gap-2"
                    >
                      <Icon class="w-[30px] h-[30px]" :name="tech.icon" />
                      {{ tech.name }}
                    </span>
                  </div>

                  <div class="flex gap-8">
                    <Button
                      asChild
                      variant="outline"
                      class="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                    >
                      <a
                        :href="project.githubUrl"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="flex items-center gap-2 mt-2"
                      >
                        <Github size="16" />
                        Source Code
                      </a>
                    </Button>
                    <Button
                      v-if="project.liveUrl"
                      asChild
                      variant="outline"
                      class="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                    >
                      <a
                        :href="project.liveUrl"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="flex items-center gap-2 mt-1"
                      >
                        <span class="text-lg">🌐</span>
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  </section>
</template>

<style scoped>
/* Your component-specific styles can go here */
</style>
