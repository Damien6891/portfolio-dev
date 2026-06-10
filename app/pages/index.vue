<script setup></script>

<template>
  <Hero :title="$t('home.title')">
    <template v-slot:meta>
      <div class="hero-meta">
        <span>Full-Stack Web Developer</span>
        <span>Freelance — France</span>
        <span>~$ ./damien --hire</span>
      </div>
    </template>

    <template v-slot:headline>
      <span class="avail"
        ><span class="d"></span><span data-fr>Disponible — Q3 2026</span
        ><span data-en>Available — Q3 2026</span></span
      >
    </template>
  </Hero>
</template>
