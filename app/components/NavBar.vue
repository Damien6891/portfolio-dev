<script setup>
const { setLocale, locales, locale: currentLocal } = useI18n();
</script>

<template>
  <nav class="nav">
    <div class="wrap nav-inner">
      <a class="nav__brand" href="#top">
        <span class="sq"></span>damien_hantzer
      </a>
      <div class="nav__right">
        <div class="nav__links">
          <a href="#stack">{{ $t('nav.stack') }}</a>
          <a href="#services">{{ $t('nav.services') }}</a>
          <NuxtLink to="/projects">
            {{ $t('nav.projects') }}
          </NuxtLink>
          <a href="#edu">
            {{ $t('nav.education') }}
          </a>
          <a href="#contact">{{ $t('nav.contact') }}</a>
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
