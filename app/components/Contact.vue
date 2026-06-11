<script setup></script>

<template>
  <section id="contact" class="contact">
    <div class="wrap">
      <div class="contact__headline">~$ ./contact --start</div>
      <div class="contact__title">
        {{ $t('contact.title_1') }}<br /><span class="text-accent">{{
          $t('contact.title_2')
        }}</span>
        <!-- <span data-fr>Travaillons<br /><span class="g">ensemble</span></span -->
        <!-- ><span data-en>Let's build<br /><span class="g">together</span></span> -->
      </div>
      <p>
        {{ $t('contact.description') }}
      </p>
      <a class="contact__mail" :href="`mailto:contact@creativ-dams.com`">
        contact@creativ-dams.com
      </a>
    </div>
  </section>
</template>
