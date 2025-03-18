<script setup>
import { ref } from 'vue';

const language = ref("en");
</script>

<template>
    <main class="h-screen w-screen flex flex-col justify-center items-center">
        <h1 v-if="language == 'fr'" class="text-5xl font-bold">Bienvenue</h1>
        <h1 v-else class="text-5xl font-bold">Welcome</h1>

        <h2 v-if="language == 'fr'" class="font-bold m-2">Choisissez une langue</h2>
        <h2 v-else class="font-bold m-2">Pick a language</h2>


        <div class="flex justify-center items-center gap-8 m-6">
            <RouterLink to="/en" id="en" @mouseover="language = 'en'">
                <div class="p-4 bg-gray-300 rounded-full drop-shadow hover-tilt flex gap-2 flex-col justify-center items-center text-4xl hover:drop-shadow-xl">
                    <span>🇬🇧</span>
                </div>
            </RouterLink>
            <RouterLink to="/fr" id="fr" @mouseover="language = 'fr'">
                <div class="p-4 bg-gray-300 rounded-full drop-shadow hover-tilt flex gap-2 flex-col justify-center items-center text-4xl hover:drop-shadow-xl">
                    <span>🇫🇷</span>
                </div>
            </RouterLink>
        </div>
    </main>
</template>

<style scoped>
</style>