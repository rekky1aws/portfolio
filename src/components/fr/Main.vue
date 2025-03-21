<script setup>
import Header from '../common/Header.vue';

import About from './sections/About.vue'
import Projects from './sections/Projects.vue'
import Services from './sections/Services.vue'
import Contact from '../common/sections/Contact.vue'
</script>

<template>
	<Header>
		<template #job-name>Développeur Web Fullstack</template>
	</Header>
	<main class="m-5 flex flex-col justify-center items-center gap-5">
		<About/>
		<Services/>
		<Projects/>
		<Contact/>
	</main>
</template>

<style>
	
</style>