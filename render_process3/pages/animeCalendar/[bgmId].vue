<script lang="ts" setup>

const route = useRoute()

// 获取动漫季度信息
// const getQuarterList = async () => await useRequest(`/api/share/anime/quarterList` || '') || {}
// 获取全部的季度信息
// const getSchedule = async () => await useRequest('/api/share/anime/schedule') || {}
// 根据季度获取动漫 page
const getScheduleAnime = async () => await useRequest('/api/share/anime/animeByBgmId', { method: 'post', body: { bgmId: route.params.bgmId } }) || {};

// 初始化
// const quarterSync: any = await getQuarterList()
// const scheduleSync: any = await getSchedule()
const scheduleAnimeSync: any = await getScheduleAnime()

// 数据源
// const schedule = computed(() => scheduleSync.data.value?.data || [])
// const quarter = computed(() => quarterSync.data.value?.data || [])

// const anime = computed(() => animeSync.data.value?.data || {})
const anime = computed(() => scheduleAnimeSync.data.value?.data || {})

</script>

<template>
    <common-anime-calendar :record="anime" />
</template>
