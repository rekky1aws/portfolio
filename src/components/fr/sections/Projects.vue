<script setup>
	import ProjectContainer from '../../common/subcomponents/ProjectContainer.vue';
</script>

<template>
	<section id="projects">
		<h5>Mes projets</h5>
		<div class="grid grid-cols-3 gap-6">
			<ProjectContainer name="Triple Drain" imgSrc="" link="">
				<template #description>
					Triple Drain est une application web regroupant les scores sur les jeux principaux de Flipper de Zen Studios
					(Pinball FX et Pinball M) afin de les consulter plus facilement et calculer un classement global.
				</template>
			</ProjectContainer>
			<ProjectContainer name="Wii Menu Recreation" imgSrc="" link="">
				<template #description>
					C'est l'endroit ou je m'amuse à créer des petits jeux / petites expériences en HTML, CSS et JS uniquement (sans frameworks). Dès que j'ai une idée et un peu de temps, j'y rajoute quelque chose.
				</template>
			</ProjectContainer>
		</div>
	</section>
</template>

<style>
</style>