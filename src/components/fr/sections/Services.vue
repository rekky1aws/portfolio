<script setup>
import ServiceContainer from '../../common/subcomponents/ServiceContainer.vue'
</script>

<template>
	<section id="services">
		<h5>Services</h5>
		<div class="grid gap-6 grid-cols-3 items-start">
			<ServiceContainer name="Site Vitrine" imgSrc="" link="">
				<template #description>
					<p>
						De nos jours il est vraiment important d'avoir une présence en ligne. En général, le minimum c'est d'avoir un simple site web avec toutes les informations sur votre commerce comme l'adresse, les horaires ou les produits proposés.
					</p>
					<p>
						Si vous voulez juste tenir vos clients au courant de vos actions et avoir un endroit ou vos futurs clients peuvent vous trouver facilement, c'est l'option qu'il vous faut.
					</p>
				</template>
			</ServiceContainer>

			<ServiceContainer name="App Web avec Backend Simple" imgSrc="" link="">
				<template #description>
					<p>
						Lorsque votre commerce grandit, vous avez besion d'un site web plus puissant qui vous permet de faire des devis ou gérer vos stocks. Cela peut vous aider à gagner beaucoup de temps, que vous pourrez utiliser pour gérer d'autres choses plus efficacement.
					</p>
					<p>
						Accélerez les choses en optant pour cette option.
					</p>
				</template>
			</ServiceContainer>

			<ServiceContainer name="Application Complète de Gestion" imgSrc="" link="">
				<template #description>
					<p>
						Votre business a encore grandi et vous avez besoin d'automatiser encore plus de choses ? A ce stade une application complète vous permettant de gérer vos clients, leurs commandes, vos factures (entrantes et sortantes) serait la bienvenue.
					</p>
					<p>
						Alors vous avez besoin d'une application dans ce genre avec un backoffice complet, relié au côté client. Et même plus si besoin.
					</p>
				</template>
			</ServiceContainer>
		</div>
	</section>
</template>

<style>
</style>