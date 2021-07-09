<template>
    <div class="home">
        <h1>Template in vue js</h1>
        <Product />
        <LoginForm />
        <Users />
        <Users />
        <Users />

        <br>
        <br>
        <h1>Design by:{{name}}</h1>
        <input type="text" v-model="name" />
        <button v-on:click="click">Click me</button>

        <SignUp />
    </div>
</template>
<script>
    import Product from './Product.vue'   
    import Users from './Users.vue'
    import LoginForm from './LoginForm.vue'
    import SignUp from './SignUp.vue'
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
            SignUp
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
