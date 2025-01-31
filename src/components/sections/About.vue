<script setup>
import Presentation from './about/Presentation.vue'
import Skills from './about/Skills.vue'
</script>

<template>
	<SectionWrapper id="about" class="w-screen p-6 flex flex-col gap-6">
		<h5 class="text-center text-3xl font-bold">About</h5>
		<Presentation/>
		<Skills/>
	</SectionWrapper>	
</template>

<style>
</style>