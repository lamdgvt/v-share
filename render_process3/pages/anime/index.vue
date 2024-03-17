<script lang="ts" setup>

const route = useRoute()

// 获取动漫季度信息
// const getQuarterList = async () => await useRequest(`/api/share/anime/quarterList` || '') || {}
// 获取全部的季度信息
// const getSchedule = async () => await useRequest('/api/share/anime/schedule') || {}

// 获取当前季度动漫
const getScheduleAnime = async () => await useRequest('/api/share/anime/animeByBgmId', { method: 'post', body: { bgmId: 'nowaday' } }) || {};

// 初始化
// const quarterSync: any = await getQuarterList()
// const scheduleSync: any = await getSchedule()
const scheduleAnimeSync: any = await getScheduleAnime()

// 数据源
// const schedule = computed(() => scheduleSync.data.value?.data || [])
// const quarter = computed(() => quarterSync.data.value?.data || [])
const anime = computed<any>(() => scheduleAnimeSync.data.value?.data || {})


</script>

<template>
    <common-anime-calendar :record="anime" weekOrder />
</template>
