<script setup lang="ts">
const props = defineProps<{
  title?: string;
  description?: string;
  tags?: Array<String>;
  slug?: any;
  imagePath?: any;
  gridClasses?: String;
  full?: boolean;
}>();
</script>

<template>
  <NuxtLink :class="[gridClasses, 'card', { 'card--full': full }]" :to="slug">
    <div class="card__image">
      <NuxtImg :src="imagePath" />
    </div>
    <div class="card__body">
      <h3 class="card__title">{{ title }}</h3>
      <p class="card__description">
        {{ description }}
      </p>

      <div class="card__tags">
        <span v-for="(tag, index) in tags" :key="index"> {{ tag }} </span>
      </div>
    </div>
  </NuxtLink>
</template>
