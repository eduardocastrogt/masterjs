<template>
  <section id="content">
    <h2 class="subheader">Pagina</h2>
    <h3>{{id_desde_url}}</h3>
    <button @click="actualizarNombre()">Actualizar nombres</button>
    <p>Este es el nombre: {{nombre}}</p>
    <button @click="redirigirBlog()">Redirigir</button>
  </section>
</template>

<script>
export default {
  name: "Pagina",
  created() {},
  mounted() {
    this.id_desde_url = this.$route.params.id;
  },
  updated() {},
  destroyed() {},
  data() {
    return {
      id_desde_url: null,
      nombre: "Eduardo Castro"
    };
  },
  methods: {
    actualizarNombre() {
      this.nombre = "Kimberly y Eduardo :D";
    },
    redirigirBlog() {
      this.$router.push('/blog');
    }
  }
};
</script>