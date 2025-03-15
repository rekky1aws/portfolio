<script setup>
import { ref } from 'vue';

const welcomeText = ref("Welcome");
console.log(welcomeText);
</script>

<template>
    <main class="h-screen w-screen flex flex-col justify-center items-center gap-8">
        <h1 id="welcome" class="text-5xl font-bold">{{ welcomeText }}</h1>
        <div class="flex justify-center items-center gap-8">
            <RouterLink to="/fr" id="fr" @mouseover="welcomeText = 'Bienvenue'">
                <div class="p-4 bg-gray-300 rounded-full drop-shadow hover-tilt flex gap-2 flex-col justify-center items-center text-4xl hover:drop-shadow-xl">
                    <span>🇫🇷</span>
                    <!-- <span>Français</span> -->
                </div>
            </RouterLink>
            <RouterLink to="/en" id="en" @mouseover="welcomeText = 'Welcome'">
                <div class="p-4 bg-gray-300 rounded-full drop-shadow hover-tilt flex gap-2 flex-col justify-center items-center text-4xl hover:drop-shadow-xl">
                    <span>🇬🇧</span>
                    <!-- <span>English</span> -->
                </div>
            </RouterLink>
        </div>
    </main>
</template>

<style scoped>
</style>