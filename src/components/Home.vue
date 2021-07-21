<template>
  <div class="home">
    <LoginForm />
    <!-- <h1 class="design">Design by:{{ name }}</h1>
    <input type="text" v-model="name" /> -->
  </div>
</template>

<script>

import LoginForm from "./LoginForm.vue";

export default {
  name: "Home",

  data() {
    return {
      name: null,
    };
  },

  components: {
    LoginForm
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
  height: 700px;
  background-image: url(https://wallpaperaccess.com/full/109531.jpg);
  /* background-blend-mode:luminosity; */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-bottom:-500px;
}

</style>
