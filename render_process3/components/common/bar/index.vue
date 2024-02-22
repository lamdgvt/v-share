<template>
    <div class="my-8 w-full">
        <!-- 标题 -->
        <div class="text-2xl px-8 py-4">
            {{ props.title }}

            <span class="float-right text-base cursor-pointer">查看更多</span>
        </div>
        <!-- 数据 -->
        <div class="card-content w-full flex overflow-x-auto px-8 py-6">
            <slot />
        </div>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    title: {
        type: String,
        default: '标题'
    }
})

</script>

<style lang="less" scoped>
.card-content::-webkit-scrollbar {
    display: none;
}
</style>
