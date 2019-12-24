<template>
  <div>
    <Slider texto="Este es mi slider"></Slider>
    <div class="center">
      <section id="content">
        <h2 class="subheader">Blog</h2>
      </section>
      <Sidebar></Sidebar>
    </div>
  </div>
</template>

<script>
import Slider from './Slider';
import Sidebar from './Sidebar';
export default {
  name: "Blog",
  components: {
    Slider,
    Sidebar
  }
};
</script>