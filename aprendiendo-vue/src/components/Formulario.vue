<template>
  <div>
    <div class="center">
      <section id="content">
        <h2 class="subheader">Formulario</h2>

        <form class="mid-form" @submit.prevent="mostrarUsuario()">
          <div class="form-group">
            <label for="nombres">Nombres</label>
            <input type="text" name="nombre" v-model="user.nombre" />
            <div v-if="submitted && !$v.user.nombre.required">Este campo es requerido</div>
            <div v-if="submitted && !$v.user.nombre.minLength">La longitud no es la optima</div>
          </div>
          <div class="form-group">
            <label for="apellidos">Apellidos</label>
            <input type="text" name="nombre" v-model="user.apellidos" />
            <div v-if="submitted && !$v.user.apellidos.required">Este campo es requerido</div>
            <div v-if="submitted && !$v.user.apellidos.minLength">La longitud no es la optima</div>
          </div>
          <div class="form-group">
            <label for="nombre">Descripción</label>
            <textarea name="descripcion" v-model="user.bio"></textarea>
            <div v-if="submitted && !$v.user.bio.required">Este campo es requerido</div>
            <div v-if="submitted && !$v.user.bio.minLength">La longitud no es la optima</div>
          </div>
          <div class="form-group radiobutons">
            <input type="radio" name="genero" value="hombre" checked v-model="user.genero" />Hombre
            <input type="radio" name="genero" value="mujer" v-model="user.genero" />Mujer
            <input type="radio" name="genero" value="otro" v-model="user.genero" />Otro
          </div>

          <div class="clearfix"></div>
          <input type="submit" value="Enviar" class="btn btn-success" />
        </form>

        <div class="datos">
          <h3>Datos</h3>
          {{user.nombre}}
          {{user.apellidos}}
          {{user.bio}}
          {{user.genero}}
        </div>
      </section>
      <Sidebar></Sidebar>
    </div>
  </div>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";
import Sidebar from "./Sidebar";
export default {
  name: "Formulario",
  components: {
    Sidebar
  },
  validations: {
    user: {
      nombre: {
        required,
        minLength: minLength(2)
      },
      apellidos: {
        required,
        minLength: minLength(2)
      },
      bio: {
        required,
        minLength: minLength(10)
      }
    }
  },
  data() {
    return {
      submitted: false,
      user: {
        nombre: "",
        apellidos: "",
        bio: "",
        genero: ""
      }
    };
  },
  methods: {
    mostrarUsuario() {
      this.submitted = true;

      this.$v.$touch();
      if (this.$v.$invalid) {
        return false;
      }

      alert("Validacion pasada");
    }
  }
};  
</script>