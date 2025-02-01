<script setup>
import Presentation from './about/Presentation.vue'
import Skills from './about/Skills.vue'
</script>

<template>
	<SectionWrapper id="about" class="p-6 flex flex-col gap-6 2xl:w-2/5 xl:w-1/2 w-full">
		<h5 class="text-center text-3xl font-bold">About</h5>
		<Presentation/>
		<Skills/>
	</SectionWrapper>	
</template>

<style>
</style>