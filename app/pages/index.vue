<script setup>
const { tm, rt } = useI18n();

const stacks = computed(() => tm('home.stack.items'));
const services = computed(() => tm('home.services.items'));
</script>

<template>
  <Hero :description="$t('home.description')">
    <template v-slot:meta>
      <span>Full-Stack Web Developer</span>
      <span>Freelance — France</span>
      <span>~$ ./damien --hire</span>
    </template>

    <template #headline>
      <span class="d"></span>{{ $t('available') }}
    </template>

    <template #title>
      {{ $t('home.title_1') }}
      <span class="text-muted">&amp;</span>
      <br />
      <span class="text-accent">{{ $t('home.title_2') }}</span>
      <br />
      {{ $t('home.title_3') }}
    </template>

    <template #cta>
      <a href="#work" class="btn btn--filled">
        {{ $t('see_projects') }}
        →</a
      >
      <a href="#contact" class="btn btn--outline">Contact</a>
    </template>
  </Hero>

  <div class="marquee">
    <div class="marquee__track">
      <span>Vue.js</span>
      <span>Nuxt.js</span>
      <span>Laravel</span>
      <span>PHP</span>
      <span>Node.js</span>
      <span>SCSS</span>
      <span>Vue.js</span>
      <span>Nuxt.js</span>
      <span>Laravel</span>
      <span>PHP</span>
      <span>Node.js</span>
      <span>SCSS</span>
    </div>
  </div>

  <!-- Stacks -->
  <section id="stack" class="section">
    <div class="wrap">
      <div class="section__headline">
        <b>01</b>/
        {{ $t('home.stack.headline') }}
      </div>
      <h2 class="section__title">
        {{ $t('home.stack.title') }}
      </h2>
      <div class="stack">
        <div v-for="(stack, index) in stacks" :key="index" class="stack__row">
          <span class="stack__index">{{ index + 1 }}</span>
          <span class="stack__name">{{ $rt(stack.name) }}</span>
          <span class="stack__category">{{ $rt(stack.category) }}</span>
          <span class="stack__bar">
            <i :data-w="$rt(stack.percentage)"></i>
          </span>
        </div>
      </div>
    </div>
  </section>

  <!-- Services -->
  <section id="services" class="section services">
    <div class="wrap">
      <div class="section__headline">
        <b>02</b>/
        {{ $t('home.services.headline') }}
      </div>
      <h2 class="section__title">
        {{ $t('home.services.title') }}
      </h2>
    </div>

    <div class="services__grid">
      <div v-for="(service, index) in services" :key="index" class="service">
        <span class="service__index">[ 0{{ index + 1 }} ]</span>
        <h3 class="service__title">
          {{ $rt(service.title) }}
        </h3>
        <p class="service__description">
          {{ $rt(service.description) }}
        </p>
        <ul>
          <li v-for="(skill, index) in service.skills" :key="index">
            {{ $rt(skill) }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
