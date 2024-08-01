<template>
  <div>
    <buttonKu @click="toggleText">
      <slot>{{ buttonText }}</slot></buttonKu
    >
    <p v-if="isVisible" class="text-justify mt-4 mb-4">
      Japan (日本, Nippon or Nihon) is an island country in East Asia, located at the western edge of the Pacific Ocean. It consists of 6,852 islands, with the four largest being Honshu, Hokkaido, Kyushu,
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
