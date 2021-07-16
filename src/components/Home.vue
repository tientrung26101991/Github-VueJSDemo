<template>
  <div class="home">
    <!-- <Product /> -->
    <HelloWorld />
    <LoginForm />
    <!-- <Users />
        <br>
        <br> -->
    <h1 class="design">Design by:{{ name }}</h1>
    <input type="text" v-model="name" />
    <!-- <button v-on:click="click">Click me</button> -->
    <!-- <SignUp />  -->
  </div>
</template>

<script>
// import Product from './Product.vue'
// import Users from './Users.vue'
import LoginForm from "./LoginForm.vue";
import HelloWorld from "./HelloWorld.vue";
// import SignUp from './SignUp.vue'
// import BootStrap from './BootStrap.vue'
export default {
  name: "Home",

  data() {
    return {
      name: null,
    };
  },

  components: {
    // Product,
    // Users,
    LoginForm,
    HelloWorld,
    // SignUp,
    // BootStrap
  },

  methods: {
    click() {
      this.name = name;
    },
  },
};
</script>

<style>
.home {
  background-color: darkgrey;
  height: 840px;
  background-image: url(https://wallpaperaccess.com/full/109531.jpg);
  /* background-blend-mode:luminosity; */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.design {
  background-color:lightgray;
}
</style>
