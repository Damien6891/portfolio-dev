<script setup lang="ts">
defineProps<{
  label?: String;
  title?: String;
  text?: String;
}>();
</script>

<template>
  <div class="feature-card">
    <span class="feature-card__label">{{ label }}</span>
    <h3 class="feature-card__title">{{ title }}</h3>
    <p>
      {{ text }}
    </p>
  </div>
</template>

<style scoped lang="scss">
@use '../../assets/scss/abstracts/' as *;

.feature-card {
  padding: 28px 26px 32px;
  border-right: 1px solid $color-border;
  border-bottom: 1px solid $color-border;
  transition: 0.16s;

  &:hover {
    background: $color-surface-base;

    .feature-card__title {
      color: $color-accent;
    }
  }

  &__label {
    color: $color-accent;
  }

  &__title {
    margin-block: 13px 10px;
    font-size: 20px;
    text-transform: uppercase;
  }
}
</style>
