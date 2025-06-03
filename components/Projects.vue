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
              src="https://res.cloudinary.com/dpj8cuqfq/video/upload/v1748821504/kx9ioyyprzxej8vmuphf.mp4"
              loop
              autoplay
              muted
              alt="About Samson"
              class="rounded-2xl object-cover w-full h-[400px] sm:h-[500px] lg:h-[600px]"
            >
              <source
                src="https://res.cloudinary.com/dpj8cuqfq/video/upload/v1748821504/kx9ioyyprzxej8vmuphf.mp4"
                type="video/mp4"
              />
            </video>
            <motion.div
              :animate="{
                y: [0, -20, 0],
              }"
              :transition="{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }"
              class="absolute -top-4 -right-4 w-20 h-20 bg-orange-500 rounded-full opacity-20"
            />
            <motion.div
              :animate="{
                y: [0, 20, 0],
              }"
              :transition="{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              }"
              class="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500 rounded-full opacity-20"
            />
          </div>
        </motion.div>

        <motion.div :variants="itemVariants" class="order-1 lg:order-2">
          <motion.span
            :variants="itemVariants"
            class="text-orange-500 text-lg sm:text-xl font-medium"
          >
            I'm a Builder
          </motion.span>
          <motion.h2
            :variants="itemVariants"
            class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6 leading-tight"
          >
            I Craft Powerful Infrastructure and empower developers
          </motion.h2>
          <motion.div
            :variants="itemVariants"
            class="space-y-6 text-gray-600 text-lg"
          >
            <p>
              With 3+ years of hands-on experience in software development , I
              specialize in crafting robust web applications and cloud
              infrastructure using Python, Django, and AWS. My journey began as
              a teenage coder and evolved into a passion for solving real-world
              problems through technology.
            </p>

            <p>
              I founded and manage
              <strong
                ><a href="https://www.linkedin.com/company/addis-tech-jobs/"
                  >Addis Tech Job</a
                >s</strong
              >, a community initiative that aggregates IT opportunities from
              LinkedIn, Telegram, and other platforms. To date, The page
              attracted
              <strong>2,500+ developers and followers</strong>
              reach a central channel for tech jobs by curating and sharing
              verified job openings—completely free of charge.
            </p>

            <p>
              As a technical writer, I publish
              <strong
                ><a href="https://medium.com/@samsonkebede4"
                  >tutorials and articles</a
                ></strong
              >
              on Medium covering Python, Django, and AWS. My content focuses on
              practical solutions, helping developers overcome challenges in
              backend development and cloud architecture.
            </p>

            <p>
              Beyond code, I mentor aspiring developers through workshops and
              speaking engagements, advocating for equal opportunities in
              Ethiopia's growing tech ecosystem.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  </section>
</template>

<script setup>
import { motion } from "motion-v";
import { useInView } from "motion-v";
import { ref } from "vue";

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
