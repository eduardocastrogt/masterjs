<template>
  <div id="app">
    <Header></Header>

    <router-view></router-view>

    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
//Importando los componentes
import Header from "./components/Header";
import FooterComponent from "./components/FooterComponent";

export default {
  name: "app",
  components: {
    Header,
    FooterComponent
  }
};
</script>

<style>
@import "./assets/css/styles.css";
</style>
