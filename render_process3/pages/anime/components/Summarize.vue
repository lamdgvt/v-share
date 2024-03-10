<template>
    <div class="summarize-main p-8 flex my-0 m-auto">
        <div class="summarize-main-image mr-8">
            <NuxtImg :src="record?.attributes?.posterImage?.large" alt="" />
        </div>
        <div class="summarize-main-des flex-1">
            <div class="text-3xl text-white">剧情</div>
            <div class="mt-6 text-white">
                {{ record?.attributes?.description }}
            </div>

            <VRow class="summarize-detail-des mt-6">
                <VColumn :span="12">
                    <VRow>
                        <VColumn :span="4">上映日期</VColumn>
                        <VColumn :span="20">
                            {{ record?.attributes?.startDate || '-' }}
                        </VColumn>
                    </VRow>
                </VColumn>
            </VRow>
        </div>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    record: {
        type: Object,
        default: () => ({})
    }
})

const record = computed(() => props.record)

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
