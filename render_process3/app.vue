<script setup>
useHead({
  htmlAttrs: {
    lang: 'zh',
  },
  charset: 'utf-8',
  title: 'Nuxt Movies',
  titleTemplate: title => title !== 'Nuxt Movies' ? `${title} · Nuxt Movies` : title,
  meta: [],
  link: [],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.body {
  font-weight: 500;

}
</style>
