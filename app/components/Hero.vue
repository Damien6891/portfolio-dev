<script setup lang="ts">
defineProps({
  description: String,
});
</script>

<template>
  <header id="top">
    <div class="wrap">
      <slot name="meta"></slot>

      <div class="hero-main">
        <slot name="headline"></slot>

        <slot name="title"></slot>

        <div class="hero-foot">
          <p>
            <span class="pr">~$</span>

            {{ description }}
          </p>

          <div class="hero-cta">
            <slot name="cta"></slot>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
