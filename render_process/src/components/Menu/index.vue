<template>
    <div class="menu-main">
        <div class="menu-logo">
            <img :src="logo" alt="">
        </div>
        <div class="menu-tools">
            <Icon icon="#icon-shareguanbi" @click="closeEvent" />
            <Icon icon="#icon-shareguanlishezhi" @click="settingEvent" />
            <Icon icon="#icon-sharesousuo" @click="searchEvent" />
        </div>
        <a-menu v-model:openKeys="openKeys" theme="dark" v-model:selectedKeys="selectedKeys" mode="inline" :items="items" />

        <!-- 电源弹出框 -->
        <PowerSourceDIalog ref="PowerSourceDIalogRef" />
    </div>
</template>
<script lang="ts" setup>
import { reactive, shallowRef } from 'vue'
import type { ItemType } from 'ant-design-vue';
import Icon from '@/components/Icon/index.vue'
import logo from '@/assets/images/logo.svg'
import PowerSourceDIalog from '@/components/PowerSourceDialog/index.vue';

const PowerSourceDIalogRef = shallowRef<any>(null)
const openKeys = reactive<string[]>([])
const selectedKeys = reactive<string[]>([])
const items = reactive<ItemType[]>([
    {
        key: 'movies',
        label: 'Movies',
        title: 'Movies',
    },
    {
        key: 'tvShows',
        label: 'TV shows',
        title: 'TV shows'
    },
    {
        key: 'music',
        label: 'Music',
        title: 'Music',
    },
    {
        key: 'tv',
        label: 'TV',
        title: 'TV',
    },
    {
        key: 'pictures',
        label: 'Pictures',
        title: 'Pictures',
    }
])

const closeEvent = () =>
    PowerSourceDIalogRef.value.open();

const settingEvent = () => {
    PowerSourceDIalogRef.value.open();
}

const searchEvent = () => {
    PowerSourceDIalogRef.value.open();
}

</script>

<style lang="less" scoped>
.menu-main {
    height: 100vh;
    width: 15vw;
    display: flex;
    flex-direction: column;

    .menu-logo {
        height: 70px;
        width: 100%;

        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }

    .menu-tools {
        height: 90px;
        background-color: #001529;
        display: flex;
        justify-content: center;
        align-items: center;

        :deep(.icon) {
            cursor: pointer;
            font-size: 65px;
            flex: 1;
        }
    }

    :deep(.ant-menu) {
        flex: 1;
        overflow-y: auto;
    }
}
</style>
