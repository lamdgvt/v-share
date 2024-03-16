<script lang="ts" setup>
import dayjs from 'dayjs';

const router = useRouter()

// 二次格式化 schedule
const formatSchedule = computed(() => schedule.value.map(({ date, quarterCode, bgmId }: any) => {
    const record = quarter.value.find((list: any) => list.code === quarterCode);

    return {
        label: `${dayjs(date).format('YYYY-MM')}  ${record?.name || ''}`,
        click: () => switchLink(bgmId)
    }
}))

// 获取动漫季度信息
const getQuarterList = async () => await useRequest(`/api/share/anime/quarterList` || '') || {}
// 获取全部的季度信息
const getSchedule = async () => await useRequest('/api/share/anime/schedule') || {}
// 根据季度获取动漫 page
const getScheduleAnime = async (bgmId: string) => await useRequest('/api/share/anime/animeByBgmId', { method: 'post', body: { bgmId } }) || {};

// 切换 Link 页签事件
const switchLink = (value: string) => bgmId.value = value

// 初始化
const quarterSync: any = await getQuarterList()
const scheduleSync: any = await getSchedule()

// 数据源
const schedule = computed(() => scheduleSync.data.value?.data || [])
const quarter = computed(() => quarterSync.data.value?.data || [])
const bgmId = ref(schedule.value[0]?.bgmId || '');

// const anime = reactive({})
// const anime = computed(() => animeSync.data.value?.data || {})

const anime = reactive<any>({
    Mon: [],
    Tue: [],
    Wed: [],
    Thu: [],
    Fri: [],
    Sat: [],
    Sun: [],
})

// console.log(anime)

// 监听数据源
watch(
    () => bgmId.value,
    async (value: string) => {
        const { data } = await getScheduleAnime(value)

        console.log(data.value.data)

        if (data.value.code === 0)
            Object.assign(anime, data.value.data);
    },
    {
        immediate: true
    },
)

</script>

<template>
    <!--  -->
    <div class="flex">
        <UVerticalNavigation class="h-lvh overflow-y-auto no-scrollbar" :links="formatSchedule"></UVerticalNavigation>

        <div class="flex-1">
            <ClientOnly>
                <common-anime-calendar :record="anime" />
            </ClientOnly>
        </div>
    </div>

</template>
