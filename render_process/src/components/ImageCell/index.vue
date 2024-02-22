<template>
    <div class="image-cell">
        <img class="image-cell-image" :src="`${imagesPrefix}${record['poster_path']}`">
        <div class="image-cell-info">
            <span>{{ record.title }}</span>
            <span>{{ record.release_date }}</span>
            <span>评分: {{ Number(record.vote_average).toFixed(1) }}</span>
        </div>

    </div>
</template>

<script lang="ts" setup>
import { imagesPrefix } from '@/apis/themoviedb/discover'
import { defineProps } from 'vue'

defineProps({
    record: {
        type: Object,
        default: () => ({})
    }
})

</script>

<style lang="less" scoped>
.image-cell {
    display: flex;
    flex-direction: column;
    align-items: center;

    .image-cell-image {
        border-radius: 5px;
    }

    .image-cell-info {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}
</style>
