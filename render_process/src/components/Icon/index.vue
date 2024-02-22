<template>
    <svg class="icon" aria-hidden="true">
        <use :xlink:href="icon"></use>
    </svg>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue'

defineProps({
    icon: {
        type: String,
        default: '',
    }
})

</script>