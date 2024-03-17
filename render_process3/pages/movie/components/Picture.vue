<template>
    <div class="p-8">
        <!-- 背景 -->
        <div class="text-2xl text-white">
            背景
            <span class="text-sm">
                {{ backdrops?.length || 0 }} 张照片
            </span>
        </div>
        <VImageGroup class="text-center" preview :show-all="true">
            <VImage class="m-8" v-for="team in backdrops" :preview="true"
                :preview-src="`${tmdbImagesPrefix}w1280${team.file_path}`" :skeleton="true" :key="team.file_path"
                :src="`${tmdbImagesPrefix}w500${team.file_path}`" />
        </VImageGroup>

        <!-- 海报 -->
        <div class="text-2xl text-white">
            海报
            <span class="text-sm">
                {{ posters.length || 0 }} 张照片
            </span>
        </div>

        <VImageGroup class="text-center" preview :show-all="true">
            <VImage class="m-8" v-for="team in posters" :preview="true"
                :preview-src="`${tmdbImagesPrefix}w1280${team.file_path}`" :skeleton="true" :lazy="true"
                :key="team.file_path" :src="`${tmdbImagesPrefix}w185${team.file_path}`" />
        </VImageGroup>

        <!-- Logos -->
        <div class="text-2xl text-white">
            Logos
            <span class="text-sm">
                {{ logos.length || 0 }} 张照片
            </span>
        </div>
        <VImageGroup class="text-center" preview :show-all="true">
            <VImage class="m-8" v-for="team in logos" :preview="true"
                :preview-src="`${tmdbImagesPrefix}w185${team.file_path}`" :skeleton="true" :lazy="true"
                :key="team.file_path" :src="`${tmdbImagesPrefix}w185${team.file_path}`" />
        </VImageGroup>

    </div>
</template>

<script lang="ts" setup>

const { tmdbImagesPrefix } = useAppConfig()

const props = defineProps({
    backdrops: {
        type: Object,
        default: () => ({})
    },
    logos: {
        type: Object,
        default: () => ({})
    },
    posters: {
        type: Object,
        default: () => ({})
    },
})

const backdrops = computed(() => props.backdrops || [])

const logos = computed(() => props.logos || [])

const posters = computed(() => props.posters || [])


</script>

<style lang="less" scoped>
.picture-main {
    color: #fff;
}
</style>
