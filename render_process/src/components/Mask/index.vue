<template>
    <div class="open-file">
        <div class="open-file-mask" v-if="visible">
            <a-button size="large" class="open-file-mask-btn" @click="openFile">打开文件</a-button>
        </div>
        <div class="file-content" @click.stop>
            <slot />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, defineProps, defineEmits } from 'vue';

const props = defineProps({
    visible: {
        type: Boolean,
        default: false
    }
})

const emits = defineEmits(['update:visible', 'openFile'])

const visible = computed({
    get() {
        return props.visible
    },
    set(value) {
        emits('update:visible', value)
    }
})

const openFile = () => {
    const input = document.createElement("input");

    input.type = "file";

    input.onchange = (e: any) => {
        const [file] = e.target.files;

        if (file) {
            const fileUrl = URL.createObjectURL(file);

            emits('openFile', fileUrl)
        }

    }

    input.click();
}


</script>
<style lang="less" scoped>
.open-file {
    height: 100%;
    width: 100%;
    position: relative;
}

.open-file-mask {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    margin: auto;
    background-color: rgba(0, 0, 0, 0.65);
    display: flex;
    align-items: center;
    justify-content: center;

    .open-file-mask-btn {}
}
</style>
