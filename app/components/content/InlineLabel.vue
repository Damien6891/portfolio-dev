<template>
  <span class="inline-label"
    ><span class="inline-label__prefix">~$</span> <slot
  /></span>
</template>

<style scoped lang="scss">
@use '../../assets/scss/abstracts/' as *;

.inline-label {
  color: $color-text-primary;
  &__prefix {
    color: $color-accent;
  }
}
</style>
