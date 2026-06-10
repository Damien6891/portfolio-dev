<script setup>
const { tm, rt } = useI18n();

const stacks = computed(() => tm('home.stack.items'));
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
  <section id="services" class="section">
    <div class="wrap">
      <div class="sec-label"><b>02</b><span>/ Services</span></div>
      <h2 class="sec-h">
        <span data-fr>Comment je travaille</span><span data-en>How I help</span>
      </h2>
    </div>
    <div class="svc-grid">
      <div class="svc">
        <span class="svc-n">[ 01 ]</span>
        <h3>
          <span data-fr>Sites vitrines</span
          ><span data-en>Marketing sites</span>
        </h3>
        <p>
          <span data-fr
            >Rapides, optimisés SEO, pensés pour convertir. Nuxt &amp;
            SSR.</span
          ><span data-en
            >Fast, SEO-ready, built to convert. Nuxt &amp; SSR.</span
          >
        </p>
        <ul>
          <li>Performance</li>
          <li>SEO technique</li>
          <li>Responsive</li>
        </ul>
      </div>
      <div class="svc">
        <span class="svc-n">[ 02 ]</span>
        <h3><span data-fr>SaaS</span><span data-en>SaaS apps</span></h3>
        <p>
          <span data-fr
            >Architecture, auth, dashboards et API évolutives. Laravel &amp;
            Node.</span
          ><span data-en
            >Architecture, auth, dashboards and scalable APIs. Laravel &amp;
            Node.</span
          >
        </p>
        <ul>
          <li>Auth &amp; rôles</li>
          <li>REST API</li>
          <li><span data-fr>Temps réel</span><span data-en>Real-time</span></li>
        </ul>
      </div>
      <div class="svc">
        <span class="svc-n">[ 03 ]</span>
        <h3>
          <span data-fr>Renfort agence</span><span data-en>Agency support</span>
        </h3>
        <p>
          <span data-fr
            >Sous-traitance en marque blanche, intégrée à vos process.</span
          ><span data-en
            >White-label subcontracting, plugged into your process.</span
          >
        </p>
        <ul>
          <li>Git flow</li>
          <li>Code reviews</li>
          <li>
            <span data-fr>Délais tenus</span
            ><span data-en>On-time delivery</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
