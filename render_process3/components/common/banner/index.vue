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

const emits = defineEmits(['posterClickEvent'])

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
    emits('posterClickEvent', team)

</script>
