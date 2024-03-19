<template>
    <div class="banner-content flex">
        <div class="banner-content-info">
            <div class="banner-content-info-title">
                {{ record[attribute.title] }}
            </div>
            <div class="banner-content-info-rate flex items-center translate-y-2">
                <common-rate :value="formatAverage(record?.[attribute.voteAverage] || 0)" />
                <span>
                    {{ Number(record?.[attribute.voteAverage]).toFixed(1) || 0 }}
                    <span v-if="record?.[attribute.voteCount]">
                        ·
                        {{ record?.[attribute.voteCount] || 0 }} 人评价
                    </span>
                    <span v-if="releaseDate">· {{ releaseDate || '' }}</span>
                </span>
            </div>
            <div class="banner-content-info-overview">
                {{ record?.[attribute.overview] }}
            </div>
        </div>
        <div class="banner-content-image">
            <div class="banner-content-image-modal" />
            <NuxtImg class="h-full" :src="`${tmdbImagesPrefix}w1280${record[attribute.backdropPath]}`" />
        </div>
    </div>
</template>

<script lang="ts" setup>
const { tmdbImagesPrefix } = useAppConfig();

const props = defineProps({
    record: {
        type: Object,
    },
    attribute: {
        type: Object,
        default: () => ({})
    },
})

const record = computed(() => props.record || {})

const attribute = computed(() => ({
    title: 'title',
    overview: 'overview',
    voteCount: 'voteCount',
    voteAverage: 'voteAverage',
    backdropPath: 'backdropPath',
    ...props.attribute
}))

// 发布日期
const releaseDate = computed<string>(() => record.value.release_date ? String(record.value.release_date)?.split('-')?.[0] : '')

// 格式化评分
const formatAverage = (rate: number) => Math.floor(rate / 2) + (((rate % 2) / 2) >= 0.25 ? 0.5 : 0);

</script>

<style lang="less" scoped>
.banner-content {
    height: 660px;
    position: relative;

    .banner-content-info {
        display: flex;
        z-index: 500;
        justify-content: center;
        flex-direction: column;
        padding: 0 6rem;
        width: 66.67%;
        box-sizing: border-box;
        overflow: visible;

        .banner-content-info-rate {
            >span {
                margin: 0 1rem;
                color: rgba(255, 255, 255, 0.6);
            }

            :deep(.ant-rate-star-half .ant-rate-star-second) {
                color: #333;
            }

            :deep(.ant-rate-star-zero svg) {
                color: #333;
            }
        }

        .banner-content-info-title {
            font-size: 3rem;
        }

        .banner-content-info-overview {
            color: rgba(255, 255, 255, 0.6);
            margin: 1rem 0;
        }
    }

    .banner-content-image {
        height: 100%;
        right: 0;
        position: absolute;

        .banner-content-image-modal {
            position: absolute;
            background: linear-gradient(to right, rgba(0, 0, 0, 0.99) 0%, transparent 50%, rgba(0, 0, 0, 0.99) 100%);
            z-index: 100;
            height: 100%;
            width: 100%;
        }

        img {
            height: 100%;
        }
    }
}
</style>