<script setup>
const { setLocale, locales, locale: currentLocal } = useI18n();

const route = useRoute();

const isHome = computed(() => route.path === '/' || route.path === '/en');

const isActive = (hash) => {
  return isHome.value && route.hash === hash;
};
</script>

<template>
  <nav class="nav">
    <div class="wrap nav-inner">
      <a class="nav__brand" href="/#top">
        <span class="square square--glow"></span>damien_hantzer
      </a>
      <div class="nav__right">
        <div class="nav__links">
          <a
            :href="$localePath('/#stack')"
            :class="{ active: isActive('#stack') }"
          >
            {{ $t('nav.stack') }}
          </a>
          <a
            :href="$localePath('/#services')"
            :class="{ active: isActive('#services') }"
          >
            {{ $t('nav.services') }}
          </a>
          <NuxtLink :to="$localePath('/projects')" active-class="active">
            {{ $t('nav.projects') }}
          </NuxtLink>
          <a
            :href="$localePath('/#education')"
            :class="{ active: isActive('#education') }"
          >
            {{ $t('nav.education') }}
          </a>
          <a
            :href="$localePath('/#contact')"
            :class="{ active: isActive('#contact') }"
          >
            {{ $t('nav.contact') }}
          </a>
        </div>
        <div class="nav__lang">
          <button
            v-for="(locale, index) in locales"
            :key="index"
            @click="setLocale(locale.code)"
            :class="{ on: locale.code === currentLocal }"
          >
            {{ locale.code }}
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>
