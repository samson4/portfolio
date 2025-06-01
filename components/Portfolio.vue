<script setup>
import { motion, useInView } from "motion-v";
import { ref, computed } from "vue";

const portfolioSection = ref(null);
const isInView = useInView(portfolioSection, { once: true, margin: "-100px" });
const activeFilter = ref("All");
const filters = ["All", "Cisco", "Awards", "Trend Micro", "Certifications"];

const portfolioItems = [
  {
    id: 1,
    title: "Cisco Introduction to Networks",
    category: "Cisco",
    image: "intro.png",
  },
  {
    id: 2,
    title: "CCNA Enterprise Network Security",
    category: "Cisco",
    image: "ENSA.png",
  },
  {
    id: 3,
    title: "CCNA Switching Routing & Wireless",
    category: "Cisco",
    image: "SRWE.png",
  },
  {
    id: 4,
    title: "Trend Micro TrendCampus Foundation",
    category: "Trend Micro",
    image: "TC.png",
  },
  {
    id: 5,
    title: "AWS Udemy Certification",
    category: "Certifications",
    image: "AWSudemy.jpg",
  },
  {
    id: 6,
    title: "Excellence Award",
    category: "Awards",
    image: "/placeholder.svg?height=300&width=400",
  },
];

const filteredItems = computed(() => {
  return activeFilter.value === "All"
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeFilter.value);
});

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

// Basic Button component (replace with your actual Button component if it's more complex)
const Button = defineComponent({
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
    const buttonClasses = computed(() => {
      let classes = `rounded-full px-6 py-2 transition-all duration-200 `;
      if (props.variant === "default") {
        classes += "bg-orange-500 hover:bg-orange-600 text-white";
      } else if (props.variant === "outline") {
        classes +=
          "border-gray-300 hover:border-orange-500 hover:text-orange-500";
      }
      return classes + " " + props.className;
    });

    return () =>
      h(
        "button",
        { class: buttonClasses.value, onClick: slots.onClick },
        slots.default()
      );
  },
});
import { defineComponent, h } from "vue";
</script>

<template>
  <section
    id="portfolio"
    class="py-20 lg:py-32 bg-gray-50"
    ref="portfolioSection"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="{ opacity: 0, y: 30 }"
        :animate="isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }"
        transition="{ duration: 0.6 }"
        class="text-center mb-16"
      >
        <span class="text-orange-500 text-lg sm:text-xl font-medium"
          >Portfolio</span
        >
        <h2
          class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6"
        >
          Impactful Initiatives and Solutions
        </h2>
        <p class="text-gray-600 text-lg max-w-3xl mx-auto">
          Explore a range of my significant contributions in Networking,
          Security, AWS and Web Development, demonstrating a blend of technical
          acumen and commitment to best practices in technology.
        </p>
      </motion.div>

      <motion.div
        initial="{ opacity: 0, y: 20 }"
        :animate="isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }"
        transition="{ duration: 0.6, delay: 0.2 }"
        class="flex flex-wrap justify-center gap-4 mb-12"
      >
        <Button
          v-for="filter in filters"
          :key="filter"
          :variant="activeFilter === filter ? 'default' : 'outline'"
          @click="activeFilter = filter"
          :class="{
            'bg-orange-500 hover:bg-orange-600 text-white':
              activeFilter === filter,
            'border-gray-300 hover:border-orange-500 hover:text-orange-500':
              activeFilter !== filter,
          }"
        >
          {{ filter }}
        </Button>
      </motion.div>

      <motion.div
        :variants="containerVariants"
        initial="hidden"
        :animate="isInView ? 'visible' : 'hidden'"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <motion.div
          v-for="item in filteredItems"
          :key="item.id"
          :variants="itemVariants"
          while-hover="{ y: -10 }"
          class="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
        >
          <div class="relative overflow-hidden">
            <img
              :src="item.image || '/placeholder.svg'"
              :alt="item.title"
              width="400"
              height="300"
              class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <div
              class="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <span class="text-sm bg-orange-500 px-2 py-1 rounded-full">{{
                item.category
              }}</span>
            </div>
          </div>
          <div class="p-6">
            <h3
              class="text-xl font-semibold text-gray-900 group-hover:text-orange-500 transition-colors duration-200"
            >
              {{ item.title }}
            </h3>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
</template>

<style scoped>
/* Your component-specific styles can go here */
</style>
