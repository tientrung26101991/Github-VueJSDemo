<template>
    <div id="form">
        <form @submit="login">
            <h1>Login Form</h1>
            <input type="text" v-on:input="u_names = $event.target.value" placeholder="enter user name:" /><br><br>
            <input type="password" v-on:input="passwords = $event.target.value" placeholder="enter user password:" /><br><br>
            <b-button pill type="submit">Login</b-button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "LoginForm",

        data() {
            return {
                error: [],
                u_names: null,
                passwords: null

            }
        },

        methods: {
            login() {
                alert("Name" + this.u_names + "Pw:" + this.passwords);


                if(this.u_names && this.passwords) {
                    alert(this.u_names + "," + this.passwords)        
                }
                this.error=[];    
                if (!this.u_names) {
                    alert("name is required")
                }
                if (!this.passwords) {
                    alert("password is required")
                }
                alert("error!!!!!")
            }
        }   
    }

</script>

<style>
    #form {
        background-color:#e2e3e5;      
        margin-top:0px;
        padding:100px;
        height:780px;
        width: 550px;
        margin:auto;
    }

    h1 {
        text-shadow: 2px 2px 5px red;
    }
</style>