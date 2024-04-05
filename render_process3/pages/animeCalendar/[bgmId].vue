<script lang="ts" setup>

const route = useRoute()
const router = useRouter()

// 跳转 Event
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

const cardAttribute = reactive({
    title: 'name',
})

// 根据季度获取动漫
const getScheduleAnime = async () => await useRequest('/api/share/anime/animeByBgmId', { method: 'post', body: { bgmId: route.params.bgmId } }) || {};

const scheduleAnimeSync: any = await getScheduleAnime()

const anime = computed<any>(() => scheduleAnimeSync.data.value?.data || {})

</script>

<template>
    <common-bar v-for="(week, key) in anime" :key="key" :title="String(key)">
        <common-card v-for="(team) in week" :record="team" :key="team.id" :attribute="cardAttribute"
            @click="() => animeEvent(team)" />
    </common-bar>
</template>
