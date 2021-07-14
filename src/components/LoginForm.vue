<template>
  <div id="form">
    <!-- Error Area -->
    <div>
      <p v-if="error.length">
        <b>Please correct the following errors</b>
        <ul>
            
        </ul>
      </p>
    </div>

    <h1>Login Form</h1>
    <br />
    <b-form @submit="login">
      <!-- label:username -->
      <b-form-group
        id="input-group-1"
        label="User Name:"
        label-for="input-1"
        description="Please input username !!!"
      >
        <!-- Input username -->
        <b-form-input
          id="input-1"
          type="text"
          v-model="u_names"
          placeholder="enter user name:"
        >
        </b-form-input>
      </b-form-group>
      <br /><br />

      <!-- label password -->
      <b-form-group id="input-group-2" label="Password:" label-for="input-2">
        <!-- input password -->
        <b-form-input
          type="password"
          v-model="passwords"
          placeholder="enter user password:"
        ></b-form-input>
        <br /><br />
      </b-form-group>

      <b-button variant="primary" type="submit">Login</b-button>
    </b-form>
  </div>
</template>

<script>
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

      if (this.u_names && this.passwords) {
        alert("Successfull")
      }
      this.error = [];
      if (!this.u_names) {
        alert("Name is required !!!!");
      }
      if (!this.passwords) {
        alert("password is required !!!!");
      }

      console.warn("errors", this.error);
      e.preventdefault();
    },
  },
};
</script>

<style>
#form {
  background-color: #e2e3e5;
  margin-top: 0px;
  padding: 100px;
  height: 780px;
  width: 800px;
  margin: auto;
}

h1 {
  text-shadow: 2px 2px 5px red;
}
</style>