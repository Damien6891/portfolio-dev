<script setup></script>

<template>
  <Hero :description="$t('home.description')">
    <template v-slot:meta>
      <div class="hero-meta">
        <span>Full-Stack Web Developer</span>
        <span>Freelance — France</span>
        <span>~$ ./damien --hire</span>
      </div>
    </template>

    <template v-slot:headline>
      <span class="avail"> <span class="d"></span>{{ $t('available') }} </span>
    </template>

    <template #title>
      <h1>
        {{ $t('home.title_1') }}
        <span class="amp">&amp;</span>
        <br />
        <span class="g">{{ $t('home.title_2') }}</span>
        <br />
        {{ $t('home.title_3') }}
      </h1>
    </template>

    <template #cta>
      <a href="#work" class="btn btn-fill">
        {{ $t('see_projects') }}
        →</a
      >
      <a href="#contact" class="btn btn-out">Contact</a>
    </template>
  </Hero>
</template>
