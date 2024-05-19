<template>
  <section class="container mx-auto pt-72">
    <div class="flex flex-wrap md:flex-nowrap items-center md:justify-end">
      <div class="md:w-1/2 p-6">
        <h1 class="text-4xl font-bold text-gray-800 mb-2">Welcome to <span class="text-primary">JapaneseU</span></h1>
        <p class="text-lg text-gray-600 mb-6">If you like japan, you on the right side !</p>
        <buttonKu>About JapanaseU</buttonKu><buttonKu class="mx-2">More Details</buttonKu>
      </div>
      <div class="md:w-1/2 ml-6">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png" alt="Profile Picture" class="w-96 h-auto object-cover rounded-lg" />
      </div>
    </div>
  </section>
</template>

<script>
import buttonKu from './buttonKu.vue';
export default {
  name: 'home',
  components: {
    buttonKu,
  },
};
</script>
