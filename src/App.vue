<template>
  <Navbar />
  <Home />
  <About />
</template>

<script>
import { ref } from 'vue';
import Navbar from './components/Navbar.vue';
import Home from './components/Home.vue';
import About from './components/About.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Home,
    About,
  },
  setup() {
    return {};
  },
};
</script>

<style scoped></style>
