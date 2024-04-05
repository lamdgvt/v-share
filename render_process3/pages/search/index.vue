<template>
    <div class="search-layout flex flex-col h-lvh">
        <UInput class="text-gray-400" v-model="search" placeholder="搜索" />

        <div class="flex-1 p-3">
            <div v-if="!grid.total" class="text-3xl text-center text-gray-400 mt-10 m-auto">请输入要搜索的内容</div>

            <!-- 内容结果 -->
            <ClientOnly v-else>
                <div class="result-content grid auto-cols-auto">
                    <common-card v-for="(item) in grid.results" :record="item" :key="item.id"
                        @click="() => skipEvent(item)" :attribute="cardAttribute" />
                </div>
            </ClientOnly>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, watch, ref } from 'vue';
import { debounce } from 'lodash'

const router = useRouter()

const cardAttribute = reactive({
    title: ['name', 'title'],
    voteCount: 'vote_count',
    voteAverage: 'vote_average',
    posterPath: 'poster_path',
})

const search = ref('')
const page = ref(1);

const grid = reactive<any>({
    total: 0, // 总数
    results: []
})

// 搜索事件
const searchEvent = debounce(async (isRefresh) => {
    isRefresh && (grid.results = [])

    const data = await $fetch('/api/tmdb/search/multi', {
        query: { query: search.value, page: page.value, language: 'zh-CN' },
        lazy: true,
        server: false
    })

    Object.assign(grid, {
        page: data?.page || 1,
        total: data?.total_results || 0,
    })

    grid.results = [...grid.results, ...data?.results || []];
}, 600)

// 跳转 Event
const skipEvent = (team: any) => {
    const { id, media_type: mediaType } = team;

    // 根据两种类型 movie tv 跳转不同的详情
    switch (mediaType) {
        case 'movie': {
            router.push({
                path: `/movie/${id}`,
            })
            break;
        }
        case 'tv': {
            router.push({
                path: `/tv/${id}`,
            })
            break;
        }
    }
}

watch(() => search.value, () => searchEvent(false))
watch(() => page.value, () => searchEvent(true))

</script>

<style lang="less" scoped>
.search-layout {
    :deep(input) {
        height: 70px;
        font-size: 22px;
        padding: 0 25px;
        border-radius: 0;
        background-color: #9ca3af1a;
        border: none;
        color: rgb(156, 163, 175);
        --tw-ring-opacity: 0;
    }
}

.result-content {
    grid-template-columns: repeat(auto-fill, 245px);
    grid-row-gap: 30px;
    grid-column-gap: 10px;
}
</style>
