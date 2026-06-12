<script setup lang="ts">
defineProps<{
  fullWidth?: boolean;
}>();
</script>

<template>
  <section class="section">
    <div v-if="!fullWidth" class="wrap">
      <slot name="headline" />

      <h2 class="section__title">
        <slot name="title" mdc-unwrap="p" />
      </h2>

      <slot name="default" />
    </div>

    <div v-else>
      <div class="wrap">
        <slot name="headline" />

        <h2 class="section__title">
          <slot name="title" mdc-unwrap="p" />
        </h2>
      </div>

      <slot name="default" />
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '../../assets/scss/abstracts/' as *;

.section {
  border-bottom: 2px solid $color-border;

  &__headline {
    display: flex;
    align-items: center;
    gap: 13px;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--faint);
    padding: 16px 0;
    border-bottom: 1px solid $color-border-subtle;

    b {
      color: $color-accent;
    }
  }

  &__title {
    font-size: clamp(26px, 4.4vw, 50px);
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: -0.03em;
    line-height: 1;
    padding: 32px 0 6px;
    color: $color-text-primary;
  }
}
</style>
