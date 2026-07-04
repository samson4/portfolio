<script setup>
const { data: homepage } = await useAsyncData("homepage-content", async () => {
  const [hero, about, technicalSkills, strengths, experience, projects, contact] =
    await Promise.all([
      queryCollection("hero").first(),
      queryCollection("about").first(),
      queryCollection("technicalSkills").first(),
      queryCollection("strengths").first(),
      queryCollection("experience").first(),
      queryCollection("projects").first(),
      queryCollection("contact").first(),
    ]);

  if (!hero || !about || !technicalSkills || !strengths || !experience || !projects || !contact) {
    throw createError({
      statusCode: 500,
      statusMessage: "Homepage content is incomplete.",
    });
  }

  return { hero, about, technicalSkills, strengths, experience, projects, contact };
});
</script>

<template>
  <div class="grain min-h-screen bg-paper-100 font-body text-ink-900">
    <Header />

    <main v-if="homepage">
      <Content :hero="homepage.hero" />
      <Projects :section="homepage.about" />
      <WorkExperienceTimeline :section="homepage.experience" />
      <Process :section="homepage.technicalSkills" />
      <Skills :section="homepage.strengths" />
      <Services :section="homepage.projects" />
      <Contact :section="homepage.contact" />
    </main>

    <Footer />
  </div>
</template>
