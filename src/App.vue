<template>
  <Navbar />
</template>

<script>
import { ref } from 'vue';
import CustomButton from './components/Button.vue';
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    CustomButton,
    Navbar,
  },
  setup() {
    return {};
  },
};
</script>

<style scoped></style>
