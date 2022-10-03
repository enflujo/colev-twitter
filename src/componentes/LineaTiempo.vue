<script setup>
import { computed } from 'vue';
import { usarCerebro } from '../cerebro';
import { convertirEscala } from '../utilidades/ayudas';
import LineaDatos from './LineaDatos.vue';
const cerebro = usarCerebro();
const dimsVis = {
  marcoIz: 30,
  alto: 300,
  ancho: window.innerWidth / 1.3,
  base: 0,
  altoVis: 280,
  margenArriba: 0,
};
dimsVis.base = dimsVis.alto - 20;
const pasoX = computed(() => (dimsVis.ancho / 7577) | 0);
const posicionX = (valor) => valor * (dimsVis.ancho / 7577) + 30;
const posicionY = (valor) => convertirEscala(valor, 0, 100, dimsVis.base, dimsVis.margenArriba);

defineProps({
  titulo: String,
});
</script>

<template>
  {{ titulo }}
  <svg :width="dimsVis.ancho" :height="dimsVis.alto">
    <line
      class="lineaMarco"
      :x1="dimsVis.marcoIz"
      y1="0"
      :x2="dimsVis.marcoIz"
      :y2="dimsVis.alto"
      shape-rendering="crispEdges"
    />

    <line
      class="lineaMarco"
      :x1="dimsVis.marcoIz"
      :y1="dimsVis.base"
      :x2="dimsVis.ancho"
      :y2="dimsVis.base"
      shape-rendering="crispEdges"
    />

    <LineaDatos
      v-if="cerebro.tweets.length"
      :datos="cerebro.tweets"
      :posicionX="posicionX"
      :posicionY="posicionY"
      :alturaVis="dimsVis.altoVis"
      :ancho="dimsVis.ancho"
      color="#3effd0"
    />
  </svg>
</template>

<style lang="scss" scoped>
@import '@/assets/constantes.scss';
.lineaMarco {
  stroke: $negro;
  stroke-width: 3;
}
</style>
