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

const projectUrl = computed(() => project.url);
</script>

<template>
  <div>
    <Hero :description="project.projectDescription">
      <template v-slot:meta>
        <span>
          ~$ ./ projects /
          <span class="text-accent">{{ project.type }}</span>
        </span>
        <NuxtLink :to="project.url" class="text-accent">
          {{ $t('see_website') }}
        </NuxtLink>
      </template>

      <template #headline>
        <span class="square"></span>{{ $t('projects.study_case') }} -
        {{ project.type }}
      </template>

      <template #title>
        <span v-html="project.projectTitle"></span>
      </template>

      <template #links>
        <NuxtLink :to="project.url" class="btn btn--filled" target="_blank">
          {{ $t('see_website') }}
        </NuxtLink>
      </template>

      <template #cta>
        <div class="table">
          <div class="table__row">
            <span class="label">{{ $t('role') }}</span>
            <span class="value">{{ project.role }}</span>
          </div>
          <div v-if="project.year" class="table__row">
            <span class="label">{{ $t('year') }}</span>
            <span class="value">{{ project.year }}</span>
          </div>
          <div v-if="project.duration" class="table__row">
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

    <div v-if="project.collaboration" class="collab wrap">
      {{ $t('partnership') }}
      <NuxtLink :href="project.agencyUrl" target="_blank">
        {{ project.agency }}
      </NuxtLink>
    </div>

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

.collab {
  padding-block: 15px;
  border-bottom: 1px solid $color-border;
  color: $color-text-disabled;
  text-align: right;
  font-size: 12px;

  a {
    color: $color-accent;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 1.5px;
      background: $color-accent;
      bottom: 0;
      left: 0%;
      scale: 0 1;
      transition: 0.2s;
      transform-origin: left;
    }
    &:hover {
      &::after {
        scale: 1;
      }
    }
  }
}

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
