<template>
  <Navbar />
  <Home />
</template>

<script>
import { ref } from 'vue';
import Navbar from './components/Navbar.vue';
import Home from './components/Home.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Home,
  },
  setup() {
    return {};
  },
};
</script>

<style scoped></style>
