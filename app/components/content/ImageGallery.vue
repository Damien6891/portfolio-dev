<script setup lang="ts">
defineProps<{
  items: Array<{
    title?: String;
    description: String;
    image: string;
    class: String;
  }>;
}>();

const { openPhoto } = useLightboxPhoto();
</script>

<template>
  <div class="image-gallery">
    <div
      v-for="(item, index) in items"
      :key="index"
      :class="['image-gallery__item', item.class]"
      @click="openPhoto(items, index)"
    >
      <NuxtImg :src="`/images/${item.image}`" />
      <p v-if="item.title" class="image-gallery__title">
        <span>[ {{ item.title }} ]</span>
      </p>
      <!-- <p>Lorem, ipsum.</p> -->
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '../../assets/scss/abstracts/' as *;

.image-gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @include tablet {
    grid-template-columns: 1fr;

    .image-gallery__item.wide {
      grid-column: span 1;
    }
  }

  &__item {
    position: relative;
    border: 1.5px solid $color-border;
    transition: 0.16s;
    cursor: pointer;
    height: 350px;
    overflow: hidden;

    &:hover {
      border-color: $color-accent;
      box-shadow: 0px 0px 40px -10px $color-accent;

      .image-gallery__title {
        color: $color-accent;
        border-color: $color-accent;
      }

      img {
        opacity: 1;
        scale: 1.1;
      }
    }

    &.wide {
      grid-column: span 2;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.7;
      transition: 0.15s;
    }
  }

  &__title {
    position: absolute;
    bottom: 14px;
    left: 14px;
    z-index: 1;
    background: $color-surface-deep;
    padding: 5px 11px;
    transition: 0.15s;
    border: 1.5px solid $color-border;
    font-size: 11px;
  }
}
</style>
