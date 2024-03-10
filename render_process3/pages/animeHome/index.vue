<script lang="ts" setup>
const router = useRouter()

const people = ['Wade Cooper', 'Arlene Mccoy', 'Devon Webb', 'Tom Cook', 'Tanya Fox', 'Hellen Schmidt', 'Caroline Schultz', 'Mason Heaney', 'Claudie Smitham', 'Emil Schaefer']

const selected = ref(people[0])

</script>

<template>
    <!--  -->
    <!-- <common-kitsu-bar title="热门动漫">
        <common-kitsu-card v-for="(item) in hotAnimeList" :record="item" :key="item.id"
            @click="() => router.push(`/anime/${item.id}`)" />
    </common-kitsu-bar> -->

    <UInputMenu v-model="selected" :options="people" />
</template>
