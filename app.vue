<template>
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

  <Portfolio />
  <!-- <div class="my-12">
    <PortfolioFilter />
  </div> -->

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
