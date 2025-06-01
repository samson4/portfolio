<template>
  <section id="contact" class="py-20 lg:py-32 bg-gray-50" ref="contactRef">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        :initial="{ opacity: 0, y: 30 }"
        :animate="isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }"
        :transition="{ duration: 0.6 }"
        class="text-center mb-16"
      >
        <span class="text-orange-500 text-lg sm:text-xl font-medium"
          >Get In Touch</span
        >
        <h2
          class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6"
        >
          Let's Work Together
        </h2>
        <p class="text-gray-600 text-lg max-w-3xl mx-auto">
          Ready to start your next project? I'd love to hear from you. Send me a
          message and I'll respond as soon as possible.
        </p>
      </motion.div>

      <motion.div
        :variants="containerVariants"
        :initial="'hidden'"
        :animate="isInView ? 'visible' : 'hidden'"
        class="grid lg:grid-cols-2 gap-12"
      >
        <!-- Contact Information -->
        <motion.div :variants="itemVariants" class="space-y-8">
          <div>
            <h3 class="text-2xl font-bold text-gray-900 mb-6">
              Contact Information
            </h3>
            <div class="space-y-6">
              <motion.a
                v-for="(info, index) in contactInfo"
                :key="index"
                :href="info.href"
                :whileHover="{ x: 10 }"
                class="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 group"
              >
                <div
                  class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-200"
                >
                  <component
                    :is="info.icon"
                    class="w-6 h-6 text-orange-500 group-hover:text-white"
                  />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">{{ info.title }}</h4>
                  <p class="text-gray-600">{{ info.value }}</p>
                </div>
              </motion.a>
            </div>
          </div>

          <motion.div
            :animate="{
              y: [0, -10, 0],
            }"
            :transition="{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }"
            class="relative"
          >
            <div
              class="w-full h-64 bg-gradient-to-br from-orange-400 to-purple-500 rounded-2xl opacity-20"
            />
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="text-center text-gray-700">
                <h4 class="text-xl font-bold mb-2">Available for Projects</h4>
                <p>Let's create something amazing together!</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <!-- Contact Form -->
        <motion.div :variants="itemVariants">
          <div class="bg-white shadow-lg border-0 rounded-2xl">
            <div class="p-8">
              <form
                class="space-y-6"
                action="mailto:samsonkebede4@gmail.com?subject={form.subject}&amp;body={form.message}"
              >
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >First Name</label
                    >
                    <input
                      type="text"
                      v-model="form.firstName"
                      placeholder="John"
                      class="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-orange-500 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >Last Name</label
                    >
                    <input
                      type="text"
                      v-model="form.lastName"
                      placeholder="Doe"
                      class="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-orange-500 focus:ring-orange-500"
                    />
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2"
                    >Email</label
                  >
                  <input
                    type="email"
                    v-model="form.email"
                    placeholder="john@example.com"
                    class="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-orange-500 focus:ring-orange-500"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2"
                    >Subject</label
                  >
                  <input
                    type="text"
                    v-model="form.subject"
                    placeholder="Project Discussion"
                    class="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-orange-500 focus:ring-orange-500"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2"
                    >Message</label
                  >
                  <textarea
                    v-model="form.message"
                    placeholder="Tell me about your project..."
                    rows="5"
                    class="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-orange-500 focus:ring-orange-500 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  class="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-lg py-3 flex items-center justify-center gap-2 text-lg font-medium transition-colors duration-200"
                >
                  <Send :size="20" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
</template>

<script setup>
import { motion, useInView } from "motion-v";
import { ref } from "vue";
import { Mail, Phone, MapPin, Send } from "lucide-vue-next";

const contactRef = ref(null);
const isInView = useInView(contactRef, { once: true, margin: "-100px" });

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "samsonkebede4@gmail.com",
    href: "mailto:samsonkebede4@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+251 924844227",
    href: "tel:+251924844227",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Addis Ababa, Ethiopia",
    href: "#",
  },
];

const form = ref({
  firstName: "",
  lastName: "",
  email: "",
  subject: "",
  message: "",
});

const handleSubmit = () => {
  // Handle form submission logic here
  console.log("Form submitted:", form.value);
  // You can add your form submission logic (e.g., API call) here
};

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
