<template>
	<div class="the-header">
		<Menu />

		<div class="the-content">
			<router-view />
		</div>
	</div>
</template>
<script setup lang="ts">
import Menu from '@/components/Menu/index.vue'

// const router = useRouter();
</script>
<style lang="less" scoped>
.the-header {
	display: flex;
}

.the-content {
	flex: 1;
	overflow: auto;
	height: 100vh;
}
</style>