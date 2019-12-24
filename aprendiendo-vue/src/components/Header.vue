<template>
  <header id="header">
    <div class="center">
      <!--LOGO-->
      <div id="logo">
        <img src="../assets/logo.png" class="app" alt="Logotipo" />
        <span id="brand">
          <strong>Curso</strong>Vue
        </span>
      </div>
      <!--MENU-->
      <nav id="menu">
        <ul>
          <li>
            <router-link to="/home" active-class="active">Inicio</router-link>
          </li>
          <li>
            <router-link to="/blog" active-class="active">Blog</router-link>
          </li>
          <li>
            <router-link to="/formulario" active-class="active">Formulario</router-link>
          </li>
          <li>
            <router-link :to="{name: 'pagina', params: {id: 'Soy el valor del parametro'}}" active-class="active">Pagina 1</router-link>
          </li>
          <li>
            <router-link to="/peliculas" active-class="active">Pagina 2</router-link>
          </li>
        </ul>
      </nav>

      <!--Limpiar flotados-->
      <div class="clearfix"></div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
</style>