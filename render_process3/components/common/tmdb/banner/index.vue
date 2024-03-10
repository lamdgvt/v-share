<template>
    <Swiper :modules="[Autoplay, Pagination]" :slides-per-view="1" :loop="true" effect="cards" :autoplay="autoplay">
        <SwiperSlide v-for="(team) in recordList" :key="team.id" @click="posterClickEvent(team)">
            <common-tmdb-poster :record="team" />
        </SwiperSlide>
    </Swiper>
</template>

<script lang="ts" setup>
import { Pagination, Autoplay } from 'swiper/modules';

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

const posterClickEvent = (team: any) =>
    router.push(`/movie/${team.id}`)

</script>
