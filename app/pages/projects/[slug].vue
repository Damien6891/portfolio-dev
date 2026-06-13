<script setup>
const route = useRoute();
const { locale } = useI18n();
const { data: project } = await useAsyncData(
  `project-${locale.value}-${route.params.slug}`,
  () => {
    return queryCollection(`projects_${locale.value}`)
      .path(`/projects/${route.params.slug}`)
      .first();
  },
);
</script>

<template>
  <div>
    <Hero :description="project.projectDescription">
      <template v-slot:meta>
        <span>
          ~$ ./ projects /
          <span class="text-accent">{{ project.type }}</span>
        </span>
        <NuxtLink class="text-accent">Voir le site</NuxtLink>
      </template>

      <template #headline>
        <span class="square"></span>{{ $t('projects.study_case') }} -
        {{ project.type }}
      </template>

      <template #title>
        <span v-html="project.projectTitle"></span>
      </template>

      <template #links>
        <NuxtLink :href="project.url" class="btn btn--filled" target="_blank">
          Voir le site
        </NuxtLink>
      </template>

      <template #cta>
        <div class="table">
          <div class="table__row">
            <span class="label">{{ $t('role') }}</span>
            <span class="value">{{ project.role }}</span>
          </div>
          <div class="table__row">
            <span class="label">{{ $t('year') }}</span>
            <span class="value">{{ project.year }}</span>
          </div>
          <div class="table__row">
            <span class="label">{{ $t('duration') }}</span>
            <span class="value">{{ project.duration }}</span>
          </div>
          <div class="table__row">
            <span class="label">{{ $t('status') }}</span>
            <span class="value status">{{ project.status }}</span>
          </div>
        </div>
      </template>
    </Hero>

    <ContentRenderer :value="project" class="prose" />
  </div>
</template>
