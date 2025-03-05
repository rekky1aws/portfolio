<script setup>
import OpenLink from '../icons/OpenLink.vue'

defineProps({
	name: String,
	imgSrc: String,
	link: String
})
</script>

<template>
	<div class="flex flex-col items-center gap-2">
		<h6 class="font-bold text-xl text-center">{{ name }}</h6>
		<img :src="imgSrc">
		<div class="text-justify flex flex-col gap-2">
			<slot name="description"/>
		</div>
		<div class="flex justify-end w-full">
			<a class="text-green-800 font-bold hover-tilt flex gap-1 items-center justify-center m-2" target="_blank" :href="link">View <OpenLink height="15px" color="#166534"/></a>
		</div>
	</div>
</template>

<style scoped>
	
</style> 