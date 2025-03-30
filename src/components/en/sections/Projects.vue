<script setup>
	import ProjectContainer from '../../common/subcomponents/ProjectContainer.vue';
</script>

<template>
	<section id="projects">
		<h5>My Work</h5>
		<div class="grid grid-cols-3 gap-6">
			<ProjectContainer name="Triple Drain" imgSrc="" link="">
				<template #description>
					Triple Drain is a webapp to easily see scores from the main Zen Studios Pinball Games (Pinball FX and Pinball
					M) and process global rankings.
				</template>
			</ProjectContainer>
			<ProjectContainer name="Wii Menu Recreation" imgSrc="" link="">
				<template #description>
					It's basically where I have fun with HTML, CSS and JS (without any framework) coding small apps or games. Everytime I have a fun idea, I add it there.
				</template>
			</ProjectContainer>
		</div>
	</section>
</template>

<style>
</style>