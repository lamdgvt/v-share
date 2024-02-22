<script lang="ts" setup>
</script>

<template>
    <div class="side-tools h-full w-20 bg-black">
        <span class="icon">
            <nuxt-link>
                <nuxt-icon name="sideTools/home" />
            </nuxt-link>
        </span>
        <span class="icon">
            <nuxt-icon name="sideTools/videoLibrary" />
        </span>
        <span class="icon">
            <nuxt-icon name="sideTools/tv" />
        </span>
        <span class="icon">
            <nuxt-icon name="sideTools/search" />
        </span>
    </div>
</template>

<style lang="less" scoped>
.side-tools {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border-right: 1px solid rgba(255, 255, 255, 0.3);

    .icon {
        cursor: pointer;

        :deep(svg) {
            fill: #fff;
            font-size: 2em;
        }
    }
}
</style>

<style>
.nuxt-icon.nuxt-icon--stroke,
.nuxt-icon.nuxt-icon--stroke *,
.nuxt-icon.nuxt-icon--fill,
.nuxt-icon.nuxt-icon--fill * {
    stroke: #fff !important;
    fill: #000 !important;
}
</style>