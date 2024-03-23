<script lang="ts" setup>
</script>

<template>
    <div class="side-tools h-full w-20 bg-black">
        <span class="icon">
            <nuxt-link to="/home">
                <nuxt-icon name="sideTools/home" />
            </nuxt-link>
        </span>
        <span class="icon">
            <nuxt-link to="/anime">
                <nuxt-icon name="sideTools/video-library" />
            </nuxt-link>
        </span>
        <span class="icon">
            <nuxt-icon name="sideTools/tv" />
        </span>
        <span class="icon">
            <nuxt-link to="/search">
                <nuxt-icon name="sideTools/search" />
            </nuxt-link>
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

    :deep(.nuxt-icon.nuxt-icon--stroke),
    :deep(.nuxt-icon.nuxt-icon--stroke *),
    :deep(.nuxt-icon.nuxt-icon--fill),
    :deep(.nuxt-icon.nuxt-icon--fill *) {
        stroke: #fff !important;
        fill: #000 !important;
    }
}
</style>
