<template>
    <div>
        <swiper :pagination="true" :autoplay="{ delay: 2500, disableOnInteraction: false }" :modules="modules">
            <swiper-slide v-for="(team) in recordList" :key="team.id" @click="posterClickEvent(team)">
                <common-poster :record="team" />
            </swiper-slide>
        </swiper>
    </div>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

const router = useRouter();

const props = defineProps({
    recordList: {
        type: Object,
        default: () => ({})
    },
})

const recordList = computed(() => props.recordList || [])

const modules = computed(() => [Pagination, Autoplay])

const posterClickEvent = (team: any) => {
    router.push(`/movie/${team.id}`)
}
</script>
