<template>
  <div id="micomponente">
    <h1>Este es mi componente</h1>
<hr>
    <h2>{{subtitulo}}</h2>
  </div>
</template>


<script>
export default {
  name: 'mi-componente',
  data() {
    return {
      subtitulo: "Soy el subtitulo de mi componente"
    };
  }
};
</script>