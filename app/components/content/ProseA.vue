<template>
  <a
    v-bind="$attrs"
    :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'noopener noreferrer' : undefined"
  >
    <slot />
  </a>
</template>

<script setup lang="ts">
const attrs = useAttrs();

const isExternal = computed(
  () => typeof attrs.href === 'string' && attrs.href.startsWith('http'),
);
</script>
