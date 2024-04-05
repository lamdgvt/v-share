<script lang="ts" setup>

const router = useRouter()

// 打开其他番组
const openScheduleEvent = (team: any) =>
    router.push({ path: `/animeCalendar/${team.bgmId}` })

// 格式处理 季度 label
const formatQuarterLabel = ({ date, quarterCode }: any) => {
    const team = quarter.value.find((team: any) => team.code === quarterCode)

    return `${date || ''} ${team?.name || ''}`
}

// 获取动漫季度信息
const getQuarterList = async () => await useRequest(`/api/share/anime/quarterList` || '') || {}
// 获取全部的季度信息
const getSchedule = async () => await useRequest('/api/share/anime/schedule') || {}

// 获取当前季度动漫
const getScheduleAnime = async () => await useRequest('/api/share/anime/animeByBgmId', { method: 'post', body: { bgmId: 'nowaday' } }) || {};

// 初始化
const quarterSync: any = await getQuarterList()
const scheduleSync: any = await getSchedule()
const scheduleAnimeSync: any = await getScheduleAnime()

// 数据源
const schedule = computed(() => scheduleSync.data.value?.data || [])
const quarter = computed(() => quarterSync.data.value?.data || [])
const anime = computed<any>(() => scheduleAnimeSync.data.value?.data || {})

</script>

<template>
    <common-anime-calendar :record="anime" weekOrder />

    <!-- 其他番组信息 -->
    <common-bar title="其他番组信息">
        <div class="grid grid-cols-4 gap-4">
            <UButton v-for="team in schedule" :key="team.id" icon="i-heroicons-inbox" color="gray"
                @click="openScheduleEvent(team)">
                {{ formatQuarterLabel(team) }}
            </UButton>
        </div>
    </common-bar>
</template>

<style lang="less" scoped>
.schedule-layout {
    display: grid;
}
</style>