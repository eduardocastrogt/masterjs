<template>
  <section id="content">
    <h2 class="subheader">{{title}}</h2>
    <h1>Este es mi componente</h1>
    <hr />
    <h2>{{subtitulo}}</h2>

    <h2>Reactividad</h2>
    <input type="text" v-model="nombre" />

    {{nombre}}
    <h2>Directivas condicionales</h2>
    <input type="number" v-model="edad" />

    Mi edad es: {{edad}}
    <strong style="color:red;" v-if="edad > 20">Hola</strong>
  </section>
</template>


<script>
export default {
  name: "mi-componente",
  data() {
    return {
      title: "Mi componente",
      subtitulo: "Soy el subtitulo de mi componente",
      nombre: "",
      edad: 18
    };
  }
};
</script>