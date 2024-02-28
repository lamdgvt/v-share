<template>
    <div class="text-white flex h-dvh bg-black">
        <SideTools />
        <div class="content-page">
            <NuxtLoadingIndicator />
            <slot />
        </div>
    </div>
</template>

<style lang="less" scoped>
.content-page {
    width: calc(100% - 79px);
    height: 100vh;
    overflow-y: auto;
}
</style>
