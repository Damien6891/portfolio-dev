<script setup></script>

<template>
  <div class="two-col">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/abstracts/' as *;
.two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  padding: 22px 0 44px;

  &--no-gap {
    gap: 0;
    padding: 0;
  }

  &--bordered {
    border-top: 1px solid $color-border;
  }

  @include tablet {
    grid-template-columns: 1fr;
  }
}
</style>
