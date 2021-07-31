<template>
  <div class="container">
    <h3 class="mt-2 mb-3 float-left text-primary">User List</h3>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Username</th>
          <th scope="col">Address</th>
          <th scope="col">Contact</th>
          <th scope="col">Age</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr class="m-5" v-for="item in userList" v-bind:key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.username }}</td>
          <td>{{ item.address }}</td>
          <td>{{ item.contact }}</td>
          <td>{{ item.Age }}</td>
          <td>
            <form>
              <button
                v-on:click.prevent="emitShowModal(user)"
                class="btn btn-sm btn-info mr-1"
              >
               Update
              </button>
              <button
                v-on:click="deleteUser(user._id)"
                type="submit"
                class="btn btn-sm btn-danger"
              >
               Delete
              </button>
            </form>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
import axios from "axios";

export default {
  name: "UserList",

  data() {
    return {
      userList: [],
    };
  },

  async mounted() {
    //Get data from API 
    axios.get("http://localhost:3000/userList").then((response) => {
      this.userList = response.data;
    });
  },
};
</script>

<style scoped>
.container {
  height: 79px;
}
.table-striped thead {
  color: black;
}

.table {
  background: ghostwhite;
}
</style>