<script setup></script>

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

  <section id="stack">
    <div class="wrap">
      <div class="sec-label">
        <b>01</b><span data-fr>/ Stack technique</span
        ><span data-en>/ Tech stack</span>
      </div>
      <h2 class="sec-h">
        <span data-fr>Ce que j'utilise</span
        ><span data-en>What I work with</span>
      </h2>
      <div class="stack-block">
        <div class="row">
          <span class="n">01</span><span class="name">Vue.js</span
          ><span class="cat">Frontend / Framework</span
          ><span class="bar"><i data-w="95"></i></span>
        </div>
        <div class="row">
          <span class="n">02</span><span class="name">Nuxt.js</span
          ><span class="cat">Frontend / SSR</span
          ><span class="bar"><i data-w="90"></i></span>
        </div>
        <div class="row">
          <span class="n">03</span><span class="name">Laravel</span
          ><span class="cat">Backend / PHP</span
          ><span class="bar"><i data-w="92"></i></span>
        </div>
        <div class="row">
          <span class="n">04</span><span class="name">PHP</span
          ><span class="cat">Backend / Language</span
          ><span class="bar"><i data-w="88"></i></span>
        </div>
        <div class="row">
          <span class="n">05</span><span class="name">Node.js</span
          ><span class="cat">Backend / Runtime</span
          ><span class="bar"><i data-w="82"></i></span>
        </div>
        <div class="row">
          <span class="n">06</span><span class="name">SCSS</span
          ><span class="cat">Frontend / Styling</span
          ><span class="bar"><i data-w="94"></i></span>
        </div>
        <div class="row">
          <span class="n">07</span><span class="name">HTML / CSS</span
          ><span class="cat">Frontend / Core</span
          ><span class="bar"><i data-w="97"></i></span>
        </div>
      </div>
    </div>
  </section>

  <section id="services">
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
