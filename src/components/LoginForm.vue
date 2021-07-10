<template>
  <div id="form">
    <h1>Login Form</h1><br>
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
          v-on:input="u_names = $event.target.value"
          placeholder="enter user name:"
        >
        </b-form-input>
      </b-form-group>
      <br><br>

        <!-- label password -->
       <b-form-group id="input-group-2" label="Password:" label-for="input-2">
      
      <!-- input password -->
      <b-form-input
        type="password"
        v-on:input="passwords = $event.target.value"
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
    login() {
      alert("Name" + this.u_names + "Pw:" + this.passwords);

      if (this.u_names && this.passwords) {
        alert(this.u_names + "," + this.passwords);
      }
      this.error = [];
      if (!this.u_names) {
        alert("name is required");
      }
      if (!this.passwords) {
        alert("password is required");
      }
      alert("error!!!!!");
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