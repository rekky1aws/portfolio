<script setup>
	/*const myAge = new Date(Date.parse("2002-03-15"));*/
	const myAge = new Date(Date.now() - Date.parse("2002-03-15")).getFullYear() - 1969;
	console.log(Date.now(), Date.parse("2002-03-15"), myAge);
</script>

<template>
	<article id="presentation">
		<h6>Présentation</h6>
		<p class="py-2 indent-4 first-letter:text-2xl text-justify">
			Je m'appelle Donatien, j'ai {{ myAge }} ans et j'ai grandi avec internet donc je me suis assez vite intéressé à son fonctionnement. Cela m'a vraiment plus et c'est donc tout naturellement que j'ai voulu aller plus loin et que j'ai finalement décidé d'en faire mon métier. Comme je m'amusais à développer des petits jeux sur ma calculatrice du lycée, mon professeur de mathématiques de l'époque m'a conseiller de continuer dans cette voix, notamment en poussant plus loin l'algorithmique avec Python.
		</p>
		<p class="pb-2 indent-4 text-justify">
			Après le lycée, j'ai donc suivi un parcours d'informaticien et ai postulé pour une école d'ingénieur : l'IG2I. Et j'y ai été accepté ! Cependant, il y avait aussi de l'electricité industrielle au programme de cette formation et cela ne me plaisait pas autant, meme si je trouve cela intéressant d'avoir tenté. Après y avoir acquis de solide base en C puis surtout en HTML, CSS, JavaScript, PHP ou encore SQL, j'ai donc décidé de continuer en autodidacte sur ces technologies, le temps de pouvoir continuer à apprendre tout en cherchant une formation qui pourrait mieux me convenir. Formation que j'ai pu trouver par la suite chez POP School et ses formateurs avec qui j'ai pu découvrir et apprendre à maitriser Bootstrap, SASS, Tailwind, VueJS, Symfony.
		</p>
		<p class="pb-2 indent-4 text-justify">
			Aujourd'hui, je suis toujours autant, voir de plus en plus passionné par l'informatique et continue de mettre régulièrement en place des nouveaux projets personnels, alimentant mon compte GitHub par la même occasion. Et après avoir obtenu la même année mon permis B et mon Titre Professionnel de Développeur Web et Web Mobile, je suis désormais en recherche de missions dans ce domaine.
		</p>
		<p class="indent-4 text-justify">Bien sur, même si j'aime beaucoup le développement, je ne fais pas que cela. Et comme j'aime bien apprendre de nouvelles choses, je me suis mis à la guitare puis à la basse il y a quelques années, je dessine, fais de la musique via des logiciels, j'ai fait du rugby, je joue au flipper et surtout je lis beaucoup, autant des livres que des articles ou de la documentation sur internet.</p>
	</article>
</template>

<style>
	
</style>