<script setup>
	import ProjectContainer from '../../common/subcomponents/ProjectContainer.vue';
</script>

<template>
	<section id="projects">
		<h5>Mes projets</h5>
		<div class="grid grid-cols-3">
			<ProjectContainer name="Triple Drain" imgSrc="" link="">
				<template #description>
					Triple Drain est une application web regroupant les scores sur les jeux principaux de Flipper de Zen Studios (Pinball FX et Pinball M) afin de les consulter plus facilement et calculer un classement global.
				</template>
			</ProjectContainer>
		</div>
	</section>
</template>

<style>
</style>