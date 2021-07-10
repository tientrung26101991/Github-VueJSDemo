<template>
    <div class="home">
        <!-- <Product /> -->
        <LoginForm />
        <!-- <Users />
        <br>
        <br> -->
        <h1 class="design">Design by:{{name}}</h1>
        <!-- <input type="text" v-model="name" />
        <button v-on:click="click">Click me</button>
        <SignUp />  -->
    </div>
</template>

<script>
    // import Product from './Product.vue'   
    // import Users from './Users.vue'
    import LoginForm from './LoginForm.vue'
    // import SignUp from './SignUp.vue'
    // import BootStrap from './BootStrap.vue'
    export default {
        name: "Home",

        data() {
            return {
                name: "Nguyen Tien Trung",
            }
        },

        components: {
            // Product,
            // Users,
            LoginForm,
            // SignUp,
            // BootStrap
        },

        methods: {
            click() {
                this.name =name
            }
        }
    }
</script>

<style>

    .home {
        background-color: darkgrey;
        height:780px;
    }

    .design{
        background-color: darkseagreen;
    }
</style>
