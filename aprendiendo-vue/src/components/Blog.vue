<template>
  <div>
    <Slider texto="Este es mi slider"></Slider>
    <div class="center">
      <section id="content">
        <h2 class="subheader">Blog</h2>
        <div v-for="article in articles" :key="article.id">
          {{article.title}}
        </div>
      </section>
      <Sidebar></Sidebar>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Slider from './Slider';
import Sidebar from './Sidebar';
export default {
  name: "Blog",
  components: {
    Slider,
    Sidebar
  },
  data(){
    return {
      articles: []
    }
  },
  mounted(){
    this.getArticles();
  },
  methods: {
    getArticles(){
      axios.get('http://localhost:2628/api/articles')
        .then(res => {
          if(res.data.status == 'success'){
            this.articles = res.data.articles;
            alert('todo ok');
          }
        })
    }
  }
};
</script>