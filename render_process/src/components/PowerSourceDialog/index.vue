<template>
    <a-modal v-model:open="visible" title="电源选项" :footer="null">
        <a-space>
            <a-button type="primary" @click="shutdown">关闭系统电源</a-button>
            <a-button @click="sheep">休眠</a-button>
            <a-button @click="restart">重启</a-button>
        </a-space>
    </a-modal>
</template>

<script lang="ts" setup>
import { ref, defineExpose } from 'vue'

const visible = ref<boolean>(false)

// 打开
const open = () => {
    visible.value = true;
}

// 关闭
const close = () => {
    visible.value = false;
}

// 重启
const restart = () => {
    window.electron?.restart();
    close();
}

// 休眠
const sheep = () => {
    window.electron?.sheep();
    close();
}

// 关机
const shutdown = () => {
    window.electron?.shutdown();
    close();
}


defineExpose({
    open,
    close
})

</script>