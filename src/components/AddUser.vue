<template>
  <div>
    <HelloWorld />
    <div class="users">
      <h1>Add Users Page</h1>
      <form class="addUser">
        <input type="text" name="name" placeholder="Enter Name:" />
        <input type="text" name="address" placeholder="Enter address:" />
        <input type="text" name="contact" placeholder="Enter contact:" />
        <input type="text" name="Age" placeholder="Enter Age:" />
        <input type="text" name="Company" placeholder="Enter Company:" />
        <button type="button">Add new User</button>
      </form>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./HelloWorld.vue";

export default {
  name: "AddUser",

  data() {
    return {};
  },

  components: {
    HelloWorld,
  },
};
</script>

<style scoped>
.users {
  background-color: cadetblue;
  height: 85px;
  /* width: 200px; */
  padding: 30px;
  margin: 20px;
  border: 1px saddlebrown chartreuse;
}

.addUser input {
  width: 650px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-top: 30px;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid chartreuse;
}

.addUser button {
  width: 320px;
  height: 40px;
  border: 1px solid chartreuse;
  background: chartreuse;
}
</style>