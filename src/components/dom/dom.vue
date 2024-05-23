<template>
  <div>
    <buttonKu @click="toggleText">
      <slot>{{ buttonText }}</slot></buttonKu
    >
    <p v-if="isVisible" class="text-justify mt-4 mb-4">
      Japan is a country that seamlessly blends the traditional with the modern, offering visitors a unique and unforgettable experience. and the best of the best country, with good people
    </p>
    <buttonKu v-if="isVisible" class="text-xl px-3 me-2"><i class="fa-brands fa-instagram"></i></buttonKu>
    <buttonKu v-if="isVisible" class="text-xl px-3 me-2"><i class="fa-brands fa-facebook"></i></buttonKu>
    <buttonKu v-if="isVisible" class="text-xl px-3"><i class="fa-brands fa-pinterest"></i></buttonKu>
  </div>
</template>

<script>
import buttonKu from '../button/buttonKu.vue';
export default {
  components: {
    buttonKu,
  },
  data() {
    return {
      isVisible: false, // Mulai dengan teks yang terlihat
    };
  },
  computed: {
    buttonText() {
      return this.isVisible ? 'Less Information' : 'More Information';
    },
  },
  methods: {
    toggleText() {
      this.isVisible = !this.isVisible; // Mengubah kebalikan dari keadaan saat ini
    },
  },
};
</script>
