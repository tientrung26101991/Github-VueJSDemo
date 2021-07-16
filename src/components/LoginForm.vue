<template>
  <div id="form">
        <!-- Error Area -->   
      <p v-if="error.length">
        <b>Please correct the following errors</b>
        <ul>
            <li v-for="e in error" v-bind:key="e.id">
                {{e}}
            </li>
        </ul>
      </p>

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
      <b-form-group 
        id="input-group-2" 
        label="Password:" 
        label-for="input-2"
        description="Please input password !!!"
      >
        <!-- input password -->
        <b-form-input
          type="password"
          v-model="passwords"
          placeholder="enter user password:"
        ></b-form-input>
      </b-form-group>

      <br>
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
        alert("Successfull");
      }
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
  background-color:floralwhite;
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