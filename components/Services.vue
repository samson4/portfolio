<script setup>
import { motion, useInView } from "motion-v";
import { ref } from "vue";
import { Github } from "lucide-vue-next";

const servicesSection = ref(null);
const isInView = useInView(servicesSection, { once: true, margin: "-100px" });

const projects = [
  {
    id: 0,
    title: "Data Platform",
    description: `I built a database explorer platform using FastAPI, SQLAlchemy,SQLite and Nuxt(vue) to simplify SQL and PostgreSQL database management that simplifies database development and administration by providing a unified interface for tasks that were previously fragmented. It provided introspection, visualization, and schema/data alteration tools, which improves developer productivity.
`,
    technologies: [
      { icon: "devicon:nuxtjs", name: "Nuxt.js" },
      { icon: "devicon:vuejs", name: "Vue.js" },
      { icon: "devicon:fastapi", name: "FastAPI" },
      { icon: "devicon:sqlite", name: "SQLite" },
    ],
    githubUrl: "https://github.com/samson4/bus-backend",
    icon: "🌐",
  },
  {
    id: 1,
    title: "Online Food Ordering and Delivery",
    description:
      'A web app that automates the traditional ordering and delivery of food for restaurant customers. The system incorporates third party APIs like "mapbox" for restaurant locations and "Yenepay" for easy payment system.',
    technologies: [
      { icon: "logos:django-icon", name: "Django" },
      { icon: "devicon:html5", name: "HTML5" },
      { icon: "devicon:javascript", name: "JavaScript" },
      { icon: "devicon:bootstrap", name: "Bootstrap" },
    ],
    githubUrl: "https://github.com/samson4/foodapp",
    icon: "🍕",
  },
  {
    id: 2,
    title: "HDToday Clone",
    description:
      "A side project that mimics a movie streaming website called HDToday built with MEVN stack and Vuetify as a UI library. An admin uploads a movie and is displayed for users.",
    technologies: [
      { icon: "devicon:vuejs", name: "Vue.js" },
      { icon: "devicon:express", name: "Express.js" },
      { icon: "devicon:nodejs", name: "Node.js" },
      { icon: "devicon:mongodb", name: "MongoDB" },
    ],
    githubUrl: "https://github.com/samson4/hdtoday",
    icon: "🎬",
  },
  {
    id: 3,
    title: "Django Blog",
    description:
      "A re-implementation for a Django Blog tutorial series by Corey M Schafer. I remade the app with Django Rest framework and Vue.js. Also added more functionalities like search support.",
    technologies: [
      { icon: "logos:django-icon", name: "Django" },
      { icon: "devicon:vuejs", name: "Vue.js" },
      { icon: "devicon:bootstrap", name: "Bootstrap" },
    ],
    githubUrl: "https://github.com/samson4/Blog-backend",
    icon: "📝",
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
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Basic Card component (replace with your actual Card component)
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

// Basic CardContent component (replace with your actual CardContent component)
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

// Basic Button component (replace with your actual Button component)
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
import { defineComponent, h } from "vue";
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
        <span class="text-orange-500 text-lg sm:text-xl font-medium"
          >Projects</span
        >
        <h2
          class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6"
        >
          What I Offer to Clients
        </h2>
        <p class="text-gray-600 text-lg max-w-4xl mx-auto">
          With a focus on software development, AWS solutions, Networking and
          System Administration, I provide a range of services that bring value
          to your organization and foster an innovative culture. Explore my full
          time and various side projects that can provide a general view of what
          I can provide for your company.
        </p>
      </motion.div>

      <motion.div
        :variants="containerVariants"
        initial="hidden"
        :animate="isInView ? 'visible' : 'hidden'"
        class="grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        <motion.div
          v-for="project in projects"
          :key="project.id"
          :variants="itemVariants"
          while-hover="{ y: -10, rotateY: 5 }"
          class="group"
        >
          <Card class="h-full">
            <CardContent class="p-8">
              <div class="flex items-start gap-6">
                <motion.div
                  while-hover="{ scale: 1.1, rotate: 10 }"
                  class="text-6xl flex-shrink-0"
                >
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

                  <div
                    v-for="tech in project.technologies"
                    :key="tech"
                    class="inline-flex flex-wrap gap-3 mb-6"
                  >
                    <span
                      class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      <Icon
                        class="w-[30px] h-[30px]"
                        :name="`${tech.icon}`"
                      ></Icon>
                      {{ tech.name }}
                    </span>
                  </div>

                  <div class="flex gap-4">
                    <Button
                      asChild
                      variant="outline"
                      class="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                    >
                      <a
                        :href="project.githubUrl"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="flex items-center gap-2"
                      >
                        <Github size="16" />
                        Source Code
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
