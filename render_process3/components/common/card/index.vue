<template>
    <div class="movie-card mx-3 cursor-pointer">
        <NuxtImg :src="`${tmdbImagesPrefix}w500${record?.[attribute.posterPath]}`" />
        <div class="text-sm mt-2 truncate">{{ titleVisible }}</div>
        <div class="align-middle flex mt-1">
            <common-rate :value="Number((record?.[attribute.voteAverage] / 2).toFixed(1)) || 0" />
            <span class="text-sm ml-3 relative">
                {{ Number(record?.[attribute.voteAverage]).toFixed(1) }}
            </span>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { getBaseType } from '@/utils'

const props = defineProps({
    record: {
        type: Object,
        default: () => ({})
    },
    props: {
        type: Object,
        default: () => ({})
    },
    attribute: {
        type: Object,
        default: () => ({})
    }
})

const record = computed(() => props.record || {})

const attribute = computed(() => ({
    title: 'title',
    voteAverage: 'voteAverage',
    posterPath: 'posterPath',
    ...props.attribute
}))

const titleVisible = computed(() => {
    const titleKey = attribute.value.title;

    if (getBaseType(titleKey) === 'Array') {

        for (let key of titleKey) {
            const val = record.value?.[key];

            if (val)
                return val
        }
    }

    return record.value?.[titleKey] || '';
})

// 图片前缀
const { tmdbImagesPrefix } = useAppConfig();
</script>

<style lang="less" scoped>
.movie-card {
    width: 236px;

    :deep(img) {
        width: 236px;
        height: 330px;
        max-width: none;
    }

    &:hover {
        :deep(img) {
            transform: scale(1.05);
            transition: all 0.3s ease;
        }
    }

    :deep(.ant-rate-star-half .ant-rate-star-second) {
        color: #333;
    }

    :deep(.ant-rate-star-zero svg) {
        color: #333;
    }
}
</style>
