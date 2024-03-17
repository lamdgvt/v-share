<template>
    <!-- 星期一 -->
    <common-anime-bar v-for="(week, key) in record" :key="key" :title="key">
        <common-anime-card v-for="(team) in week" :record="team" :key="team.id" @click="() => animeEvent(team)" />
    </common-anime-bar>

    <!-- 星期二 -->
</template>

<script lang="ts" setup>
const router = useRouter()

const props = defineProps({
    record: {
        type: Object,
        default: () => ({})
    },
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