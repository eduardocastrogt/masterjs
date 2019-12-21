<template>
  <div id="app">
    <Header></Header>
    <Slider></Slider>
    <div class="center">
      
      <router-view></router-view>
      <Sidebar></Sidebar>
    </div>

    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
//Importando los componentes
import Header from "./components/Header";
import Slider from "./components/Slider";
import Sidebar from "./components/Sidebar";
import FooterComponent from './components/FooterComponent'

export default {
  name: "app",
  components: {
    Header,
    Slider,
    Sidebar,
    FooterComponent
  }
};
</script>

<style>


@import "./assets/css/styles.css";
</style>
