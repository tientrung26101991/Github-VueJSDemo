<template>
  <div class="bootstrap">
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item>
          <router-link :to="{ name: 'home' }" class="routerLink">Home</router-link>
        </b-nav-item>

        <!-- Navbar dropdowns -->
        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="User" right>
          <b-dropdown-item>
            <router-link :to="{ name: 'signup' }" class="routerLink">SignUp</router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link :to="{ name: 'list' }" class="routerLink">User List</router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link :to="{ name: 'add' }" class="routerLink">Add User</router-link>
          </b-dropdown-item>
          <b-dropdown-item>Update User</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bootstrap {
  background-color: darkgrey;
}

.routerLink{
    text-decoration: none;
}
</style>
