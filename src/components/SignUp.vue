<template>
  <div>
    <HelloWorld />

    <div id="app">
      <div class="vue-tempalte">
        <form>
          <h3>Sign Up</h3>

          <div class="form-group">
            <label>Full Name</label>
            <input type="text" class="form-control form-control-lg" />
          </div>

          <div class="form-group">
            <label>Email address</label>
            <input type="email" class="form-control form-control-lg" />
          </div>

          <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control form-control-lg" />
          </div>

          <button type="submit" class="btn btn-dark btn-lg btn-block">
            Sign Up
          </button>

          <p class="forgot-password text-right">
            Already registered
            <router-link :to="{ name: 'login' }">sign in?</router-link>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./HelloWorld.vue";
export default {
  components: { HelloWorld },
  name: "SignUp",
  data() {
    return {};
  },
};
</script>

<style scoped>
#app {
  float: right;
  background-color: antiquewhite;
  margin-right: 480px;
  margin-top: 50px;
  width: 970px;
  height: 530px;
  background-image: url(https://wallpaperaccess.com/full/109531.jpg);
  /* background-blend-mode:luminosity; */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>