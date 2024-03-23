<template>
    <div class="summarize-main p-8 flex my-0 m-auto">
        <div class="summarize-main-image mr-8">
            <NuxtImg :src="`${tmdbImagesPrefix}w500${record.poster_path}`" />
        </div>
        <div class="summarize-main-des flex-1">
            <div class="text-3xl text-white">剧情</div>
            <div class="mt-6 text-white">
                {{ record.overview }}
            </div>

            <VRow class="summarize-detail-des mt-6">
                <VColumn :span="12">
                    <VRow>
                        <VColumn :span="4">上映日期</VColumn>
                        <VColumn :span="20">{{ record.release_date || '-' }}</VColumn>
                    </VRow>
                    <VRow>
                        <VColumn :span="4">状态</VColumn>
                        <VColumn :span="20">{{ record.status || '-' }}</VColumn>
                    </VRow>
                    <VRow>
                        <VColumn :span="4">制片</VColumn>
                        <VColumn :span="20">{{ productionCompanies }}</VColumn>
                    </VRow>
                </VColumn>
                <VColumn :span="12">
                    <VRow>
                        <VColumn :span="4">片长</VColumn>
                        <VColumn :span="20">{{ formatRuntime(record.runtime) }}</VColumn>
                    </VRow>
                    <VRow>
                        <VColumn :span="4">类型</VColumn>
                        <VColumn :span="20">
                            <VTag v-for="(team, index) in record.genres" :key="index">{{ team.name }}</VTag>
                        </VColumn>
                    </VRow>
                    <VRow>
                        <VColumn :span="4">语言</VColumn>
                        <VColumn :span="20">{{ spokenLanguages }}</VColumn>
                    </VRow>
                </VColumn>
            </VRow>

            <VButton @click="openResourceSlideover">
                资源搜索
            </VButton>
        </div>

        <common-bit-torrent-slideover ref="commonBitTorrentSlideoverRefs" />
    </div>
</template>

<script lang="ts" setup>
const { tmdbImagesPrefix } = useAppConfig();

const commonBitTorrentSlideoverRefs = ref();

const props = defineProps({
    record: {
        type: Object,
        default: () => ({})
    }
})

// 打开资源搜索
const openResourceSlideover = () =>
    commonBitTorrentSlideoverRefs.value?.open()

// 制片
const productionCompanies = computed(() => props.record?.production_companies?.map((item: any) => item.name).join(',') || '-')

// 语言
const spokenLanguages = computed(() => props.record?.spoken_languages?.map((item: any) => item.english_name).join(',') || '-')

// 片长
const formatRuntime = (timer: number) => timer ? `${Math.floor(timer / 60)}h ${timer % 60}min` : '-'

</script>

<style lang="less" scoped>
.summarize-main {
    width: 1200px;

    .summarize-main-image {
        width: 312px;
    }

    .summarize-detail-des {
        :deep(.vxp-column) {
            margin: 5px 0;
            color: #fff;
        }
    }

    .summarize-main-wall {}
}
</style>
