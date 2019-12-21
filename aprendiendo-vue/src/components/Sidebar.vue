<template>
  <div>
    <aside id="sidebar">
      <div id="nav-blog" class="sidebar-item">
        <h3>Puedes hacer esto</h3>
        <a href="#" class="btn btn-success">Crear artículo</a>
      </div>
      <div id="nav-blog" class="sidebar-item">
        <h3>Buscador</h3>
        <p>Encuentra el artículo que buscas</p>
        <form>
          <input type="text" name="search" />
          <input type="submit" class="btn" name="submit" value="buscar" />
        </form>
      </div>
    </aside>

    <div class="clearfix"></div>
  </div>
</template>

<script>
export default {
  name: "Sidebar"
};
</script>