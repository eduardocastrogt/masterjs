<template>
  <div>
    <div class="center">
      <section id="content">
        <h2 class="subheader">Peliculas</h2>

        <div class="favorita" v-if="favorita">
          <h2 class="subheader">{{favorita.title}}</h2>
        </div>
        <!--Listado de articulos-->
        <div id="articles">
          <!-- -->
          <!--AÑADIR ARTICULOS VIA JS-->
          <div v-for="pelicula in peliculas" v-bind:key="pelicula.title">
            <Pelicula :pelicula="pelicula"
            @favorita="llegoPelicula"
            ></Pelicula>
          </div>
        </div>
      </section>
      <Sidebar></Sidebar>
    </div>
  </div>
</template>

<script>
import Pelicula from "./Pelicula";
import Sidebar from "./Sidebar";
export default {
  name: "Peliculas",
  components: {
    Pelicula,
    Sidebar
  },
  methods:{
    llegoPelicula(favorita){
      this.favorita = favorita;
    }
  },
  data() {
    return {
      favorita: null,
      peliculas: [
        {
          title: "1 El señor de los aniños",
          year: 2004,
          image:
            "https://as01.epimg.net/tikitakas/imagenes/2019/02/18/portada/1550473885_404803_1550474060_noticia_normal.jpg"
        },
        {
          title: "2 Pokemon",
          year: 1991,
          image:
            "https://www.geek.com/wp-content/uploads/2016/07/Pokemon-monsters-625x350.jpg"
        },
        {
          title: "3 Bomboobble",
          year: 2018,
          image:
            "https://upload.wikimedia.org/wikipedia/commons/4/4d/Bumblebee_%288023382295%29.jpg"
        },
        {
          title: "4 El señor de los aniños",
          year: 2004,
          image:
            "https://as01.epimg.net/tikitakas/imagenes/2019/02/18/portada/1550473885_404803_1550474060_noticia_normal.jpg"
        },
        {
          title: "5 Pokemon",
          year: 1991,
          image:
            "https://www.geek.com/wp-content/uploads/2016/07/Pokemon-monsters-625x350.jpg"
        },
        {
          title: "6 Bomboobble",
          year: 2018,
          image:
            "https://upload.wikimedia.org/wikipedia/commons/4/4d/Bumblebee_%288023382295%29.jpg"
        }
      ]
    };
  }
};
</script>