<template>
    <div class="movie-card mx-3 cursor-pointer">
        <NuxtImg :src="record?.attributes?.posterImage?.original" />
        <div class="text-sm mt-2">{{ record?.attributes?.titles?.en }}</div>
        <div class="align-middle">
            <!-- <a-rate class="text-sm" :value="formatAverage(record[defaultKey.rate])" allow-half disabled /> -->
            <span class="text-sm ml-3 relative top-0.5">
                {{ ((record?.attributes?.averageRating) / 10).toFixed(1) }}
            </span>
        </div>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    record: {
        type: Object,
        default: () => ({})
    },
    props: {
        type: Object,
        default: () => ({})
    }
})

const record = computed(() => props.record || {})

const defaultKey = computed(() => ({
    title: 'title',
    src: 'attributes.coverImage.original',
    rate: 'vote_average',
    ...props.props,
}))

// 图片前缀

const { tmdbImagesPrefix } = useAppConfig();


const formatAverage = (rate: number) => Math.floor(rate / 2) + (((rate % 2) / 2) >= 0.25 ? 0.5 : 0);

</script>

<style lang="less" scoped>
.movie-card {

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
