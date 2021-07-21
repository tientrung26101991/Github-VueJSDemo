<template>
  <!-- <div> -->
    <div id="apps">
      <div class="vue-tempalte">
        <form>
          <h3>Sign Up</h3>

          <div class="form-group">
            <label>Full Name</label>
            <input
              type="text"
              class="form-control form-control-lg"
              v-model="fullname"
            />
          </div>

          <div class="form-group">
            <label>Email address</label>
            <input
              type="email"
              class="form-control form-control-lg"
              v-model="email"
            />
          </div>

          <div class="form-group">
            <label>Password</label>
            <input
              type="password"
              class="form-control form-control-lg"
              v-model="pass"
            />
          </div>

          <button
            type="submit"
            class="btn btn-dark btn-lg btn-block"
            v-on:click="signup"
          >
            Sign Up
          </button>

          <p class="forgot-password text-right">
            Already registered
            <router-link :to="{ name: 'login' }">sign in?</router-link>
          </p>
        </form>
      </div>
    </div>
  <!-- </div> -->
</template>

<script>


export default {
  components: {  },

  name: "SignUp",

  data() {
    return {
      fullname: "",
      email: "",
      pass: "",
    };
  },

  methods: {
    signup() {
      this.$router.push({name:'home'})
      console.warn(this.fullname + this.email + this.pass);
    },
  },
};
</script>

<style scoped>
#apps {
  float: right;
  background-color: antiquewhite;
  margin-right: 480px;
  margin-top: 69px;
  width: 1000px;
  height: 600px;
  background-image: url(https://wallpaperaccess.com/full/109531.jpg);
  /* background-blend-mode:luminosity; */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.vue-tempalte label {
  margin-right: 690px;
  margin-top: 20px;
}

.vue-tempalte button {
  margin-top: 30px;
  width: 260px;
  background: skyblue;
}
</style>