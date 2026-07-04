<script setup>
const { data: homepage } = await useAsyncData("homepage-content", async () => {
  const [
    hero,
    about,
    technicalSkills,
    strengths,
    experience,
    projects,
    contact,
  ] = await Promise.all([
    queryCollection("hero").first(),
    queryCollection("about").first(),
    queryCollection("technicalSkills").first(),
    queryCollection("strengths").first(),
    queryCollection("experience").first(),
    queryCollection("projects").first(),
    queryCollection("contact").first(),
  ]);

  if (
    !hero ||
    !about ||
    !technicalSkills ||
    !strengths ||
    !experience ||
    !projects ||
    !contact
  ) {
    throw createError({
      statusCode: 500,
      statusMessage: "Homepage content is incomplete.",
    });
  }

  return {
    hero,
    about,
    technicalSkills,
    strengths,
    experience,
    projects,
    contact,
  };
});

const resumeLink = computed(() => homepage.value?.hero.resume ?? null);
</script>

<template>
  <a
    v-if="resumeLink"
    :href="resumeLink.href"
    target="_blank"
    class="fixed bottom-12 right-12 z-50 flex items-center rounded-full bg-orange-500 px-6 py-3 font-semibold text-white shadow-lg transition-colors duration-300 hover:bg-orange-600"
    :download="resumeLink.download || true"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="mr-2 h-5 w-5"
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
    {{ resumeLink.label }}
  </a>

  <div class="content">
    <Header />
    <div class="flex mx-[250px]">
      <div>
        <Content v-if="homepage" :hero="homepage.hero" />
      </div>
    </div>
  </div>

  <Process v-if="homepage" :section="homepage.technicalSkills" />
  <Projects v-if="homepage" :section="homepage.about" />
  <WorkExperienceTimeline v-if="homepage" :section="homepage.experience" />
  <Skills v-if="homepage" :section="homepage.strengths" />
  <Services v-if="homepage" :section="homepage.projects" />
  <Contact v-if="homepage" :section="homepage.contact" />
  <Footer />
</template>

<style scoped>
/* .content {
  background-image: url("/portfolioBackground.jpg");
} */
</style>
