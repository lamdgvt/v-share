<template>
    <!-- Banner 轮播图 -->
    <common-banner :record="selectedData" :recordList="movieConfig.results" />

    <!-- 热门电影 -->
    <common-bar title="热门电影">
        <common-card v-for="(item) in movieConfig.results" :record="item" :key="item.id" />
    </common-bar>

    <!-- 热门电视剧 -->
    <common-bar title="热门电视剧">
        <common-card v-for="(item) in tvConfig.results" :record="item" :key="item.id" :props="{ title: 'name' }" />
    </common-bar>
</template>

<script lang="ts" setup>
import type { MovieIO, TvIO, MovieConfigIO, TvConfigIO } from '~/types/discover'

const selected = ref(2);

const selectedData = computed(() => movieConfig.results[selected.value])

// 请求参数
const movieQuery = reactive<MovieIO>({
    page: 1,
    language: 'zh-CN'
})

const tvQuery = reactive<TvIO>({
    page: 1,
    language: 'zh-CN'
})


// 数据
const movieConfig = reactive<MovieConfigIO>({
    page: 1,
    results: [],
    totalResults: 0
})

const tvConfig = reactive<TvConfigIO>({
    page: 1,
    results: [],
    totalResults: 0
})

// 获取电影数据
const getMovieData = async () => {
    const { data, status } = await useFetch('/api/discover/movie', { query: { ...movieQuery } })

    if (status.value === 'success') {
        const { total_results: totalResults, results, page } = data.value

        Object.assign(movieConfig, { totalResults, results, page })
    }
}

// 获取电视剧数据
const getTeleplayData = async () => {
    const { data, status } = await useFetch('/api/discover/tv', { query: { ...tvQuery } })

    if (status.value === 'success') {
        const { total_results: totalResults, results, page } = data.value

        Object.assign(tvConfig, { totalResults, results, page })
    }
}

// created 执行
await Promise.allSettled([getMovieData(), getTeleplayData()])

</script>

<style lang="less" scoped></style>
