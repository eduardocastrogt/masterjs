import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

//Componentes
import LastArticles from './components/LastArticles';
import MiComponente from './components/MiComponente';
import Blog from './components/Blog';
import Formulario from './components/Formulario';
import Pagina from './components/Pagina';

Vue.config.productionTip = false
Vue.use(VueRouter);

//Rutas
const routes = [
  {path: '/home', component: LastArticles},
  {path: '/ultimos-articulos', component: LastArticles},
  {path: '/mi-componente', component: MiComponente},
  {path: '/blog', component: Blog},
  {path: '/formulario', component: Formulario},
  {path: '/pagina', component: Pagina},
  {path: '/', component: LastArticles}
]

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
