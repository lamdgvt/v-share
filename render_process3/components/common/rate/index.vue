<template>
    <div class="flex star-group">
        <nuxt-icon class="star-full" v-for="i in starNum.full" name="common/star" />
        <nuxt-icon class="star-half" v-for="n in starNum.half" name="common/star-half" />
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    value: {
        type: Number,
        default: 0,
    },
})

const emits = defineEmits(["update:value"])

const value = computed<number>({
    get() {
        return props.value;
    },
    set(num: number) {
        emits("update:value", num)
    }
})

const starNum = computed<{ full: number; half: number }>(() => {
    const [full, half] = String(value.value).split('.').map(team => Number(team))

    return {
        full,
        half: half >= 5 ? 1 : 0,
    }
})

</script>

<style lang="less" scoped>
.star-group {

    .star-full,
    .star-half {
        color: #ffb75a;
    }

    .star-half {
        transform: translate(0, 0.5px);
    }
}
</style>
