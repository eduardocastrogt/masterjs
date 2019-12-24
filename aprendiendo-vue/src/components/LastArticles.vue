<template>
  <div>
    <Slider home="true"></Slider>
    <div class="center">
      <section id="content">
        <h2 class="subheader">Últimos artículos</h2>
        <!--Listado de articulos-->
        <div id="articles">
          <article class="article-item" id="article-template">
            <div class="img-wrap">
              <img
                src="https://www.dzoom.org.es/wp-content/uploads/2017/07/seebensee-2384369-810x540.jpg"
                alt="Paisaje"
                class="image-wrap"
              />
            </div>
            <h2>Articulo de prueba</h2>
            <span class="date">Hace 5 minutos</span>
            <a href="#">Leer más</a>

            <div class="clearfix"></div>
          </article>
          <!--AÑADIR ARTICULOS VIA JS-->
        </div>
      </section>
      <Sidebar></Sidebar>
    </div>
  </div>
</template>

<script>
import Slider from "./Slider";
import Sidebar from "./Sidebar";
export default {
  name: "LastArticles",
  components: {
    Slider,
    Sidebar
  }
};
</script>