<!-- components 1 -->
<template>
  <nav class="shadow-lg p-4">
    <div class="container mx-auto flex justify-between items-center">
      <a href="#" class="text-primary text-lg font-semibold">JapanaseU</a>
      <div class="hidden md:flex flex-grow justify-center space-x-4">
        <!-- Mengubah -->
        <a href="#" class="text-black hover:text-cyan-600 duration-500 px-3 py-2">Home</a>
        <a href="#" class="text-black hover:text-cyan-600 duration-500 px-3 py-2">About</a>
        <a href="#" class="text-black hover:text-cyan-600 duration-500 px-3 py-2">Services</a>
        <a href="#" class="text-black hover:text-cyan-600 duration-500 px-3 py-2">Contact</a>
      </div>
      <div class="md:hidden">
        <button @click="toggleMenu" class="text-black focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </div>
    <div v-show="isMenuOpen" class="md:hidden">
      <a href="#" class="block text-black pt-10 pb-3 duration-500 hover:border-b-2 hover:border-black w-20">Home</a>
      <a href="#" class="block text-black py-3 duration-500 hover:border-b-2 hover:border-black w-20">About</a>
      <a href="#" class="block text-black py-3 duration-500 hover:border-b-2 hover:border-black w-20">Services</a>
      <a href="#" class="block text-black py-3 duration-500 hover:border-b-2 hover:border-black w-20">Contact</a>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped>
/* Tidak ada gaya yang perlu ditambahkan atau diubah untuk menyatukan teks di tengah */
</style>
