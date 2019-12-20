<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Hola mundo</h2>
    <mi-componente></mi-componente>
    <mi-componente></mi-componente>
    <mi-componente></mi-componente>
    <mi-componente></mi-componente>
  </div>
</template>

<script>
//Importndo componentes
import MiComponente from "../components/MiComponente";

export default {
  name: "HelloWorld",
  components: {
    MiComponente
  },
  props: {
    msg: String
  },
  data() {
    return {
      texto: "Hola mundo desde mi componente :D"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
