<template>
    <div id="form">
        <form @submit="login">
            <h1>Login Form</h1>
            <input type="text" v-on:input="u_name = $event.target.value" placeholder="enter user name:" /><br><br>
            <input type="password" v-on:input="password = $event.target.value" placeholder="enter user password:" /><br><br>
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "LoginForm",

        data() {
            return {
                error: [],
                u_name: 123,
                password: null

            }
        },

        methods: {
            login() {
                alert("Name" + this.u_name + "Pw:" + this.password);


                if(this.u_name && this.password) {
                    alert(this.u_name + "," + this.password)        
                }
                this.error=[];    
                if (!this.u_name) {
                    alert("name is required")
                }
                if (!this.password) {
                    alert("password is required")
                }
                alert("error!!!!!")
            }
        }   
    }

</script>

<style scoped>
    #form {
        background-color:burlywood;
        margin-right:400px;
        margin-top:0px;
        width:500px;
        padding:10px;
        float:right;
        text-align:center;
        
    }
</style>