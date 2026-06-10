<script setup>
const { setLocale, locales, locale: currentLocal } = useI18n();
</script>

<template>
  <nav>
    <div class="wrap nav-inner">
      <a class="brand" href="#top"><span class="sq"></span>damien_hantzer</a>
      <div class="nav-r">
        <div class="nav-links">
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
        <div class="lang">
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
