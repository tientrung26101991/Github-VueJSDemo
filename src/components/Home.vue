<template>
    <div class="home">
        <h1>Template in vue js</h1>
        <Product />
        <LoginForm />
        <Users />
        <br>
        <br>
        <h1>Design by:{{name}}</h1>
        <input type="text" v-model="name" />
        <button v-on:click="click">Click me</button>
        <SignUp />
        <BootStrap/>
    </div>
</template>

<script>
    import Product from './Product.vue'   
    import Users from './Users.vue'
    import LoginForm from './LoginForm.vue'
    import SignUp from './SignUp.vue'
    import BootStrap from './BootStrap.vue'
    export default {
        name: "Home",

        data() {
            return {
                name: "Nguyen Tien Trung",
            }
        },

        components: {
            Product,
            Users,
            LoginForm,
            SignUp,
            BootStrap
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
        background-color:aquamarine;
        height:600px;
    }
</style>
