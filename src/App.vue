<template>
  <div>
    <h1>Counter App</h1>
    <p>Jumlah: {{ count }}</p>
    <CustomButton @click="tambah" />
    <CustomButton @click="kurang" />
  </div>
</template>

<script>
import { ref } from 'vue';
import CustomButton from './components/Button.vue'; // Impor komponen CustomButton

export default {
  name: 'App',
  components: {
    CustomButton, // Daftarkan komponen CustomButton
  },
  setup() {
    const count = ref(0);

    const tambah = () => {
      count.value++;
    };

    const kurang = () => {
      count.value--;
    };

    return {
      count,
      tambah,
      kurang,
    };
  },
};
</script>

<style scoped></style>
