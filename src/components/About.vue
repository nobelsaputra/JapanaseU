<!-- ABOUT TERM -->

<template>
  <section class="container mx-auto pt-72">
    <div class="flex flex-wrap md:flex-nowrap items-center md:justify-end">
      <div class="md:w-1/2 p-6">
        <h1 class="text-4xl font-bold text-gray-800 mb-2">About <span class="text-primary">JapaneseU</span></h1>
        <p class="text-lg text-gray-600 mb-6">If you like japan, you on the right side !</p>
        <buttonKu class="mx-2">More Details</buttonKu>
      </div>
      <div class="md:w-1/2 ml-6">
        <img src="" alt="Profile Picture" class="w-96 h-auto object-cover rounded-lg" />
      </div>
    </div>
  </section>
</template>

<script>
import buttonKu from './buttonKu.vue';
export default {
  name: 'About',
  components: {
    buttonKu,
  },
};
</script>
