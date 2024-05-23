<template>
  <Navbar />
  <Home />
  <About />
</template>

<script>
import { ref } from 'vue';
import Navbar from './components/content/Navbar.vue';
import Home from './components/content/Home.vue';
import About from './components/content/About.vue';
import dom from './components/dom/dom.vue';


export default {
  name: 'App',
  components: {
    Navbar,
    Home,
    About,
    dom,

  },
  setup() {
    return {};
  },
};
</script>

<style scoped></style>
