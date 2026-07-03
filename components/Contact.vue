<script setup>
import { motion, useInView } from "motion-v";
import { computed, ref } from "vue";

defineProps({
  section: {
    type: Object,
    required: true,
  },
});

const contactRef = ref(null);
const isInView = useInView(contactRef, { once: true, margin: "-100px" });

const form = ref({
  firstName: "",
  lastName: "",
  email: "",
  subject: "",
  message: "",
});

const mailtoHref = computed(() => {
  const fullName = [form.value.firstName, form.value.lastName].filter(Boolean).join(" ");
  const subject = encodeURIComponent(form.value.subject || "Project Discussion");
  const body = encodeURIComponent(
    [
      `Name: ${fullName || "Not provided"}`,
      `Email: ${form.value.email || "Not provided"}`,
      "",
      form.value.message || "",
    ].join("\n")
  );

  return `mailto:samsonkebede4@gmail.com?subject=${subject}&body=${body}`;
});

const handleSubmit = () => {
  if (typeof window !== "undefined") {
    window.location.href = mailtoHref.value;
  }
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

<template>
  <section id="contact" class="py-20 lg:py-32 bg-gray-50" ref="contactRef">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        :initial="{ opacity: 0, y: 30 }"
        :animate="isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }"
        :transition="{ duration: 0.6 }"
        class="text-center mb-16"
      >
        <span class="text-orange-500 text-lg sm:text-xl font-medium">
          {{ section.kicker }}
        </span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
          {{ section.title }}
        </h2>
        <p class="text-gray-600 text-lg max-w-3xl mx-auto">
          {{ section.description }}
        </p>
      </motion.div>

      <motion.div
        :variants="containerVariants"
        :initial="'hidden'"
        :animate="isInView ? 'visible' : 'hidden'"
        class="grid lg:grid-cols-2 gap-12"
      >
        <motion.div :variants="itemVariants" class="space-y-8">
          <div>
            <h3 class="text-2xl font-bold text-gray-900 mb-6">{{ section.infoTitle }}</h3>
            <div class="space-y-6">
              <motion.a
                v-for="(info, index) in section.info"
                :key="index"
                :href="info.href"
                target="_blank"
                rel="noopener noreferrer"
                :whileHover="{ x: 10 }"
                class="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 group"
              >
                <div
                  class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-200"
                >
                  <Icon :name="info.icon" class="w-6 h-6 text-orange-500 group-hover:text-white" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">{{ info.title }}</h4>
                  <p class="text-gray-600">{{ info.value }}</p>
                </div>
              </motion.a>
            </div>
          </div>

          <motion.div
            :animate="{ y: [0, -10, 0] }"
            :transition="{ duration: 3, repeat: Infinity, ease: 'easeInOut' }"
            class="relative"
          >
            <div class="w-full h-64 bg-gradient-to-br from-orange-400 to-purple-500 rounded-2xl opacity-20" />
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="text-center text-gray-700">
                <h4 class="text-xl font-bold mb-2">{{ section.availabilityTitle }}</h4>
                <p>{{ section.availabilityDescription }}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div :variants="itemVariants">
          <div class="bg-white shadow-lg border-0 rounded-2xl">
            <div class="p-8">
              <form class="space-y-6" @submit.prevent="handleSubmit">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                      {{ section.form.firstNameLabel }}
                    </label>
                    <input
                      v-model="form.firstName"
                      type="text"
                      :placeholder="section.form.firstNamePlaceholder"
                      class="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-orange-500 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                      {{ section.form.lastNameLabel }}
                    </label>
                    <input
                      v-model="form.lastName"
                      type="text"
                      :placeholder="section.form.lastNamePlaceholder"
                      class="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-orange-500 focus:ring-orange-500"
                    />
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    {{ section.form.emailLabel }}
                  </label>
                  <input
                    v-model="form.email"
                    type="email"
                    :placeholder="section.form.emailPlaceholder"
                    class="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-orange-500 focus:ring-orange-500"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    {{ section.form.subjectLabel }}
                  </label>
                  <input
                    v-model="form.subject"
                    type="text"
                    :placeholder="section.form.subjectPlaceholder"
                    class="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-orange-500 focus:ring-orange-500"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    {{ section.form.messageLabel }}
                  </label>
                  <textarea
                    v-model="form.message"
                    :placeholder="section.form.messagePlaceholder"
                    rows="5"
                    class="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-orange-500 focus:ring-orange-500 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  class="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-lg py-3 flex items-center justify-center gap-2 text-lg font-medium transition-colors duration-200"
                >
                  <Icon name="lucide:send" :size="20" />
                  {{ section.form.submitLabel }}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
</template>
