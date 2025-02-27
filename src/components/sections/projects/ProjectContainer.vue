<script setup>
	defineProps({
		name: String,
		imgSrc: String,
		link: String
	})
</script>

<template>
	<div class="flex flex-col">
		<div class="">{{ name }}</div>
		<img :src="imgSrc">
		<slot name="description"></slot>
	</div>
</template>

<style scoped>
	
</style>