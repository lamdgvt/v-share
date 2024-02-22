<template>
    <div class="banner-content flex">
        <div class="banner-content-info">
            <div class="banner-content-info-title">
                {{ record.title }}
            </div>
            <div class="banner-content-info-rate">
                <a-rate class="text-sm" :value="formatAverage(record.vote_average)" allow-half disabled />
                <span>
                    {{ Number(record.vote_average).toFixed(1) }} ·
                    {{ record.vote_count }}人评价 ·
                    {{ releaseDate }}
                </span>
            </div>
            <div class="banner-content-info-overview">
                背景设定在《混凝土乌托邦》同一世界，致命的地震让首尔沦为荒废的不法之地，一个无所畏惧的猎人立即采取行动，营救一名被疯狂医生绑架的青少年。在变成废墟的末日世界，生活在只靠力量支配的无法天地中的人们为了生存而展开最后的殊死搏斗。
            </div>
        </div>
        <div class="banner-content-image">
            <div class="banner-content-image-modal" />
            <NuxtImg class="h-full" :src="`https://image.tmdb.org/t/p/w1280/${record.backdrop_path}`" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import 'swiper/css';

const props = defineProps({
    record: {
        type: Object,
        default: () => ({})
    }
})

const record = computed(() => props.record || {})

const releaseDate = computed<string>(() => String(record.value.release_date)?.split('-')?.[0])

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