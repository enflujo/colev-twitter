<script setup>
import { convertirEscala } from '../utilidades/ayudas';

const props = defineProps({
  posicionX: Function,
  posicionY: Function,
  datos: Array,
  ancho: Number,
  alturaVis: Number,
  color: String,
});

const radioPuntos = 0.5;

function construirLinea() {
  let linea = '';
  props.datos.forEach((instancia, i) => {
    const x = props.posicionX(i);
    // POR HACER! acá toca cambiar los valores cuando no es porcentaje
    const y = props.posicionY(instancia.total);
    // console.log(x, y);
    if (i === 0) {
      linea += `M${x} ${y}`;
    } else {
      linea += ` L${x} ${y}`;
    }
  });
  return linea;
}
</script>

<template>
  <g :stroke="color" :fill="color">
    <path :d="construirLinea()" class="lineaDatos" fill="none" shape-rendering="geometricPrecision" />

    <circle
      v-for="(instancia, i) in datos"
      :key="`puntoNal-${i}`"
      class="puntoDatos"
      :cx="posicionX(i)"
      :cy="posicionY(instancia.total)"
      :r="radioPuntos"
      :fill="color"
      @mouseenter="(e) => $emit('eventoEncima', instancia._id.fecha, e)"
      @mouseleave="$emit('eventoFuera')"
    />
  </g>
</template>

<style lang="scss" scoped>
@import '@/assets/constantes.scss';
.lineaDatos {
  fill: none;
  stroke-width: 0.3;
  transition: all 0.1s ease-in-out;
}
.puntoDatos {
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  &:hover {
    fill: $verde;
    filter: drop-shadow(0 0 2px $verde);
  }
}
</style>
