<template>
    <div class="banner-content flex">
        <div class="banner-content-info">
            <div class="banner-content-info-title">
                {{ record.title }}
            </div>
            <div class="banner-content-info-rate flex">
                <common-rate class="translate-y-1.5" :value="formatAverage(record?.vote_average || 0)" />
                <span>
                    {{ Number(record?.vote_average).toFixed(1) }} ·
                    {{ record?.vote_count }}人评价 ·
                    {{ releaseDate }}
                </span>
            </div>
            <div class="banner-content-info-overview">
                {{ record.overview }}
            </div>
        </div>
        <div class="banner-content-image">
            <div class="banner-content-image-modal" />
            <NuxtImg class="h-full" :src="`${tmdbImagesPrefix}w1280${record.backdrop_path}`" />
        </div>
    </div>
</template>

<script lang="ts" setup>
const { tmdbImagesPrefix } = useAppConfig();

const props = defineProps({
    record: {
        type: Object,
    },
})

const record = computed(() => props.record || { title: '', overview: '', })

// 发布日期
const releaseDate = computed<string>(() => String(record.value.release_date)?.split('-')?.[0])

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
            span {
                margin: 0 1rem;
                position: relative;
                top: 3px;
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