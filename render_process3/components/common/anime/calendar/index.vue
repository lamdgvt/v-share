<template>
    <!-- 星期一 -->
    <common-anime-bar v-for="(week, key) in record" :key="key" :title="key">
        <common-anime-card v-for="(team) in week" :record="team" :key="team.id" />
    </common-anime-bar>

    <!-- 星期二 -->
</template>

<script lang="ts" setup>
const props = defineProps({
    record: {
        type: Object,
        default: () => ({})
    },
})

</script>

<style lang="less" scoped></style>