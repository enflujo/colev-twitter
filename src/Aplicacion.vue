<script setup>
import { onMounted } from 'vue';
import { usarCerebro } from './cerebro';
import Barras from './componentes/Barras.vue';
import LineaTiempo from './componentes/LineaTiempo.vue';

const cerebro = usarCerebro();

onMounted(() => {
  // cerebro.cargarCasos();
  cerebro.cargarTweets();
});
</script>

<template>
  <main>
    <!-- <Barras titulo="Barras" /> -->
    <LineaTiempo titulo="Tweets por hora" />
  </main>
</template>

<style lang="scss" scoped></style>
