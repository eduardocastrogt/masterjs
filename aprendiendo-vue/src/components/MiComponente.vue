<template>
    <section id="content">
    <h2 class="subheader">{{title}}</h2>
    <h1>Este es mi componente</h1>
<hr>
    <h2>{{subtitulo}}</h2>
    </section>
</template>


<script>
export default {
  name: 'mi-componente',
  data() {
    return {
      title: 'Mi componente',
      subtitulo: "Soy el subtitulo de mi componente"
    };
  }
};
</script>