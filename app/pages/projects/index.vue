<script setup>
const { locale } = useI18n();

const collectionName = computed(() => `projects_${locale.value}`);

const { data: projects } = await useAsyncData(
  `featured-projects-${locale.value}`,
  () => queryCollection(collectionName.value).order('order', 'DESC').all(),
  { watch: locale },
);
</script>

<template>
  <div class="page page--projects">
    <Hero :description="$t('projects.description')">
      <template v-slot:meta>
        <span>~$ ./portfolio /<span class="text-accent"> projects</span></span>
      </template>

      <template #headline>
        <span class="square"></span> {{ $t('projects.headline') }}
      </template>

      <template #title>
        {{ $t('projects.title_1') }}<br />
        <span class="text-accent">{{ $t('projects.title_2') }}</span>
      </template>
    </Hero>

    <div class="filters">
      <div class="wrap">
        <!-- <span class="filters__label">~$ filter</span> -->

        <!-- <button class="btn btn--outline">fds</button> -->

        <div class="filters__count">
          <span class="text-accent">8</span>
          projects
        </div>
      </div>
    </div>

    <div class="wrap">
      <div class="grid">
        <Card
          v-for="(project, index) in projects"
          :key="index"
          :title="project.title"
          :description="project.description"
          :tags="project.technologies"
          :slug="$localePath(project.path)"
          :image-path="project.imageCard"
          full
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/abstracts/' as *;

.wrap {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.filters {
  font-size: 12px;
  border-bottom: 2px solid $color-border;
  padding-block: 14px;

  &__label {
    text-transform: uppercase;
    color: $color-text-secondary;
  }

  &__count {
    font-size: 12px;
    margin-left: auto;
    color: $color-text-secondary;
  }
}
</style>
