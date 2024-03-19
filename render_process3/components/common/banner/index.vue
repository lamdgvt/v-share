<template>
    <Swiper :modules="[Autoplay, Pagination]" :slides-per-view="1" :loop="true" effect="cards" :autoplay="autoplay">
        <SwiperSlide v-for="(team) in recordList" :key="team.id" @click="posterClickEvent(team)">
            <common-poster :record="team" v-bind="attrs" />
        </SwiperSlide>
    </Swiper>
</template>

<script lang="ts" setup>
import { Pagination, Autoplay } from 'swiper/modules';

const attrs = useAttrs()

const router = useRouter();

const props = defineProps({
    recordList: {
        type: Object,
        default: () => []
    },
})

const autoplay = {
    delay: 8000,
    disableOnInteraction: true
}

const recordList = computed(() => props.recordList || [])

const posterClickEvent = (team: any) => {
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
