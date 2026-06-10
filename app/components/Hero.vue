<script setup lang="ts">
defineProps({
  description: String,
});
</script>

<template>
  <header id="top" class="hero">
    <div class="wrap">
      <div v-if="$slots.meta" class="hero__meta">
        <slot name="meta" />
      </div>

      <!-- <slot name="meta"></slot> -->

      <div class="hero__main">
        <div v-if="$slots.headline" class="hero__headline">
          <slot name="headline"></slot>
        </div>

        <h1>
          <slot name="title"></slot>
        </h1>

        <div class="hero__foot">
          <p class="hero__description">
            <span class="text-accent">~$</span>

            {{ description }}
          </p>

          <div class="hero__cta">
            <slot name="cta"></slot>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
