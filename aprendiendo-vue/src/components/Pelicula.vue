<template>

    <article class="article-item">
      <div class="img-wrap">
        <img :src="pelicula.image" :alt="pelicula.title" :title="pelicula.title" class="image-wrap" />
      </div>
      <h2>{{pelicula.title}}</h2>
      <span
        class="date"
        :class="{
            yeargreen: pelicula.year >= 2015,
            yearred: pelicula.year < 2015
        }"
      >{{pelicula.year}}</span>
      <a href="#">Leer más</a>

      <input type="button" value="Marcar como favoita" @click="pasarFavpritaAlPadre(pelicula)"/>

      <div class="clearfix"></div>
    </article>
</template>

<script>
export default {
  name: "Pelicula",
  props: ['pelicula'],
  methods: {
    pasarFavpritaAlPadre(pelicula){
      this.$emit('favorita', pelicula);
    }
  }
};
</script>

<style>
</style>