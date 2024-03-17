<script lang="ts" setup>
const route = useRoute()
const router = useRouter()

// 获取详情信息
const getDetails = async () => await useRequest(`/api/tmdb/details/movie/${route.params?.id || ''}`, { query: { language: 'zh-CN' } }) || {}

// 获取图片
const getPictures = async () => await useRequest(`/api/tmdb/picture/movie/${route.params?.id || ''}`) || {}

// 获取演员信息
const getCredits = async () => await useRequest(`/api/tmdb/credits/movie/${route.params?.id || ''}`) || {}

// 获取更多类似的电影
const getSimilar = async () => await useRequest(`/api/tmdb/similar/movie/${route.params?.id || ''}`, { query: { language: 'zh-CN' } }) || {}

// 跳转 Event
const skipEvent = ({ id }: any) => router.push({
    path: `/movie/${id}`,
})

// 初始化数据
const details = await getDetails()
const picture = await getPictures()
const credits: any = await getCredits()
const moreSimilarity: any = await getSimilar()

// 数据源
const record = computed<any>(() => details.data.value || {})
const pictureConfig = computed<any>(() => picture.data.value || {})
const backdrops = computed<any[]>(() => pictureConfig.value.backdrops || [])
const logos = computed<any[]>(() => pictureConfig.value.logos || [])
const posters = computed<any[]>(() => pictureConfig.value.posters || [])
const cast = computed<any>(() => credits.data.value?.cast || [])
const moreResult = computed<any>(() => moreSimilarity.data.value?.results || [])

</script>

<template>
    <!-- 海报 -->
    <common-tmdb-poster :record="record" />
    <!-- 页签 -->
    <VTabs class="custom-v-tabs" align="center" active="概述">
        <VTabPanel label="概述">
            <!-- 信息 -->
            <common-summarize :record="record" />
            <!-- 演员照片墙 -->
            <common-tmdb-actors :record="cast" />
            <!-- 更多类似的 -->
            <common-tmdb-bar title="更多类似的">
                <common-tmdb-card v-for="(item) in moreResult" :record="item" :key="item.id"
                    @click="() => skipEvent(item)" />
            </common-tmdb-bar>
        </VTabPanel>
        <VTabPanel label="照片">
            <common-picture :backdrops="backdrops" :logos="logos" :posters="posters" />
        </VTabPanel>
    </VTabs>
</template>

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