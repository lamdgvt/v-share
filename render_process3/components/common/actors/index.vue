<template>
    <!-- 演员 -->
    <div class="w-full py-8 px-16">
        <div class="text-2xl text-white">演员</div>
        <div class="actors-scroll mt-5 flex overflow-x-auto">
            <div v-for="(team) in record" :key="team.id">
                <NuxtImg :style="{ width: '312px' }" :class="['p-1', 'mx-2', 'actors-box']" v-if="team.profile_path"
                    :src="`${tmdbImagesPrefix}/w342/${team.profile_path}`" />
                <div :style="{ width: '192px' }" class="mx-3 mt-2 text-base text-while">{{ team.name }}</div>
                <div :style="{ width: '192px' }" class="mx-3 text-base text-gray-200">{{ team.character }}</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    record: {
        type: Array,
        default: () => []
    },
})

const { tmdbImagesPrefix } = useAppConfig()

const record = computed<any[]>(() => props.record.filter((team: any) => team.profile_path) || [])

</script>

<style lang="less" scoped>
.actors-box {
    background-color: #9ca3af1a;
}

.actors-scroll::-webkit-scrollbar {
    display: none;
}
</style>