<script lang="ts" setup>
import Summarize from './components/Summarize.vue'

const route = useRoute()

// 获取详情信息
const getDetails = async () => await useRequest(`/api/kitsu/anime/${route.params?.id}` || '') || {}

// 初始化数据
const details: any = await getDetails()

// 数据源
const record = computed<any>(() => details.data.value?.data || {})

</script>

<template>
    <!-- 海报 -->
    <common-kitsu-poster :record="record" />
    <!-- 页签 -->
    <VTabs class="custom-v-tabs" align="center" active="概述">
        <VTabPanel label="概述">
            <!-- 信息 -->
            <Summarize :record="record" />
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