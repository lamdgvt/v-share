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
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
.body {
  font-weight: 500;
}

.no-scrollbar::-webkit-scrollbar {
  display: none
}

.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none
}
</style>
