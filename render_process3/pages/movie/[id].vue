<template>
    <!-- 海报 -->
    <common-poster :record="record" />
    <!-- 页签 -->
    <VTabs class="custom-v-tabs" align="center" v-model:active="active">
        <VTabPanel label="概述">
            <!-- 信息 -->
            <Summarize :record="record" />
            <!-- 演员照片墙 -->
            <common-actors :record="creditsList" />
            <!-- 更多类似的 -->

            <common-bar title="更多类似的" v-if="moreSimilarity.results.length">
                <common-card v-for="(item) in moreSimilarity.results" :record="item" :key="item.id" />
            </common-bar>
        </VTabPanel>
        <VTabPanel label="照片">
            <Picture :backdrops="picture.backdrops" :logos="picture.logos" :posters="picture.posters" />
        </VTabPanel>
    </VTabs>
</template>

<script lang="ts" setup>
import type { SimilarityConfigIO } from '~/types/details'
import type { ActorsPictureIO } from '~/types/index'
import Summarize from './components/Summarize.vue'
import Picture from './components/Picture.vue'

const route = useRoute()
const active = ref('概述')
const record = reactive({})
const creditsList = ref<ActorsPictureIO[]>([])
const picture = reactive({
    backdrops: [],
    logos: [],
    posters: [],
})


// 更多类似信息
const moreSimilarity = reactive<SimilarityConfigIO>({
    page: 1,
    totalResults: 0,
    results: []
})

// 获取详情信息
const getDetails = async () => {
    const { id } = route.params
    const { data, status } = await useFetch(`/api/details/movie/${id}`, { query: { language: 'zh-CN', lazy: true } })

    if (status.value === 'success')
        Object.assign(record, data.value)
}

// 获取图片
const getPictures = async () => {
    const { id } = route.params
    const { data, status } = await useFetch(`/api/picture/movie/${id}`, { lazy: true })

    if (status.value === 'success')
        Object.assign(picture, data.value)
}

// 获取演员信息 
const getCredits = async () => {
    const { id } = route.params
    const { data, status } = await useFetch(`/api/credits/movie/${id}`, { lazy: true })

    if (status.value === 'success')
        creditsList.value = data.value?.cast || [];
}

// 获取更多类似的电影 
const getSimilar = async () => {
    const { id } = route.params
    const { data, status } = await useFetch(`/api/similar/movie/${id}`, { query: { language: 'zh-CN' }, lazy: true })

    if (status.value === 'success') {
        const { total_results: totalResults, page, results } = data.value
        Object.assign(moreSimilarity, {
            totalResults, page, results
        })
    }
}

// 初始化
// await Promise.allSettled([getDetails(), getPictures(), getCredits(), getSimilar()])

</script>

<style lang="less" scoped>
.custom-v-tabs {
    :deep(.vxp-tab-nav--top .vxp-tab-nav__add) {
        border-bottom-width: 0;
    }

    :deep(.vxp-tab-nav--top .vxp-tab-nav__content) {
        border-bottom-width: 0;
    }

    :deep(.vxp-tab-nav--top .vxp-tab-nav__extra) {
        border-bottom-width: 0;
    }

    :deep(.vxp-tab-nav--top .vxp-tab-nav__pad) {
        border-bottom-width: 0;
    }

    :deep(.vxp-scroll) {
        margin: 30px 0;
    }

    :deep(.vxp-tab-nav__item) {
        font-size: 25px;
        margin: 0 15px;
    }
}
</style>