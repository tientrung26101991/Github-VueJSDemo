<template>
  <div class="container">
    <h3 class="mt-2 mb-3 float-left text-primary">User List</h3>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Username</th>
          <th scope="col">Address</th>
          <th scope="col">Contact</th>
          <th scope="col">Age</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr class="m-5">
          <td>Nguyen Tien Trung</td>
          <td>東京都葛飾区青砥</td>
          <td>080-5956-8989</td>
          <td>29</td>

          <td>
            <form>
              <button
                v-on:click.prevent="emitShowModal(user)"
                class="btn btn-sm btn-info mr-1"
              >
                Editar
              </button>
              <button
                v-on:click="deleteUser(user._id)"
                type="submit"
                class="btn btn-sm btn-danger"
              >
                Deletar
              </button>
            </form>
          </td>
        </tr>
        <!-- Fim "v-for" -->
        <tr class="m-5">
          <td>Nguyen Tien Trung</td>
          <td>東京都葛飾区青砥</td>
          <td>080-5956-8989</td>
          <td>29</td>

          <td>
            <form>
              <button
                v-on:click.prevent="emitShowModal(user)"
                class="btn btn-sm btn-info mr-1"
              >
                Editar
              </button>
              <button
                v-on:click="deleteUser(user._id)"
                type="submit"
                class="btn btn-sm btn-danger"
              >
                Deletar
              </button>
            </form>
          </td>
        </tr>

        <tr class="m-5">
          <td>Nguyen Tien Trung</td>
          <td>東京都葛飾区青砥</td>
          <td>080-5956-8989</td>
          <td>29</td>

          <td>
            <form>
              <button
                v-on:click.prevent="emitShowModal(user)"
                class="btn btn-sm btn-info mr-1"
              >
                Editar
              </button>
              <button
                v-on:click="deleteUser(user._id)"
                type="submit"
                class="btn btn-sm btn-danger"
              >
                Deletar
              </button>
            </form>
          </td>
        </tr>

        <tr class="m-5">
          <td>Nguyen Tien Trung</td>
          <td>東京都葛飾区青砥</td>
          <td>080-5956-8989</td>
          <td>29</td>

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

        <tr class="m-5">
          <td>Nguyen Tien Trung</td>
          <td>東京都葛飾区青砥</td>
          <td>080-5956-8989</td>
          <td>29</td>

          <td>
            <form>
              <button
                v-on:click.prevent="emitShowModal(user)"
                class="btn btn-sm btn-info mr-1"
              >
                Editar
              </button>
              <button
                v-on:click="deleteUser(user._id)"
                type="submit"
                class="btn btn-sm btn-danger"
              >
                Deletar
              </button>
            </form>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
export default {
  name: "UserList",

  data() {
    return {
      fields: ["first_name", "last_name", "age"],
      items: [
        { age: 40, first_name: "Dickerson", last_name: "Macdonald" },
        { age: 21, first_name: "Larsen", last_name: "Shaw" },
        { age: 89, first_name: "Geneva", last_name: "Wilson" },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  height: 79px;
}
.table-striped thead{
    color:black;
}

.table {
    background: ghostwhite;
}
</style>