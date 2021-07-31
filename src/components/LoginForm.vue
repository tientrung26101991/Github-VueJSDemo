<template>
  <div id="form">
        <!-- Error Area -->   
      <p v-if="error.length" class="error">
        <b>Please correct the following errors</b>
        <ul>
            <li v-for="e in error" v-bind:key="e.id">
                {{e}}
            </li>
        </ul>
      </p>

    <!-- Logn Form Area -->
    <h1>Login Form</h1>
    <br />
    <b-form @submit="login">
      
      <!-- User name area -->
      <b-input-group>
        <b-input-group-prepend>
          <span class="input-group-text"><i class="fa fa-user fa-lg"></i></span>
        </b-input-group-prepend>
        <b-form-input class="LoginInput" size="lg" placeholder="Username" v-model="u_names">
        </b-form-input>
      </b-input-group>
      <br />

      <!-- Password area-->
     <b-input-group>
        <b-input-group-prepend>
          <span class="input-group-text"><i class="fa fa-lock fa-lg"></i></span>
        </b-input-group-prepend>
          <b-form-input class="LoginInput" size="lg" type="password" placeholder="Password" v-model="passwords">
          </b-form-input>
      </b-input-group>

      <br>
      <b-button variant="primary" type="submit">Login</b-button>
    </b-form>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

export default {
  name: "LoginForm",

  data() {
    return {
      error: [],
      u_names: null,
      passwords: null,
    };
  },

  methods: {
    login(e) {
      //  console.log("Name" + this.u_names  + "Password" + this.passwords);

      //

      Vue.axios.get("https://reqres.in/api/products/3").then((resp) => {
        console.warn(resp.data.data);
      });
      this.error = [];
      if (!this.u_names) {
        this.error.push("Name is required !!!!");
      }
      if (!this.passwords) {
        this.error.push("password is required !!!!");
      }

      console.warn("errors", this.error);
      e.preventDefault();
    },
  },
};
</script>

<style>
#form {
  background-color: floralwhite;
  /* margin-top: 30px; */
  padding: 100px;
  height: 500px;
  width: 800px;
  margin-left: 570px;
  margin-top: 100px;
}

h1 {
  color: blue;
}

.error {
  color: tomato;
  border: 1px solid yellowgreen;
}

button {
  width: 100px;
  background-color: skyblue;
}

.input-group-text {
  height: 55px;
}
</style>