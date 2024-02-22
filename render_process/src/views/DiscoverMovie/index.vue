<template>
    <div class="discover-movie">
        <div class="discover-movie-box">
            <div v-for="(item) in tableDatas.results" :key="item.id" class="discover-movie-box-cell">
                <image-cell :record="item" />
            </div>
        </div>

        <div class="discover-movie-page">
            <a-pagination v-model:current="tableDatas.page" show-quick-jumper :showSizeChanger="false" :total="500"
                @change="onChange" />
        </div>
    </div>
</template>
<script setup lang="ts">
import { DiscoverMovieAPI } from '@/apis/themoviedb/discover'
import type { DiscoverIO } from '@/apis/themoviedb/discover'
import { reactive } from 'vue';
import ImageCell from '@/components/ImageCell/index.vue'

// const router = useRouter();

// 入参
const params: DiscoverIO = {
    page: 1,
    language: 'zh-CN'
}

const tableDatas = reactive({
    page: 1,
    results: [],
    totalResults: 0
})

// 获取数据
const getDatas = async () => {

    const res = await DiscoverMovieAPI(params)

    const { total_results: totalResults, results, page } = res

    Object.assign(tableDatas, { totalResults, results, page })
}

// 分页事件
const onChange = (page: number) => {
    Object.assign(params, { page });

    getDatas()
}

// created 初始化
getDatas()
</script>

<style lang="less" scoped>
.discover-movie {
    .discover-movie-box {
        display: grid;
        grid-row-gap: 30px;
        grid-column-gap: 15px;
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    }

    .discover-movie-page {
        text-align: center;
    }
}
</style>