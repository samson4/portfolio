<script setup>
import { ref } from "vue";
import { motion, useInView } from "motion-v";
import { Code, Server, Users } from "lucide-vue-next";

const technicalSkillsSection = ref(null);
const isInView = useInView(technicalSkillsSection, {
  once: true,
  margin: "-100px",
});
const hoveredCard = ref(null);

const skillCategories = ref([
  {
    id: 1,
    title: "Python",
    icon: "devicon:python",
    description: "Backend development with modern Python frameworks",
    color: "from-blue-500 to-blue-700",
    bgGradient: "from-blue-50 to-blue-100",
    technologies: [
      {
        name: "Django",
        icon: "devicon:djangorest-wordmark",
        level: 95,
        color: "bg-green-500",
      },
      {
        name: "Django REST Framework",
        icon: "devicon:djangorest-wordmark",
        level: 95,
        color: "bg-green-600",
      },
      {
        name: "FastAPI",
        level: 90,
        icon: "devicon:fastapi-wordmark",
        color: "bg-teal-500",
      },
      {
        name: "Flask",
        level: 80,
        icon: "devicon:flask-wordmark",
        color: "bg-blue-500",
      },
    ],
  },
  {
    id: 2,
    title: "JavaScript/TypeScript",
    icon: "devicon:javascript",
    description: "Full-stack JavaScript development",
    color: "from-yellow-500 to-orange-600",
    bgGradient: "from-yellow-50 to-orange-100",
    technologies: [
      {
        name: "Node.js",
        icon: "devicon:nodejs-wordmark",
        level: 85,
        color: "bg-green-500",
      },
      {
        name: "Express",
        icon: "devicon:express",
        level: 80,
        color: "bg-gray-700",
      },
      {
        name: "Vue.js",
        level: 90,
        icon: "devicon:vuejs-wordmark",
        color: "bg-green-400",
      },
      {
        name: "Nuxt.js",
        level: 85,
        icon: "devicon:nuxtjs",
        color: "bg-green-500",
      },
      {
        name: "React",
        level: 70,
        icon: "devicon:react-wordmark",
        color: "bg-blue-500",
      },
    ],
  },
  {
    id: 3,
    title: "Go",
    icon: "devicon:go-wordmark",
    description: "High-performance backend services",
    color: "from-cyan-500 to-blue-600",
    bgGradient: "from-cyan-50 to-blue-100",
    technologies: [{ name: "Gin Framework", level: 70, color: "bg-cyan-500" }],
  },
  {
    id: 4,
    title: "Databases",
    icon: "devicon:azuresqldatabase",
    description: "Database design and management",
    color: "from-purple-500 to-pink-600",
    bgGradient: "from-purple-50 to-pink-100",
    technologies: [
      {
        name: "PostgreSQL",
        icon: "devicon:postgresql-wordmark",
        level: 85,
        color: "bg-blue-600",
      },
      {
        name: "MySQL",
        level: 80,
        icon: "devicon:mysql-wordmark",
        color: "bg-orange-500",
      },

      {
        name: "SQLite",
        level: 85,
        icon: "devicon:sqlite-wordmark",
        color: "bg-gray-600",
      },
      {
        name: "MongoDB",
        level: 75,
        icon: "devicon:mongodb-wordmark",
        color: "bg-green-500",
      },
      {
        name: "MariaDB",
        level: 75,
        icon: "devicon:mariadb-wordmark",
        color: "bg-blue-500",
      },
    ],
  },
]);

const devOpsTools = ref([
  {
    name: "AWS",
    icon: "devicon:amazonwebservices-wordmark",
    color: "from-orange-400 to-orange-600",
    description: "Cloud Infrastructure",
  },
  {
    name: "Docker",
    icon: "devicon:docker-wordmark",
    color: "from-blue-400 to-blue-600",
    description: "Containerization",
  },
  {
    name: "Nginx",
    icon: "devicon:nginx",
    color: "from-green-400 to-green-600",
    description: "Web Server",
  },
  {
    name: "Git",
    icon: "devicon:git",
    color: "from-red-400 to-red-600",
    description: "Version Control",
  },
]);

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

// Basic Card component (replace with your actual Card component)
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

// Basic Badge component (replace with your actual Badge component)
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
    let classes = `inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus-visible:ring-ring`;
    if (props.variant === "secondary") {
      classes +=
        " border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80";
    } else {
      classes +=
        " border-input bg-background text-foreground ring-offset-background focus-visible:ring-ring";
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
          :animate="
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
          "
          transition="{ duration: 0.5, delay: 0.2 }"
          class="inline-block text-orange-500 text-lg sm:text-xl font-medium bg-orange-100 px-4 py-2 rounded-full"
        >
          Technical Expertise
        </motion.span>
        <motion.h2
          initial="{ opacity: 0, y: 20 }"
          :animate="isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }"
          transition="{ duration: 0.6, delay: 0.3 }"
          class="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mt-6 mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent"
        >
          Skills & Technologies
        </motion.h2>
        <motion.p
          initial="{ opacity: 0, y: 20 }"
          :animate="isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }"
          transition="{ duration: 0.6, delay: 0.4 }"
          class="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed"
        >
          A comprehensive overview of my technical skills and the modern
          technologies I use to build scalable, efficient, and robust
          applications.
        </motion.p>
      </motion.div>

      <motion.div
        :variants="containerVariants"
        initial="hidden"
        :animate="isInView ? 'visible' : 'hidden'"
        class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
      >
        <motion.div
          v-for="(category, categoryIndex) in skillCategories"
          :key="category.id"
          :variants="cardVariants"
          while-hover="{ y: -8, scale: 1.02, transition: { duration: 0.3 } }"
          @mouseenter="hoveredCard = category.id"
          @mouseleave="hoveredCard = null"
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
                  <p class="text-gray-600 text-sm">
                    {{ category.description }}
                  </p>
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
                    <span class="font-medium text-gray-800">{{
                      tech.name
                    }}</span>
                    <Badge variant="secondary" class="text-xs">
                      {{ tech.level }}%
                    </Badge>
                  </div>
                  <div
                    class="w-full h-2 bg-gray-200 rounded-full overflow-hidden"
                  >
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
        <h3 class="text-3xl font-bold text-gray-900 mb-4">DevOps & Tools</h3>
        <p class="text-gray-600 text-lg">
          Essential tools for deployment, scaling, and maintaining applications
        </p>
      </motion.div>

      <motion.div
        :variants="containerVariants"
        initial="hidden"
        :animate="isInView ? 'visible' : 'hidden'"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <motion.div
          v-for="(tool, index) in devOpsTools"
          :key="tool.name"
          :variants="cardVariants"
          while-hover="{ y: -10, scale: 1.05, rotateY: 10, transition: { duration: 0.3 } }"
          class="group perspective-1000"
        >
          <Card
            class="h-full bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden"
          >
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

      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate="{ x: [0, 100, 0], y: [0, -50, 0], rotate: [0, 180, 360] }"
          transition="{ duration: 20, repeat: Infinity, ease: 'linear' }"
          class="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-orange-400 to-purple-500 rounded-full shadow-lg"
        >
          <Code class="w-16 h-16 text-white mx-auto mt-8" />
        </motion.div>

        <motion.div
          animate="{ x: [50, 0], y: [-50, 0], rotate: [180, 0] }"
          transition="{ duration: 30, repeat: Infinity, ease: 'linear' }"
          class="absolute top-10 right-20 w-32 h-32 bg-gradient-to-r from-blue-400 to-green-500 rounded-full shadow-lg"
        >
          <Users class="w-16 h-16 text-white mx-auto mt-8" />
        </motion.div>
      </div>
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
