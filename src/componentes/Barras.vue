<script setup>
import { ref } from 'vue';
import { usarCerebro } from '../cerebro';
import { convertirEscala } from '../utilidades/ayudas';

defineProps({
  titulo: String,
});

const cerebro = usarCerebro();
</script>

<template>
  <h2>{{ titulo }}</h2>

  <svg v-if="cerebro.casos.length">
    <g v-for="(dia, i) in cerebro.casos" :key="`grupo${i}`">
      <rect class="muertos" width="5" :height="convertirEscala(dia[1], 0, 1000, 0, 1000)" :x="i * 15" y="0"></rect>
      <rect class="casos" width="5" :height="convertirEscala(dia[2], 0, 1000, 0, 1000)" :x="i * 15 + 5" y="0"></rect>
    </g>
  </svg>
</template>

<style lang="scss" scoped>
.muertos {
  fill: red;
}

.casos {
  fill: blue;
}
</style>
