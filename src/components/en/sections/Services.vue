<script setup>
import ServiceContainer from '../../common/subcomponents/ServiceContainer.vue'
</script>

<template>
	<section id="services">
		<h5>Services</h5>
		<div class="grid gap-6 grid-cols-3 items-start">
			<ServiceContainer name="Online Storefront" imgSrc="" link="">
				<template #description>
					<p>
						Nowadays it's very important to have an online presence. Generally the minimum required is a simple website with all the information about your business like the location, the schedule or the products you have.
					</p>
					<p>
						If you simply want to keep your clients updated and spread informations for future clients about your business, this is the best option. 
					</p>
				</template>
			</ServiceContainer>

			<ServiceContainer name="Web App with Simple Backend" imgSrc="" link="">
				<template #description>
					<p>
						When your business is a bit more developped, you might need a more powerful website. One that can do price estimation, or managing your stocks. It can be really helpful and make you gain a lot of time to take care of other things.
					</p>
					<p>
						Speed things up with your business by opting for this option.
					</p>
				</template>
			</ServiceContainer>

			<ServiceContainer name="Complete Management App" imgSrc="" link="">
				<template #description>
					<p>
						As your business continues to grow, you'll need to automatize more and more things. At this point, a complete web application to manage stocks, clients and their orders, invoices and payments.
					</p>
					<p>
						Then this is the option you need : a complete backoffice linked to the client side of your website. And if you need even more !
					</p>
				</template>
			</ServiceContainer>
		</div>
	</section>
</template>

<style>
</style>