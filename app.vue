<template>
  <!--with download icon-->

  <a
    href="/Samson-kebede-Resume-2025.pdf"
    target="_blank"
    class="fixed bottom-12 right-12 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-colors duration-300 z-50 flex items-center"
    download="Samson-kebede-Resume-2025.pdf"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-5 w-5 mr-2"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M16 10l-4 4m0 0l-4-4m4 4V4"
      />
    </svg>
    Resume
  </a>
  <div class="content">
    <Header />
    <div class="flex mx-[250px]">
      <div>
        <Content />
      </div>
    </div>
  </div>

  <Process />

  <Projects />

  <!-- <Portfolio /> -->
  <!-- <div class="my-12">
    <PortfolioFilter />
  </div> -->
  <WorkExperienceTimeline />
  <Skills />
  <Services />

  <Contact />
  <Footer />
</template>

<script setup>
const mySkills = [
  { name: "JavaScript", icon: "⚛️" },
  // ... your skills
];
</script>

<style scoped>
/* .content {
  background-image: url("/portfolioBackground.jpg");
} */
</style>
