<script lang="ts" setup>
import type { MovieResultIO } from '~/types/discover'

const router = useRouter();
const bannerAttribute = reactive({
    backdropPath: 'backdrop_path',
    voteAverage: 'vote_average',
    voteCount: 'vote_count'
})

const cardAttribute = reactive({
    voteCount: 'vote_count',
    voteAverage: 'vote_average',
    posterPath: 'poster_path',
})

// 获取热门电影数据
const getMovieData = async () => await useRequest('/api/tmdb/discover/movie', { query: { page: 1, language: 'zh-CN' } })

// 获取高分电影数据
const getHighMark = async () => await useRequest('/api/tmdb/topRated/movie', { query: { page: 1, language: 'zh-CN' } })

// 获取正在上映的电影
const getNowPlayData = async () => await useRequest('/api/tmdb/nowPlay/movie', { query: { page: 1, language: 'zh-CN' } })

// 获取即将上映的电影数据
const getUpcomingMovieData = async () => await useRequest('/api/tmdb/upcoming/movie', { query: { page: 1, language: 'zh-CN' } })

// 跳转详情
const skipDetail = (record: MovieResultIO) =>
    router.push({ path: `/movie/${record.id}` })

// 初始化
const movieResult: any = await getMovieData()
const highMarkResult: any = await getHighMark()
const nowPlayResult: any = await getNowPlayData()
const upcomingMovieResult: any = await getUpcomingMovieData()

// 数据源
const movieList = computed(() => movieResult.data.value?.results || [])
const highMarkList = computed(() => highMarkResult.data.value?.results || [])
const nowPlayList = computed(() => nowPlayResult.data.value?.results || [])
const upcomingMovieList = computed(() => upcomingMovieResult.data.value?.results || [])

</script>

<template>
    <!-- Banner 轮播图 -->
    <common-banner :recordList="movieList" :attribute="bannerAttribute" />

    <!-- 热门电影 -->
    <common-bar title="热门电影">
        <common-card v-for="(item) in movieList" :record="item" :key="item.id" @click="() => skipDetail(item)"
            :attribute="cardAttribute" />
    </common-bar>

    <!-- 高分电影 -->
    <common-bar title="高分电影">
        <common-card v-for="(item) in highMarkList" :record="item" :key="item.id" @click="() => skipDetail(item)"
            :attribute="cardAttribute" />
    </common-bar>

    <!-- 正在上映的电影 -->
    <common-bar title="正在上映">
        <common-card v-for="(item) in nowPlayList" :record="item" :key="item.id" @click="() => skipDetail(item)"
            :attribute="cardAttribute" />
    </common-bar>

    <!-- 即将上映的电影 -->
    <common-bar title="即将上映的电影">
        <common-card v-for="(item) in upcomingMovieList" :record="item" :key="item.id" @click="() => skipDetail(item)"
            :attribute="cardAttribute" />
    </common-bar>
</template>

<style lang="less" scoped></style>
