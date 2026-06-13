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
          {{ $t('see_website') }}
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

    <section class="nextbar wrap">
      <div class="nextbar__title">
        <span>~$ ./next</span>
        <p v-html="$t('similar_project')"></p>
      </div>
      <div class="nextbar__links">
        <NuxtLink :href="$localePath('/#contact')" class="btn btn--filled">
          {{ $t('contact.contact_me') }}
        </NuxtLink>
        <NuxtLink :href="$localePath('projects')" class="btn btn--outline">
          {{ $t('other_projects') }}
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/abstracts/' as *;

.nextbar {
  padding-block: 50px;
  display: flex;
  justify-content: space-between;

  @include tablet {
    flex-direction: column;
    gap: 20px;
  }

  &__title {
    text-transform: uppercase;
    span {
      color: $color-text-disabled;
    }

    p {
      font-size: clamp(24px, 4vw, 44px);
      font-weight: 800;
      letter-spacing: -0.03em;
      line-height: 1;
    }
  }

  &__links {
    display: flex;
    gap: 11px;
    flex-wrap: wrap;
  }
}
</style>
