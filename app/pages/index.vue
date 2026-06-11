<script setup>
const { tm, rt, locale } = useI18n();
const localePath = useLocalePath();

const stacks = computed(() => tm('home.stack.items'));
const services = computed(() => tm('home.services.items'));

const collectionName = computed(() => `projects_${locale.value}`);

const { data: projects } = await useAsyncData(
  `featured-projects-${locale.value}`,
  () =>
    queryCollection(collectionName.value).where('featured', '=', true).all(),
  { watch: locale },
);
</script>

<template>
  <Hero :description="$t('home.description')">
    <template v-slot:meta>
      <span>Full-Stack Web Developer</span>
      <span>Freelance — France</span>
      <span>~$ ./damien --hire</span>
    </template>

    <template #headline>
      <span class="circle circle--anim"></span>{{ $t('available') }}
    </template>

    <template #title>
      <div v-if="locale === 'fr'">
        {{ $t('home.title_1') }}
        <span class="text-muted">&amp;</span>
        <br />
        <span class="text-accent">{{ $t('home.title_2') }}</span>
        <br />
        {{ $t('home.title_3') }}
      </div>
      <div v-else>
        {{ $t('home.title_1') }}
        <br />
        <span class="text-accent">{{ $t('home.title_2') }}</span>
        <br />
        <span class="text-muted">&amp;</span>
        {{ $t('home.title_3') }}
      </div>
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

  <!-- WORK -->
  <section id="work" class="section work">
    <div class="wrap">
      <div class="section__headline">
        <b>03</b>/
        {{ $t('home.projects.headline') }}
      </div>
    </div>

    <div class="grid">
      <NuxtLink
        v-for="(project, index) in projects"
        :key="index"
        :to="localePath(`${project.path}`)"
        class="card"
      >
        <div class="card__image"><span>[ dashboard SaaS ]</span></div>

        <div class="card__head">
          <h3>
            {{ project.title }}
          </h3>
          <!-- <span class="yr">'25</span> -->
        </div>

        <p>
          {{ project.description }}
        </p>

        <div class="card__tags">
          <span v-for="(techno, index) in project.technologies" :key="index">
            {{ techno }}
          </span>
        </div>
      </NuxtLink>
    </div>
  </section>

  <!-- EDUCATION -->
  <section id="education" class="section education">
    <div class="wrap">
      <div class="section__headline">
        <b>04</b>/ {{ $t('home.formation.headline') }}
      </div>
      <h2 class="section__title">
        {{ $t('home.formation.title') }}
      </h2>

      <div class="education__wrapper">
        <div class="education__card">
          <div class="education__date">
            <span class="yr"> {{ $t('home.formation.selfTaught.date') }}</span>
          </div>
          <div>
            <div class="education__school">
              {{ $t('home.formation.selfTaught.title') }}
            </div>

            <p class="education__description">
              {{ $t('home.formation.selfTaught.description') }}
            </p>
            <div class="education__skills">
              <span
                v-for="(skill, index) in tm('home.formation.selfTaught.tags')"
                :key="index"
              >
                {{ rt(skill) }}
              </span>
            </div>
          </div>
        </div>

        <div class="education__card">
          <div class="education__date">
            <span class="yr"> {{ $t('home.formation.epitech.date') }}</span>
            {{ $t('home.formation.epitech.location') }}
          </div>
          <div>
            <div class="education__school">Epitech</div>
            <div class="education__subtitle">
              <span class="tick text-accent">&gt;</span> Coding Academy — Dev
              &amp; Go
              <span class="text-muted">→</span>
              {{ $t('home.formation.epitech.short_description') }}
            </div>
            <p class="education__description">
              {{ $t('home.formation.epitech.description') }}
            </p>
            <div class="education__skills">
              <span
                v-for="(skill, index) in tm('home.formation.epitech.tags')"
                :key="index"
              >
                {{ rt(skill) }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <Contact />
</template>
