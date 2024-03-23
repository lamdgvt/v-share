<template>
    <!-- Banner 轮播图 -->
    <common-banner :recordList="record[today] || []" :attribute="{ title: 'name' }" @posterClickEvent="animeEvent" />

    <common-bar v-for="key in order" :key="key" :title="key">
        <common-card v-for="(team) in record[key]" :record="team" :key="team.id" @click="() => animeEvent(team)"
            :attribute="{ title: 'alias' }" />
    </common-bar>
</template>

<script lang="ts" setup>
const router = useRouter()

const props = defineProps({
    record: {
        type: Object,
        default: () => ({})
    },
    weekOrder: {
        type: Boolean,
        default: false
    },
})

const today = computed(() => ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][new Date().getDay()])

// 排序
const order = computed(() => {
    let defaultOrder = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    if (props.weekOrder) {
        const index = new Date().getDay()
        const spliceArr = defaultOrder.splice(index, defaultOrder.length)

        defaultOrder = [...spliceArr, ...defaultOrder]
    }

    return defaultOrder
})

const record = computed(() => props.record)

const animeEvent = (team: any) => {
    const { tmdbId, mediaType } = team;

    // 根据两种类型 movie tv 跳转不同的详情
    switch (mediaType) {
        case 'movie': {
            router.push({
                path: `/movie/${tmdbId}`,
            })
            break;
        }
        case 'tv': {
            router.push({
                path: `/tv/${tmdbId}`,
            })
            break;
        }
    }
}

</script>

<style lang="less" scoped></style>