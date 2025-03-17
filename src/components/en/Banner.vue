<script setup>
const changingText = document.querySelector('#changing');

</script>

<template>
  <div class="bg-gradient-to-tr from-secondarycyan to-maingreen bg-no-repeat w-full flex flex-row justify-between items-center m-0 p-0">
    <div class="h-96 p-16 h-full flex flex-col gap-4 w-full">
      <div class="flex flex-col gap-1">
        <h3 class="text-4xl lg:text-5xl font-bold">Hi, I'm Donatien !</h3>
        <h4 class="text-3xl lg:text-4xl" id="work">
          <span id="changing" class="text-green-900">Full-Stack</span> Developper
        </h4>
      </div>
      <div class="text-xs italic sm:text-sm md:text-base w-1/3">  
        <p>
          I am a Full-Stack Developer. Currently starting my freelance business. 
        </p>   
        <p class="hidden xl:block">
          If you need someone like me, don't hesitate to contact me because it'll be a pleasure to start working with you.
        </p>
      </div>
    </div>
    <img src="/logo.png" class="hidden md:block w-64 lg:w-96 xl:w-1/3 p-16 drop-shadow-xl">
  </div>
</template>

<style scoped>
</style>
