<template>
    <div class="home-main">
    </div>
</template>
<script setup lang="ts">
import { DiscoverMovieAPI } from '@/apis/themoviedb/discover'
import type { DiscoverIO } from '@/apis/themoviedb/discover'

// const router = useRouter();

const getDatas = async () => {
    const params: DiscoverIO = {
        page: 1
    }

    const res1 = await DiscoverMovieAPI(params)

    console.log(res1)
}

getDatas()

</script>
<style lang="less" scoped>
.home-main {
    display: flex;
}
</style>