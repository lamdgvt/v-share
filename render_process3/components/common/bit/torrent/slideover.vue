<script setup lang="ts">
useHead({
    script: [{ src: "https://cdn.jsdelivr.net/npm/webtorrent@latest/webtorrent.min.js" }],
})

const visible = ref(false)

// 打开 Slideover
const open = (record: any) => {
    getBitTorrent(record)
    visible.value = true
}

// 关闭 Slideover
const close = () => {
    visible.value = false
}

const items = ref([])

const pageInfo = reactive({
    limit: 10,
    offset: 1,
})

// 获取 bit 种子
const getBitTorrent = async (record: any) => {
    const { name, title } = record

    const { code, data } = await $fetch('/api/share/anime/bitTorrent', {
        query: { title: title || name, ...pageInfo },
        lazy: true,
        server: false
    })

    if (code === 0) items.value = data.map((team: any) => {
        team.label = team.title;
        team.icon = 'i-heroicons-arrow-down-tray';
        team.defaultOpen = true;
        delete team.title;
        return team
    }) || []
}

// 配置
const slideoverConfig = {
    width: 'custom-width',
    wrapper: 'fixed inset-0 flex z-[300]',
    divide: ' divide-y divide-gray-100 dark:divide-gray-800'
}

// bit 下载
const bitDownload = async (bitTorrent: string) => {
    const client = new WebTorrent()

    console.log(client)
    const torrentId = 'magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F&xs=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel.torrent'

    client.add(torrentId, function (torrent) {
        console.log(torrent)
        // Torrents can contain many files. Let's use the .mp4 file
        const file = torrent.files.find(function (file) {
            return file.name.endsWith('.mp4')
        })

        // Display the file by adding it to the DOM.
        // Supports video, audio, image files, and more!
        file.appendTo('body')
    })

    // client.add(bitTorrent, (torrent: any) => {
    //     console.log(torrent)
    // })
}

// netDisk
const openNetDisk = async (netdisk: string) => {
    window.open(netdisk)
}

const thunderDownload = (bitTorrent: string) => {
    const a = document.createElement("a");

    a.href = bitTorrent;

    a.setAttribute("download", "")

    a.click()
}

defineExpose({
    open,
    close
})
</script>

<template>
    <USlideover class="slideover-main" v-model="visible" :ui="slideoverConfig">
        <ClientOnly>
            <UCard class="flex flex-col flex-1">
                <UAccordion class="custom-accordion" multiple :items="items">
                    <template #item="{ item }">
                        <p class="italic text-gray-900 dark:text-white">
                            <UKbd class="cursor-pointer" @click="() => bitDownload(item.bitTorrent)">BitTorrent</UKbd>
                            <UKbd class="cursor-pointer" @click="() => openNetDisk(item.netdisk)">NetDisk</UKbd>
                            <UKbd class="cursor-pointer" @click="() => thunderDownload(item.bitTorrent)">磁链下载</UKbd>
                        </p>
                    </template>
                </UAccordion>
            </UCard>
        </ClientOnly>

    </USlideover>
</template>

<style lang="less" scoped>
.custom-accordion {
    :deep(button) {
        span {
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
    }
}
</style>
