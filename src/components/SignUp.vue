<template>
  <div>
    <HelloWorld />
    <div class="signup">
      <h1>Signup Form</h1>
      <input
        type="text"
        placeholder="Enter user name"
        v-model="signupForm.username"
      /><br /><br />
      <input
        type="password"
        placeholder="Enter password"
        v-model="signupForm.password"
      /><br /><br />
      <p>Hobiies</p>
      <input
        type="checkbox"
        value="travel"
        id="travel"
        v-model="signupForm.hobbies"
      />
      <label for="travel">travel</label>
      <br /><br />
      <input type="checkbox" value="IT" id="IT" v-model="signupForm.hobbies" />
      <label for="IT">IT</label>
      <br /><br />
      <input
        type="checkbox"
        value="sports"
        id="sports"
        v-model="signupForm.hobbies"
      />
      <label for="sports">Sports</label>
      <br /><br />
      <p>Gender</p>
      <input type="radio" value="male" id="male" v-model="signupForm.gender" />
      <label for="male">male</label>
      <br /><br />
      <input
        type="radio"
        value="female"
        id="female"
        v-model="signupForm.gender"
      />
      <label for="female">Female</label>
      <br /><br />
      <button v-on:click="signupUser">Signup</button>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./HelloWorld.vue";
export default {
  components: { HelloWorld },
  name: "SignUp",

  data() {
    return {
      signupForm: {
        username: null,
        password: null,
        hobbies: [],
        gender: null,
      },
    };
  },

  methods: {
    signupUser() {
      console.warn("HI", this.signupForm);
    },
  },
};
</script>

<style scoped>
.signup {
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