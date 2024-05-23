<template>
  <section class="container mx-auto pt-36">
    <div class="flex flex-wrap md:flex-nowrap items-center">
      <div class="w-full md:w-1/2 p-6">
        <h1 class="lg:text-4xl text-base font-bold text-gray-800 mb-2">Welcome to <span class="text-primary">JapaneseU</span></h1>
        <p class="text-md text-gray-600 mb-6">If you like japan, you on the right side !</p>
        <dom></dom>
      </div>
      <div class="w-full md:w-1/2 p-6 flex justify-center">
        <img src="../../assets/image-1.jpg" alt="Profile Picture" class="w-full md:w-auto h-auto object-cover rounded-lg shadow-lg" />
      </div>
    </div>
  </section>
</template>

<script>
import buttonKu from '../button/buttonKu.vue';
import dom from '../dom/dom.vue';

export default {
  name: 'Home',
  components: {
    buttonKu,
    dom,
  },
};
</script>
