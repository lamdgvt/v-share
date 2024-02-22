<template>
    <div class="player-main">
        <Mask v-model:visible="maskVisible" @openFile="openFileEvent">
            <video controls crossorigin playsinline poster="path/to/poster.jpg" id="playerRef" ref="playerRef">
                <!-- <source type="video/mp4" /> -->
            </video>
        </Mask>
    </div>
</template>, watch

<script setup lang="ts">
import { onMounted, ref, watch, nextTick } from 'vue'
import Mask from '@/components/Mask/index.vue'
import "plyr/dist/plyr.css"
import Agony from '@/assets/Agony.mp4'

const maskVisible = ref<boolean>(true)
const playerRef = ref<HTMLElement>()
const filePath = ref<string>('')
const player = ref<any>(null)

// 初始化
const init = async () => {
    const { default: Plyr } = await import('plyr');

    player.value = new Plyr(playerRef.value, {
        source: {
            type: 'video',
            sources: [{
                src: Agony,
                type: 'video/mp4',
                size: 1080
            }],
        }
    })
}

// 打开文件事件
const openFileEvent = (url: string) => {
    filePath.value = url

    maskVisible.value = false;

    nextTick(() => {
        player.value.play()
    })
}

watch(() => filePath.value, (value) => {

    player.value.source = {
        type: 'video',
        sources: [{
            src: value,
            type: 'video/mp4',
        }],
    }

    console.log(player.value)
})

onMounted(() => {
    init()
})

</script>

<style lang="less" scoped>
.player-main {
    height: 100%
}
</style>