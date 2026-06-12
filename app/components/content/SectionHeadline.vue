<script setup lang="ts">
const props = defineProps<{
  number?: String;
  title?: string;
}>();
</script>

<template>
  <div class="section__headline">
    <b>{{ number }}</b
    >/
    {{ title }}
  </div>
</template>

<style scoped lang="scss">
@use '../../assets/scss/abstracts/' as *;

.section__headline {
  padding: 16px 26px;
  max-width: $wrapper-width;
  margin-inline: auto;
  width: 100%;

  &.border-top {
    border-top: 1px solid $color-border;
  }
}
</style>
