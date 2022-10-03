import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './estilos.scss';
import Aplicacion from './Aplicacion.vue';

const aplicacion = createApp(Aplicacion);
const pinia = createPinia();
aplicacion.use(pinia);

aplicacion.mount('#aplicacion');
