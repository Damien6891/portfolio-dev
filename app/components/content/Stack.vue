<script setup lang="ts">
defineProps<{
  label: String;
  items: Array<String>;
}>();
</script>

<template>
  <div class="stack-item">
    <div class="stack-item__label"><b>›</b> {{ label }}</div>
    <div class="stack-item__chips">
      <span v-for="(item, index) in items" :key="index">{{ item }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '../../assets/scss/abstracts/' as *;

.stack-item {
  border-top: 1px solid $color-border-subtle;
  padding: 22px 0;
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 24px;

  @include tablet {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  &__label {
    text-transform: uppercase;
    color: $color-text-disabled;
    font-size: 13px;
    letter-spacing: 0.05em;
    display: flex;
    align-items: flex-start;
    gap: 9px;

    b {
      color: $color-accent;
    }
  }

  &__chips {
    display: flex;
    flex-wrap: wrap;
    gap: 9px;

    span {
      font-size: 13px;
      font-weight: 600;
      border: 1.5px solid $color-border;
      padding: 8px 14px;
      transition: 0.15s;
      cursor: default;

      &:hover {
        color: $color-accent;
        border-color: $color-accent;
      }
    }
  }
}
</style>
