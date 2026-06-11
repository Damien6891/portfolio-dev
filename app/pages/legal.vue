<script setup>
const { locale } = useI18n();
const localePath = useLocalePath();

const { data: page } = await useAsyncData(`legal-${locale.value}`, () => {
  const collection = locale.value === 'fr' ? 'pages_fr' : 'pages_en';
  return queryCollection(collection).first();
});
console.log(page, locale.value);

const { data: test } = await useAsyncData(`legal-${locale.value}-789`, () => {
  const collection = locale.value === 'fr' ? 'pages_fr' : 'pages_en';
  return queryCollection('pages_fr').first();
});

console.log(test);

// if (!page.value) {
//   throw createError({ statusCode: 404, statusMessage: 'Page not found' });
// }

// useSeoMeta({
//   title: page.value.title,
//   description: page.value.description,
// });
</script>

<template>
  <div class="prose">
    <ContentRenderer v-if="page" :value="page" />
  </div>
</template>
