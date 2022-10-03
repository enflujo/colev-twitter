import { defineStore } from 'pinia';

export const usarCerebro = defineStore('cerebro', {
  state: () => ({
    casos: [],
    tweets: [],
    cargando: false,
  }),

  actions: {
    async cargarCasos() {
      if (this.casos.length) {
        return;
      } else {
        this.cargando = true;
        const { casos } = await fetch('http://localhost:8080').then((respuesta) => respuesta.json());
        this.casos = casos;
        this.cargando = false;
      }
    },

    async cargarTweets() {
      if (this.tweets.length) {
        return;
      } else {
        this.cargando = true;
        const respuesta = await fetch('http://localhost:8080/tweets').then((respuesta) => respuesta.json());
        this.tweets = respuesta;
        console.log(respuesta);
        this.cargando = false;
      }
    },
  },
});
